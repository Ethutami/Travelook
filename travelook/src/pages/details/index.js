import React from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux';

import logo from '../../asset/image/logo.png'
import Header from '../../component/header'
import CardImage from '../../component/card/CardImage'
import AmenitieShortList from '../../component/detailList/amenitie/amenitie'
import Review from '../../component/detailList/review'
import About from '../../component/detailList/about/about'
import PriceComponent from '../../component/detailList/IDR'

const index = ({navigation}) => {
    const {details} = useSelector(state => state.hotelReducer)
    const food = details?.foodandbeverage 
    const service = details?.service
    if (details !== {} || details !== undefined) {
        return (
            <>
            <ScrollView 
                style={styles.dataExistContainer} 
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
                    <About about={details?.summary}/>
                </View>
            </ScrollView>
            <PriceComponent IDR={details?.price} txtBtn='Book Now'/>
            </>
        )
    } else {
        return(
            <View style={styles.dataEmptyContainer}>
                <Image source={logo} style={styles.image}/>
            </View>
        )
    }
   
}

const styles = StyleSheet.create({
    dataExistContainer: {
        flex:1, 
        marginBottom:20,
        backgroundColor:'#ffffff', 
    },
    dataEmptyContainer: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center',
    },
    image: {
        width:'30%', 
        height:'14%', 
        resizeMode:'stretch',
    },
})

export default index