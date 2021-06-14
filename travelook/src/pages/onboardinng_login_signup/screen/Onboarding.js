import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../../asset/image/logo.png'
import { request_order_list } from '../../../redux/action/actionReservation'
import { request_data_user } from '../../../redux/action/actionUser'

const Onboarding = ({navigation}) => {
    const dispatch = useDispatch()
    const {dataUser} = useSelector(state => state.userReducer)
    useEffect( async () => {
        dispatch(request_data_user())
        dispatch(request_order_list())
        setTimeout( async () => {
            const token = await AsyncStorage.getItem('access_token')
            //console.log(token);
            token ? navigation.navigate('TabMain')
            :navigation.navigate('Login') 
        }, 3000);
        try {
            const token = await AsyncStorage.getItem('access_token')
            //console.log(token);
            token ? navigation.navigate('TabMain')
            :navigation.navigate('Login') 
            
        } catch (error) {
            
        }
        
    }, [])
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image source={logo} style={{width:'60%', height:'25%', resizeMode:'stretch'}}/>
        </View>
    )
}
export default Onboarding
const styles = StyleSheet.create({})
