import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useDispatch,useSelector } from 'react-redux'

import SearchComponet from './serach'
import Location_icon from 'react-native-vector-icons/MaterialIcons'
import { destination } from '../../../redux/action/actionetc';
import { ActivityIndicator } from 'react-native';

export const showDestination = (props) => {
    const navigation = useNavigation();
    const hotelRequest = useSelector(state => state.hotelReducer.hotelRequest)
    const dispatch = useDispatch()
    let location='' 
    //console.log(hotelRequest);
    return(
        <View style={{padding:16, flex:1}}>  
            <Text style={{fontSize:18, marginBottom:15,}}>{props.label}</Text>
            <SearchComponet/>
            
            {hotelRequest !== undefined && hotelRequest !== null && hotelRequest?.length !== 0 ?
                hotelRequest.map((item)=>{
                //console.log(item);
                    if (item.location.city !== location) {
                        location = item.location.city
                        return(
                            <View key={item.id} style={styles.map} >
                                <View style={{
                                    backgroundColor:'#F3F3F3', 
                                    padding:5, 
                                    width:'9%', 
                                    borderColor:'#C2C3C6', 
                                    borderWidth:1}}>
                                    <Location_icon name='location-on' size={18} color='#898B8F'/>
                                </View>
                                <TouchableOpacity
                                    onPress={()=>{
                                    dispatch(destination(`${item.location.city}`))
                                    props.closeModal()
                                }}
                                >
                                    <Text style={{
                                        color:'#1E1E1E', 
                                        marginLeft:10, 
                                        fontSize:15
                                    }}>{item.location.city}</Text>
                                </TouchableOpacity>
                                
                            </View>
                        )  
                    }})
                :
                hotelRequest === undefined &&
                <View style={{justifyContent:'center', alignSelf:'center', flex :1}}>
                    <ActivityIndicator size="large" color="#3E3E3E"  />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    map:{
        marginTop:20, 
        flexDirection:'row', 
        padding:10, 
        alignItems:'center',
    },
})
