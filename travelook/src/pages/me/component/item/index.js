import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import User_icon from 'react-native-vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { destination, end_date, guest, start_date } from '../../../../redux/action/actionetc';
import { get_all_user_review } from '../../../../redux/action/actionrivew';

const index = ({label}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()

    let nama;
    let callNavigation;
    if(label === 'Account'){
        nama = 'user'
        callNavigation = ()=> {
                navigation.navigate('Account')    
        }
    }else if(label === 'Notification'){
        nama = 'bell'
        callNavigation = ()=> {navigation.navigate('Notification')}
    }else if(label === 'Review') {
        nama = 'star'
        callNavigation = ()=> {
            try {
                dispatch(get_all_user_review())
                navigation.navigate('Review')
            } catch (error) {
                console.log('there is an error when trying navigate to user review');
            }
        }
    }else if(label === 'Logout'){
        nama ='log-out'
        callNavigation = async ()=> {
            try {
                dispatch(destination(''))
                dispatch(start_date({}))
                dispatch(end_date({}))
                dispatch(guest(0))
                await AsyncStorage.removeItem('access_token')
                navigation.navigate('Login')
            } catch (error) {
            }
        }
            
    }

    return (
        <View style={{flexDirection:'row', padding:20, alignItems:'center', marginTop:8}}>
            <User_icon name={nama} size={20} color='#C2C3C6'/>
            <TouchableOpacity onPress={()=> {callNavigation()}}>
                <Text style={styles.label}>{label}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    label:{
        marginHorizontal:20, 
        fontSize:18, 
        color:'#3E3E3E'
    }
})
