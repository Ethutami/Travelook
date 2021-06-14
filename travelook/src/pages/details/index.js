import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import Header from '../../component/header'
import CardImage from '../../component/card/CardImage'
import AmenitieShortList from '../../component/detailList/amenitie/amenitie'
import Review from '../../component/detailList/review'
import GoogleMap from '../../component/detailList/googleMap'
import About from '../../component/detailList/about/about'
import PriceComponent from '../../component/detailList/IDR'
import logo from '../../asset/image/logo.png'

import { useSelector, useDispatch } from 'react-redux';


const index = ({navigation}) => {
    const {details} = useSelector(state => state.hotelReducer)
    const food = details?.foodandbeverage 
    const service = details?.service
    // console.log(hotelReducer);
    if (details !== {} || details !== undefined) {
        return (
            <>
            <ScrollView 
                style={{flex:1, backgroundColor:'#ffffff', marginBottom:20}} 
                showsVerticalScrollIndicator={false}>
                <Header 
                    page='FILTER&SORT' 
                    label={details?.name}
                    date={`${details?.total_occupancy} guest | ${details?.total_bedrooms} badrooms . ${details?.total_bathroom} bathroom `}
                    goBack={()=> navigation.goBack()}/>
                <CardImage
                    photo={{require:'https://travelook.gabatch11.my.id/'+details?.defaultImages}}
                    name={details?.name}
                    guest ={details?.total_occupancy}
                    badroom={details?.total_bedrooms}
                    bathroom={details?.total_bathroom}
                />
                <View style={{marginTop:24, marginHorizontal:16, marginBottom:74}}>
                    {food !== undefined && service !== undefined &&
                    <AmenitieShortList
                        foodandbeveragelist1 ={food["1"]}
                        foodandbeveragelist2 ={food['2']}
                        foodandbeveragelist3 ={food['3']}
                        serviceList1={service['1']}
                        serviceList2={service['2']}
                    />
                    }
                    <Review/>
                    {/* <GoogleMap/> */}
                    <About about={details?.summary}/>
                </View>
            </ScrollView>
                <PriceComponent IDR={details?.price} txtBtn='Book Now'/>
            </>
        )
        
    } else {
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image 
                    source={logo} 
                    style={{width:'30%', height:'14%', resizeMode:'stretch'}}/>
            </View>
        )
    }
    

   
   
}

export default index

const styles = StyleSheet.create({})
