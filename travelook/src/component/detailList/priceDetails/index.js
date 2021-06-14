import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';

const index = ({guest, price, night, caculate, fee, total}) => {
    return (
        <>
            <View style={{flex:1, marginTop: 24, marginHorizontal:16}}> 
                <Text style={{fontSize:16, color:'#898B8F', marginBottom:16}}>Price Details</Text>
                <View style={styles.detail}>
                    <Text style={styles.txt}>{`${guest} x ${price} (${night} nights)`}</Text>
                    <Text style={styles.txt}>IDR {caculate}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.txt} >Service fee</Text>
                    <Text style={styles.txt}>IDR {fee}</Text>
                </View>
                <View style={{borderBottomColor:'#E1E1E1', borderBottomWidth:1, marginTop:17, marginBottom:15}}></View>
                <View style={styles.detail}>
                    <Text style={styles.txt}>Total</Text>
                    <Text style={styles.txt}>IDR {caculate-fee}</Text>
                </View>
            </View>
            
        </>
    )
}

export default index

const styles = StyleSheet.create({
    detail:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
        marginBottom:16,
    },
    txt:{
        fontSize:16,
        color:'#3E3E3E'
    }
})
