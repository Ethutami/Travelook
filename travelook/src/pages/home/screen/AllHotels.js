import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../../../component/header'
import CardListHotel from '../../../component/card/CardListHotel'
import { testingdata, toHomePage } from '../../../redux/action/actionetc'
import { TextInput } from 'react-native'

const AllHotels = () => {
    const dispatch = useDispatch()
    const {tryPersist} = useSelector(state => state.etcReducer)
    useEffect(() => {
        dispatch(toHomePage(true))
    }, [])
    console.log(tryPersist);
    return (
        <View style={{flex:1}}>
            <Header page='single_label' label='All Hotel'/>
            {/* <TextInput
            placeholder='tes'
            value={tryPersist}
            onChangeText={(txt)=>{
                dispatch(testingdata(txt))
            }}
            />
            <Text>{tryPersist}</Text> */}
            <CardListHotel />
        </View>
    )
}

export default AllHotels

const styles = StyleSheet.create({})
