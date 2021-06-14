import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import Header from '../../header'
import Rate_icon from 'react-native-vector-icons/Fontisto'
import userImage from '../../../asset/image/user.png'
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';

const allReview = ({navigation}) => {
    const {details, loading, review} = useSelector(state => state.hotelReducer)
    return (
        <View style={{flex:1}}>
            <Header page='w/arrow_bck' label='Review' goBack={()=>{navigation.goBack()}}/>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {review?.length !== 0 ?
                    <View style={{flexDirection:'row', marginBottom:19}}>
                        <Rate_icon name='star' size={20} color='#FCC659'/>
                        <Text style={{marginHorizontal:10, fontSize:15}}>{details.rating}/5</Text>
                        <Text style={{fontSize:15, color:'#898B8F'}}>{review ? `(${review?.length} review)` : `(1 review)` }</Text>
                    </View>
                    :
                    <Text style={{marginRight:10}}> 0 reviews</Text>
                }
                {review?.length !== 0 ?
                <>
                    {review?.map((e, i)=>{
                            return(
                                <View key={e.User.id} style={{paddingBottom:53, paddingHorizontal:16, paddingTop:16}}>
                                    <View style={styles.userWrapped}>
                                        <View style={{flexDirection:'row', alignItems:'center'}}>
                                            <Image source={userImage} style={styles.userImage}/>
                                            <View style={{marginLeft:wp(5)}}>
                                                <Text style={{fontSize:16, color:'#3E3E3E'}}>{e.User?.first_name} {e.User?.last_name}</Text>
                                                <Text style={{fontSize:12, color:'#898B8F'}}>{e.updatedAt}</Text>
                                            </View>
                                        </View>
                                        <View style={{flexDirection:'row', alignItems:'center'}}>
                                            <Rate_icon name='star' size={12} color='#FCC659'/>
                                            <Text style={styles.rate}>{e.rating}</Text>
                                        </View>
                                    </View>
                                    <Text style={{fontSize:14,}}>{e.comment}</Text>
                                </View>
                            )
                    })}
                </>
                :
                    <Text style={{marginTop:20, alignItems:'center', backgroundColor:'#F3F3F3', padding:10}}>We don't have any reviews for {details?.name}</Text>
                }
                <TouchableOpacity //onPress={()=>{navigation.navigate('ReviewAllScreen')}}
                style={{alignItems:'center', marginTop:10, marginBottom:10,}}>
                    <Text  style={styles.buttonMore} >Load more</Text>
                </TouchableOpacity>
            </ScrollView>
           
        </View>
    )
}

export default allReview

const styles = StyleSheet.create({
    scrollView:{marginTop: hp(4), marginHorizontal:16, paddingBottom:14},
    userWrapped:{
        flexDirection:'row', 
        marginBottom:14, 
        justifyContent:'space-between', 
        alignItems:'center',
    },
    userImage:{
        width:40, 
        height:40, 
        borderRadius:20, 
        resizeMode:'stretch',
    },
    buttonMore:{
        padding:10, 
        borderWidth:1, 
        borderColor:'#1E1E1E', 
        alignItems:'center',
        
    },
})
