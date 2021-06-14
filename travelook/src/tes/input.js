import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const input = ({label, firstNames}) => {
    return (
        <View style={{}}>
                <TextInput
                placeholder={label}
                style={styles.inputTxt}
                onChangeText={(tes)=> firstNames(tes)}
                />
        </View>
    )
}

export default input

const styles = StyleSheet.create({
    inputTxt:{
        width:'100%', 
        padding:15, 
        borderWidth:1, 
        borderColor:'#E1E1E1',  
        backgroundColor:"#ffffff", 
        marginTop:20
    },
})
