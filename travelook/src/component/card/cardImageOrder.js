import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import fototes from '../../asset/image/image.png'
import Smile_icon from 'react-native-vector-icons/Feather'
import Feather_icon from 'react-native-vector-icons/Feather'
import moment from 'moment';


const cardImageOrder = (props) => {
    const start_date = moment(props.start_date).format('ddd, DD MMM YYYY')
    const end_date = moment(props.end_date).format('ddd, DD MMM YYYY')
    return (
        <View style={styles.CardWrapped}>
                <Image source={fototes} style={styles.cardImage}/>
                <View style={{paddingHorizontal:15, paddingBottom:16}}>
                    <Text style={{color:'#898B8F', fontSize:12,marginTop:14}}>ORDER ID #{props.orderId}</Text>
                    <Text style={styles.CardItemName}>{props.name}</Text>
                    <View style={{flexDirection:'row', marginTop:13}}>
                        <Feather_icon name="calendar" size={16} color='#3E3E3E'/>
                        <Text style={{color:'#3E3E3E', marginLeft:8, fontSize:12}}>{`${start_date} - ${end_date}`}</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <Smile_icon name="smile" size={16} color='#3E3E3E'/>
                        <Text style={{color:'#3E3E3E', marginLeft:8, fontSize:12}}>{props.guest} guests</Text>
                    </View>
                </View>
                {/* <TouchableOpacity
                style={styles.buttonShowAll}
                >
                    <Text style={{color:'#1E1E1E'}}>Show all photos</Text>
                </TouchableOpacity> */}
        </View>
    )
}

export default cardImageOrder

const styles = StyleSheet.create({
    CardWrapped:{
        flex:1,
        borderColor:'#E1E1E1',
        borderWidth:1,
        marginBottom:20,
        marginHorizontal:16,
        marginBottom:20
        //height:hp(40),
     
    },
    cardImage:{
        width:'100%', 
        height:179, 
        resizeMode:'stretch'
    },
    CardItemName:{
        marginTop:13, 
        color:'#3E3E3E', 
        fontSize:14, 
        fontWeight:'bold',
    },
    buttonShowAll:{
        borderWidth:1, 
        borderColor:'#E1E1E1', 
        padding:10, 
        width:'32%', 
        backgroundColor:'#ffffff',
        position:'absolute',
        right:wp(8),
        top:hp(22),
    },
})

