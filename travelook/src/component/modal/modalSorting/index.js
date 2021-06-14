import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import CheckBox from '../../checkBox'

import ButtonSort from '../../button/black'
export const showSorting = (label, data) => {
    return (
        <View style={{flex:1,}}>
            <View style={{marginTop:'5%', paddingRight:8}}>
                <Text style={styles.label}>{label}</Text>
                <Text style={{color:'#898B8F', marginTop:20, marginLeft:5, fontSize:16}}>Location</Text>
                {data.map((item, key)=>{
                    return(
                        <CheckBox label={item}/>
                    )
                })}
            </View>
            <View style={{flex:1, marginBottom:10}}>
                <ButtonSort label='Apply Sort'/>
            </View>
            
        </View>
    )
}



const styles = StyleSheet.create({
    label:{
        color:'#1E1E1E', 
        fontSize:18, 
        fontWeight:'bold',
    },
})
