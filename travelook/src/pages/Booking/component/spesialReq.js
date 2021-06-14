import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import CheckBoxComponent from '../../../component/checkBox'


const spesialReq = () => {
    return (
        <View style={{flex:1, paddingHorizontal:16, marginTop:24}}>
            <Text style={{color:'#3E3E3E', fontSize:16, fontWeight:'bold'}}>Special Requests</Text>
            <Text style={{marginTop:8}}>Have a speacial request that makes you more comfortable? ask here. Your request is subject to availability and additional fees may apply</Text>
            <View style={{marginTop:24}}>
                <CheckBoxComponent label='Non-Smoking room'/>
                <CheckBoxComponent label='High Floor'/>
                <TextInput
                    style={{borderWidth:1, borderColor:'#E1E1E1', marginTop:16, padding:10}}
                    placeholder='Tell us a bit more about your experience'
                    multiline={true}
                /> 
            </View>
        </View>
    )
}

export default spesialReq

const styles = StyleSheet.create({})
