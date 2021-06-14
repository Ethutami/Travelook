import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import StarIcon from 'react-native-vector-icons/FontAwesome'

export default function index(props) {

    return (
        <View style={{flex:1,width:'41%'}}>
            <TouchableOpacity
                onPress={()=>{
                    props.rating(props.rate)
                }}
            >
                <View style={{flexDirection:'row',}}>
                    <StarIcon name ='star' size={20} color={'#FCC659'} style={styles.rating}/>
                    <StarIcon name ={props.rate === 1 ? 'star-o' : 'star'} size={20} color={'#FCC659'} style={styles.rating}/>
                    <StarIcon name ={props.rate < 3 ? 'star-o' : 'star'} size={20} color={'#FCC659'} style={styles.rating}/>
                    <StarIcon name ={props.rate < 4 ? 'star-o' : 'star'} size={20} color={'#FCC659'} style={styles.rating}/>
                    <StarIcon name ={props.rate < 5 ? 'star-o' : 'star'} size={20} color={'#FCC659'} style={styles.rating}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    rating:{
        marginLeft:10,
    },
   
})
