import React from 'react'
import { StyleSheet, Text, TouchableOpacity, } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather'

import { request_hotel, request_State_hotel, request_all_hotel } from '../../../../redux/action/actionhotel';
import { requirement } from '../../../../redux/action/actionetc';

const buttonSearch = ({search, invalidDate}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={()=>{
                if (!invalidDate) {
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
            }}>
            <Text style={styles.text}>Search</Text>
            <Icon name='arrow-right' size={13} color='#ffffff' style={{alignSelf:'center'}}/>
        </TouchableOpacity>

    )
}

export default buttonSearch

const styles = StyleSheet.create({
    button:{
        marginTop:20, 
        padding:10, 
        width:'90%', 
        height:45, 
        flexDirection:'row',
        justifyContent:'center', 
        backgroundColor:'#FF704D', 

    },
    text: {
        marginRight:10, 
        alignSelf:'center',
        color:'#ffffff', 
    },
})
