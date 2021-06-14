import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const button = (props) => {
    
    return (
        <View style={{}} >
            <TouchableOpacity
            style={styles.button}
            onPress={()=> props.onPress()}
            >
                <Text style={{color:'#ffffff'}}>{props.label} {props.nama}</Text>
            </TouchableOpacity>
    
        </View>
    )
}

export default button

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#1E1E1E', 
        width:'100%', 
        height:55, 
        marginTop:20, 
        padding:15, 
        justifyContent:'center', 
        alignItems:'center'
        
    },
})
