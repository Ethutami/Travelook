import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import EmptyStateScreen from '../empty_State'
import Header from '../../component/header'

import Info_icon from 'react-native-vector-icons/Feather'

const index = ({navigation}) => {
    const [notivication, setNotivication] = useState([
        {
            time :'16:09',
            id :'#111107489',
            mail:'Yay! Your booking request has been received and confirmed'
        },
        {
            time :'16:09',
            id :'#1111074895',
            mail:'Yay! Your booking request has been received and confirmed'
        },
        {
            time :'16:09',
            id :'#1111074894',
            mail:'Yay! Your booking request has been received and confirmed'
        },
        {
            time :'16:09',
            id :'#1111074893',
            mail:'Yay! Your booking request has been received and confirmed'
        },
    ])
    return (
        <View style={{flex:1, backgroundColor:'#ffffff'}}>
            <Header label='Notification' page='w/arrow_bck' goBack={()=>{navigation.goBack()}}/>
            {notivication ?
                <>
                    {/* <Text style={{marginLeft:10, marginTop:20}}>You will get the latest info and updates from us.</Text> */}
                    <FlatList
                        data={notivication}
                        keyExtractor={(item)=> item.id}
                        renderItem={({item})=>{
                            return(
                                <>
                                <View style={{marginVertical:16, paddingHorizontal:16}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Info_icon name='info' size={20} color='#898B8F'/>
                                        <Text style={{color:'#898B8F', fontSize:12, marginBottom:8, marginLeft:10}}>Info | {item.time}</Text>
                                    </View>
                                    <Text style={{fontSize:16, fontWeight:'bold', color:'#3E3E3E',marginBottom:8}}>Booking Confirmation</Text>
                                    <Text style={{ fontSize:16,}}>{item.mail}</Text>
                                </View>
                                <View style={{ borderBottomColor:'#F3F3F3', borderBottomWidth:2}} ></View>
                                </>
                            )
                        }}
                    />
                </>
            : 
            <EmptyStateScreen text1='See all your notifications here' text2='You will get the latest info and updates from us.'/>
            }
        </View>
    )
}

export default index

const styles = StyleSheet.create({})
