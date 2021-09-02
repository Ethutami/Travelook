import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import CheckBoxComponent from '../../../component/checkBox'

const spesialReq = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.specialReq}>Special Requests</Text>
            <Text style={{marginTop:8}}>Have a speacial request that makes you more comfortable? ask here. Your request is subject to availability and additional fees may apply</Text>
            <View style={{marginTop:24}}>
                <CheckBoxComponent label='Non-Smoking room'/>
                <CheckBoxComponent label='High Floor'/>
                <TextInput
                    style={styles.textField}
                    placeholder='Tell us a bit more about your experience'
                    multiline={true}
                /> 
            </View>
        </View>
    )
}

export default spesialReq

const styles = StyleSheet.create({
    container: {
        flex:1, 
        marginTop:24,
        paddingHorizontal:16, 
    },
    specialReq: {
        fontSize:16, 
        fontWeight:'bold',
        color:'#3E3E3E', 
    },
    textField: {
        marginTop:16, 
        padding:10,
        borderWidth:1, 
        borderColor:'#E1E1E1', 
    },
})
