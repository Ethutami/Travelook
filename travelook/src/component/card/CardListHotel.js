import React, { useEffect, useState, Component } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import NumberFormat from 'react-number-format';
import Spinner from 'react-native-loading-spinner-overlay';


import Rate_icon from 'react-native-vector-icons/Fontisto'
import Dot_icon from 'react-native-vector-icons/Octicons'
import fototes from '../../asset/image/image.png'
import { get_review_room, loading_page, request_details_hotel } from '../../redux/action/actionhotel';
import { useDispatch, useSelector } from 'react-redux';
import { detailsForAllHotel, toHomePage } from '../../redux/action/actionetc';


const index = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const  {allHotel, requirementHotel} = useSelector(state => state.hotelReducer)
    const renderItem =({item})=>{
        return(
            <View style={styles.CardWrapped}>
                <Image source={fototes} style={styles.cardImage}/>
                <View style={{marginTop:'2%', paddingTop:17, paddingHorizontal:16}}>
                    <TouchableOpacity
                        onPress={ ()=>{
                            try {
                                dispatch(request_details_hotel(item.id))
                                dispatch(get_review_room(item.id))
                                navigation.navigate('Details')
                            } catch (error) {
                                console.log('can not call details page, Error :', error);   
                            } 
                        }}
                    >
                        <View style={{flexDirection:'row', marginBottom:5}}>
                            <Rate_icon name='star' size={16} color='#FCC659'/>
                            <Text style={{marginHorizontal:10, color:'#3E3E3E', fontSize:12}}>{item.rating}</Text>
                            <Text style={{color:'#898B8F', fontSize:12}}>{item?.review ? item?.review +' review' : '(0 review)'}</Text>
                        </View>
                        <Text style={styles.CardItemName}>{item.name}</Text>
                        <View style={{flexDirection:'row', alignItems:'center',}}>
                            <Text style={{color:'#898B8F', fontSize:12,}}>{`${item.total_occupancy} Occupancy`}</Text>
                            <Dot_icon name='primitive-dot' style={20} color='#898B8F' style={{marginHorizontal:10,}}/>
                            <Text style={{color:'#898B8F', fontSize:12,}}>{item.total_bedrooms} badroom</Text>
                            <Dot_icon name='primitive-dot' style={20} color='#898B8F' style={{marginHorizontal:10,}}/>
                            <Text style={{color:'#898B8F', fontSize:12, }}>{item.total_bathroom} bath</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{color :"#199946", fontSize:14, marginBottom:16, marginTop:16}}>IDR {(item.price).toLocaleString({maximumFractionDigits: 2})} / night</Text>
                    {/* //{maximumFractionDigits: 2} */}
                </View>
            </View>
        )
    }
    if (requirementHotel?.length !== 0) {
        return (
            <View style={{paddingBottom:8, paddingTop:10, flex:1, backgroundColor:'#ffffff', flex:1}}>
                    <FlatList
                        data={requirementHotel}
                        keyExtractor={(item)=>item.id}
                        renderItem={renderItem}
                    />
            </View>
        )
    } else if (allHotel?.length !== 0){
        return(
            <View style={{paddingBottom:8, paddingTop:10, flex:1, backgroundColor:'#ffffff', flex:1,}}>
                    <FlatList
                        data={allHotel}
                        keyExtractor={(item)=>item.id}
                        renderItem={renderItem}
                    />
            </View>
        )
    }else{
        return(

        <View 
            style={{
                flex:1,
                marginBottom:hp(16), 
                justifyContent:'center', 
                alignItems:'center',
            }}>
               {/* <View><Text>there is not hotel here</Text></View> */}
               <ActivityIndicator size="large" color="#3E3E3E" />
            </View>
        )
    }    
}

export default index

const styles = StyleSheet.create({
    CardWrapped:{
        flex:1,
        width:wp(92), 
        borderColor:'#E1E1E1',
        borderWidth:1,
        marginHorizontal:16,
        marginBottom:16,
    },
    cardImage:{
        width:'100%', 
        height:hp(25), 
        resizeMode:'stretch'
    },
    CardItemName:{
        color:'#3E3E3E', 
        fontSize:14, 
        fontWeight:'bold',
        marginBottom:4,
    },
    spinnerTextStyle: {
        color: '#FFF'
      },
})