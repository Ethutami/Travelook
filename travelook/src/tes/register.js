import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import InputComponent from './input'
import ButtonComponent from './button'


const register = ({navigation}) => {
    const [state, setState] = useState()
    console.log(state);
    
    return (
        <View style={{padding:10}}>
            <InputComponent label='First Name' firstNames={(tes)=>{setState(tes)}}/>
            <InputComponent label='Last Name'/>
            <InputComponent label='Email'/>
            <InputComponent label='Passwordd'/>
            <InputComponent label='Confirm Passwordd'/>
            <ButtonComponent label='SIgn Up' nama='haha' onPress={()=>navigation.navigate('rate')}  stat={state}/>
        </View>
    )
}

export default register

const styles = StyleSheet.create({})
