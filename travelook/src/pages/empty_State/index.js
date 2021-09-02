import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import logo from '../../asset/image/EmptyStates.png'

const index = ({text1, text2}) => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.image}/>
            <Text style={styles.text1}>{text1}</Text>
            <Text style={{marginTop:10}}>{text2}</Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center',
    },
    image: {
        width:'60%', 
        height:'25%', 
        resizeMode:'stretch',
    },
    text1: {
        marginTop:30,
        fontWeight:'bold', 
        fontSize:16, 
    },
})
