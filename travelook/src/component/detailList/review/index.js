import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Rate_icon from 'react-native-vector-icons/Fontisto'
import userImage from '../../../asset/image/user.png'

const index = () => {
    const navigation = useNavigation();
    const {details, loading, review} = useSelector(state => state.hotelReducer)
    //console.log('rev',review);
    return (
        <View style={{flex:1, marginTop:24}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontSize:16, fontWeight:'bold'}}>Review</Text>
                {review?.length !== 0 ?
                    <View style={{flexDirection:'row',}}>
                        <Rate_icon name='star' size={20} color='#FCC659'/>
                        <Text style={{marginHorizontal:10, fontSize:15}}>{details.rating}/5</Text>
                        <Text style={{fontSize:15, color:'#898B8F'}}>{review ? `(${review?.length} review)` : `(1 review)` }</Text>
                    </View>
                    :
                    <Text style={{marginRight:10}}> 0 reviews</Text>
                }
            </View>
            {review?.length !== 0  && review !== undefined ?
            <>
                {review?.map((e, i)=>{
                    if (i <= 2) {
                        return(
                            <View key={e.User.id}>
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
                                <Text style={{fontSize:14}}>{e.comment}</Text>
                            </View>
                        )
                    } 
                })}
                {review?.length > 3 &&
                    <TouchableOpacity onPress={()=>{navigation.navigate('ReviewAllScreen')}}>
                        <Text style={styles.buttonShowALL}>Show all reviews</Text>
                    </TouchableOpacity>
                }
            </>
                :
                <Text style={{marginTop:20, alignItems:'center', backgroundColor:'#F3F3F3', padding:10}}>We don't have any reviews for {details?.name}</Text>
            }
            <View style={{borderBottomColor:'#E1E1E1', borderBottomWidth:1, marginTop:24}}></View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    buttonShowALL:{
        paddingHorizontal:8, 
        paddingVertical:5,
        borderWidth:1, 
        borderColor:'#E1E1E1', 
        width:107, 
        height:28,
        marginTop:90,
        fontSize:12,
    },
    userWrapped:{
        flexDirection:'row', 
        marginTop:hp(5), 
        marginBottom:hp(2), 
        justifyContent:'space-between', 
        alignItems:'center',
    },
    userImage:{
        width:32, 
        height:32, 
        borderRadius:32/2, 
        resizeMode:'stretch',
    },
    rate:{
        marginHorizontal:10, 
        fontSize:12 , 
        color:'#898B8F',
    },
})
