import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import logo from '../../asset/image/EmptyStates.png'

const index = ({text1, text2}) => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Image source={logo} style={{width:'60%', height:'25%', resizeMode:'stretch'}}/>
            <Text style={{fontWeight:'bold', fontSize:16, marginTop:30}}>{text1}</Text>
            <Text style={{marginTop:10}}>{text2}</Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({})
