import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';


import fototes from '../../asset/image/image.png'

const CardImage = (props) => {
    
    return (

            <View style={styles.CardWrapped}>
                <Image source={fototes} style={styles.cardImage}/>
                <View style={{paddingHorizontal:16}}>
                    <Text style={styles.CardItemName}>{props.name}</Text>
                    <Text style={{color:'#3E3E3E', fontSize:14}}>{props.guest +' guest . '+ props.badroom +` badrooms . `+ props.bathroom +` bathroom`}</Text>
                    <View style={{borderBottomColor:'#E1E1E1', borderBottomWidth:1, marginTop:24}}></View>
                </View>
                {/* <TouchableOpacity
                style={styles.buttonShowAll}
                >
                    <Text style={{color:'#1E1E1E'}}>Show all photos</Text>
                </TouchableOpacity> */}
            </View>


    )
}

export default CardImage


const styles = StyleSheet.create({
    CardWrapped:{
        flex:1,
        width:wp(100), 
        height:hp(40),
    },
    cardImage:{
        width:'100%', 
        height:195, 
        resizeMode:'stretch',
        backgroundColor:'#E1E1E1',
    },
    CardItemName:{
        marginTop:10, 
        color:'#3E3E3E', 
        fontSize:16, 
        fontWeight:'bold',
        marginBottom:10,
    },
    buttonShowAll:{
        borderWidth:1, 
        borderColor:'#E1E1E1', 
        padding:10, 
        width:'31%', 
        backgroundColor:'#ffffff',
        position:'absolute',
        right:wp(4),
        top:hp(20),
    },
})
