import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Rating } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { get_all_user_review, set_user_review } from '../../../../redux/action/actionrivew';
import { request_order_list } from '../../../../redux/action/actionReservation';

import Header from '../../../../component/header'
import ButtonSubmit from '../../../../component/button/black'
import photo from '../../../../asset/image/image.png'
import Feather from 'react-native-vector-icons/Feather'

const editReview =  () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const {requirement} = useSelector(state => state.etcReducer)
    const [myReview, setMyReview] = useState({})

    return (
        <ScrollView style={styles.container}>
            <Header 
                label='Review' 
                page='w/arrow_bck' 
                goBack={()=>{dispatch(request_order_list()); 
                navigation.goBack()
                }}/>
            <Text style={styles.text}>Let everyone knows your experience by writing a review</Text>
            <View style={styles.cardContainer}>
                <Image source={photo} style={styles.cardImage}/>
                <View style={styles.innerCardContainer}>
                    <Text style={styles.orderID}>{`ORDER ID ${requirement.order_id}`}</Text>
                    <Text style={styles.CardItemName}>{requirement.name}</Text>
                    <View style={{flexDirection:'row',marginTop:13}}>
                        <Feather name='calendar' size={16}/>
                        <Text style={{color:'#3E3E3E',marginLeft:8, fontSize:12}}>{`${requirement.start}, ${requirement.end}`}</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <Feather name='smile' size={16}/>
                        <Text style={{color:'#3E3E3E',marginLeft:8, fontSize:12, marginBottom:14}}>{requirement.guest} guests</Text>
                    </View>
                </View>
            </View>
            <View style={styles.ratingwrap}>
                <Text style={{marginBottom:15, fontSize:18}}>How was it?</Text>
                <Rating 
                ratingCount={5}
                showRating 
                imageSize={25}
                fractions={1}
                startingValue={0} 
                onFinishRating={(a)=>{
                    setMyReview({...myReview, rating : a.toString(), user_id : requirement.idUser})
                }}
                />
            </View>
            <View style={styles.cardContainer}>
                <TextInput
                    multiline={true}
                    placeholder='Tell us a bit more about your experience'
                    onChangeText={(txt)=>{
                        setMyReview({...myReview, comment : txt, user_id : requirement.idUser})
                    }}
                />
            </View>
            <View style={{margin:10}}>
                <ButtonSubmit  
                    label='Submit'
                    submit={()=>{
                        try {
                            if (myReview?.rating) {
                                dispatch(set_user_review(requirement.id, myReview))
                                dispatch(get_all_user_review())
                                navigation.navigate('Review')
                            }
                        } catch (error) {
                            console.log('there is an error when trying navigate to Orders', error)
                        }}} />
            </View>
        </ScrollView>
    )
}

export default editReview

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ffffff', 
    },
    text: {
        marginHorizontal:16, 
        marginVertical:20, 
        fontSize:15,
    },
    cardContainer:{
        flex:1,
        marginHorizontal:16,
        marginBottom:16,
        width:wp(92), 
        borderColor:'#E1E1E1',
        borderWidth:1,
    },
    innerCardContainer: {
        paddingHorizontal:15, 
        paddingBottom:10,
    },
    orderID: {
        marginTop:14,
        fontSize:12,
        color:'#898B8F', 
    },
    CardItemName:{
        marginTop:13, 
        fontSize:14, 
        fontWeight:'bold',
        color:'#3E3E3E', 
    },
    cardImage:{
        width:'100%', 
        height:hp(25), 
        resizeMode:'stretch'
    },
    ratingwrap: {flexDirection:'column',paddingHorizontal:15, paddingBottom:20, alignItems:'center'}
})