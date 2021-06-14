import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { Rating, AirbnbRating } from 'react-native-elements';
import Toast from 'react-native-toast-message';


import Header from '../../../../component/header'
import ButtonSubmit from '../../../../component/button/black'
import photo from '../../../../asset/image/image.png'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ButtonEdit from '../../../../component/button/black'
import ButtonDelete from '../../../../component/button/white'

import { Image } from 'react-native';
import { TextInput } from 'react-native';
import { request_order_list } from '../../../../redux/action/actionReservation';

import { useDispatch, useSelector } from 'react-redux';
import { delete_one_review, get_all_user_review } from '../../../../redux/action/actionrivew';

export default function showReview({navigation}) {
   
    const dispatch = useDispatch()
    const {oneReview} = useSelector(state => state.userReview)
    //jconsole.log(3,oneReview);
    return (
        <>
        <ScrollView style={{backgroundColor:'#ffffff', flex:1}}>
            <Header label='Review' page='w/arrow_bck' goBack={()=>{dispatch(request_order_list()); navigation.goBack()}}/>
            <Text style={{marginHorizontal:16, marginVertical:20, fontSize:15}}>Let everyone knows your experience by writing a review</Text>
                <View style={styles.CardWrapped}>
                    <Image source={photo} style={styles.cardImage}/>
                    <View style={{paddingHorizontal:15, paddingBottom:10}}>
                        {/* <Text style={{color:'#898B8F', fontSize:12,marginTop:14}}>{`ORDER ID# ${oneReview?.order_id}`}</Text> */}
                        <Text style={styles.confirmed}>Done</Text>
                        <Text style={styles.CardItemName}>{oneReview?.Room?.name}</Text>
                        {/* <View style={{flexDirection:'row',marginTop:13}}>
                            <Feather name='calendar' size={16}/>
                            <Text style={{color:'#3E3E3E',marginLeft:8, fontSize:12}}>{`${oneReview?.start}, ${oneReview?.end}`}</Text>
                        </View>
                        <View style={{flexDirection:'row', marginTop:10}}>
                            <Feather name='smile' size={16}/>
                            <Text style={{color:'#3E3E3E',marginLeft:8, fontSize:12, marginBottom:14}}>{oneReview?.guest} guests</Text>
                        </View> */}
                    </View>
                </View>
                <View style={{flexDirection:'column',paddingHorizontal:15, paddingBottom:20, alignItems:'center'}}>
                    <Text style={{marginBottom:15, fontSize:18}}>How was it?</Text>
                    <Rating 
                    ratingCount={5}
                    showRating ={false}
                    imageSize={36}
                    fractions={1}
                    startingValue={oneReview?.rating ? oneReview?.rating : 0} 

                    // onFinishRating={(a)=>{
                    //     setMyReview({...myReview, rating : a.toString(), user_id : requirement.idUser})
                    // }}
                    />
                </View>
                    <Text style={{marginBottom:15, fontSize:18, paddingLeft:16}}>
                    Comment :
                    </Text>
                <View style={styles.CardWrappedComment}>
                    <Text style={{color : oneReview?.comment ? '#1E1E1E' : '#E1E1E1'}}> {oneReview?.comment ? oneReview?.comment : 'tambahkan comentar dong'}</Text>
                    <View style={styles.iconEditDelete}>
                        {/* <Feather name='edit' size={16} color='#199946' onPress={()=>alert(1)}/> */}
                        <TouchableOpacity 
                            onPress={()=>{
                               
                                // Toast.show({
                                //     text1: 'Hello',
                                //     text2: 'This is some something 👋'
                                //   });
                                try {
                                    dispatch(delete_one_review(oneReview.id))
                                    dispatch(get_all_user_review())
                                    navigation.navigate('Review')
                                } catch (error) {
                                    console.log('error when delete', error);
                                }
                            }} 
                        >
                            <AntDesign name='delete' size={16} color='#FF0000' style={{marginLeft:20, marginRight:10}} />
                        </TouchableOpacity>
                    </View>
                </View>
        </ScrollView>
                {/* <View style={{flexDirection:'row', width:'100%', paddingHorizontal:16, position:'absolute', bottom:0}}>
                    <View style={{width:'50%'}}>
                    <ButtonDelete label='Delete'/>
                    </View>
                    <View style={{width:'50%'}}>
                    <ButtonEdit label='Edit'/>
                    </View>
                </View> */}
        </>
    )
}

const styles = StyleSheet.create({
    CardWrapped:{
        flex:1,
        width:wp(92), 
        marginHorizontal:16,
        marginBottom:16,
    },
    CardWrappedComment:{
        flex:1,
        width:wp(92), 
        marginHorizontal:16,
        marginBottom:16,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    cardImage:{
        width:'100%', 
        height:hp(25), 
        resizeMode:'stretch'
    },
    CardItemName:{
        marginTop:13, 
        color:'#3E3E3E', 
        fontSize:14, 
        fontWeight:'bold',
    },

    confirmed:{
        position:'absolute', 
        right:26.5, 
        top:11, 
        padding:4, 
        backgroundColor:'#199946', 
        fontSize:11, 
        color:'#F4FCF1',
    },
    iconEditDelete:{
        flexDirection:'row', 
    }
})
