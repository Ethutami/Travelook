import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { request_hotel, request_State_hotel, request_all_hotel, loading_page } from '../../../../redux/action/actionhotel';
import { requirement } from '../../../../redux/action/actionetc';

import Icon from 'react-native-vector-icons/Feather'


const buttonSearch = ({search, invalidDate}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const {toPage} = useSelector(state => state.hotelReducer)
    //console.log(search);
    return (
        <>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>{
                if (!invalidDate) {
                    //console.log(search);
                    if (search !== null ){
                        try {
                            dispatch(request_hotel(search))
                            dispatch(request_State_hotel())
                            dispatch(requirement(search)) 
                            navigation.navigate('FilterSort')
                        } catch (error) { }
                    // }
                    }else {
                        dispatch(request_all_hotel())
                        dispatch(requirement(null))
                        navigation.navigate('AllHotelPage')
                        
                    }
                }
                
            }}
            >
                <Text style={{color:'#ffffff', marginRight:10, alignSelf:'center'}}>Search</Text>
                <Icon name='arrow-right' size={13} color='#ffffff' style={{alignSelf:'center'}}/>
            </TouchableOpacity>
            
        </>
    )
}

export default buttonSearch

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#FF704D', 
        width:'90%', 
        height:45, 
        marginTop:20, 
        padding:10, 
        flexDirection:'row',
        justifyContent:'center', 

    },
})
