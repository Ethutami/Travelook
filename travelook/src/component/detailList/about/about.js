import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';


const about = ({about}) => {
    
    //console.log(about.summary);
    return (
        <View style={{flex:1,marginTop: 24}}>
            <Text style={{fontSize:16, fontWeight:'bold', color:'#3E3E3E',}}>About</Text>
            <Text style={{color:'#3E3E3E', marginTop:24}}>{about}</Text>
            
        </View>
    )
}

export default about

const styles = StyleSheet.create({})
