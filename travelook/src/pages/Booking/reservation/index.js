import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../../component/header'
import { next_progres_steps } from '../../../redux/action/actionetc'
import ProgressStepComponent from '../component/progresStrp'
import modal from 'react-native-modal'
import { request_order_list } from '../../../redux/action/actionReservation'


const index = ({navigation}) => {
    const dispatch = useDispatch()
    const steps = useSelector(state => state.etcReducer.steps)
    
    useEffect(() => {
        //console.log(steps);
    }, [steps])
    return (
        <>
        <View style={{flex:1, backgroundColor:'#ffffff'}}>
            <Header 
                page='w/arrow_bck' 
                label='Checkout' 
                goBack={()=>{
                    try {
                        dispatch(request_order_list())
                        dispatch(next_progres_steps(1))
                        navigation.navigate('Booking')
                    } catch (error) {
                        console.log(error);
                    }
                    
                }}
            />
            <ProgressStepComponent progres={steps} activeIcon={true}/>
        </View>
     
        </>
    )
}

export default index

const styles = StyleSheet.create({})
