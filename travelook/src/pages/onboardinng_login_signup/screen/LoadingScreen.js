import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import logo from '../../../asset/image/logo.png'

const LoadingScreen = ({navigation}) => {
    const {toPage} = useSelector(state => state.hotelReducer)
    //console.log(toPage);
    useEffect(() => {
        setTimeout(() => {
            toPage === 'AllHOtelPage' ? navigation.navigate('AllHotelPage'):
            toPage === 'FilterSort' &&  navigation.navigate('FilterSort')
        }, 1000);
     }, [])
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image 
                source={logo} 
                style={{width:'30%', height:'14%', resizeMode:'stretch'}}/>
        </View>
    )
}

export default LoadingScreen

const styles = StyleSheet.create({})
