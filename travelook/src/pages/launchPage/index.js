import React, { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { request_order_list } from '../../redux/action/actionReservation'
import { request_data_user } from '../../redux/action/actionUser'

import commonLogo from '../../asset/image/logo.png'

export default function LaunchPage({navigation}) {
    const dispatch = useDispatch()
    useEffect( async () => {
        dispatch(request_data_user())
        dispatch(request_order_list())
        setTimeout( async () => {
            const token = await AsyncStorage.getItem('access_token')
            token ? navigation.navigate('TabMain')
            :navigation.navigate('Login') 
        }, 3000);
        try {
            const token = await AsyncStorage.getItem('access_token')
            token ? navigation.navigate('TabMain')
            :navigation.navigate('Login') 
            
        } catch (error) {}   
    }, [])

    return (
        <View style={styles.container}>
            <Image source={commonLogo} style={styles.commonLogo}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center',
    },
    commonLogo: {
        width:'60%', 
        height:'25%', 
        resizeMode:'stretch',
    },
})
