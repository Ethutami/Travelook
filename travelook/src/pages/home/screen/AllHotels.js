import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../../../component/header'
import CardListHotel from '../../../component/card/CardListHotel'
import { toHomePage } from '../../../redux/action/actionetc'

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
            <CardListHotel />
        </View>
    )
}

export default AllHotels

const styles = StyleSheet.create({})
