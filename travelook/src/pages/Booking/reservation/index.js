import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { next_progres_steps } from '../../../redux/action/actionetc'
import { request_order_list } from '../../../redux/action/actionReservation'

import Header from '../../../component/header'
import ProgressStepComponent from '../component/progresStrp'

const index = ({navigation}) => {
    const dispatch = useDispatch()
    const steps = useSelector(state => state.etcReducer.steps)
    useEffect(() => {}, [steps])

    return (
        <View style={styles.container}>
            <Header 
                page='w/arrow_bck' 
                label='Checkout' 
                goBack={()=>{
                    try {
                        dispatch(request_order_list())
                        dispatch(next_progres_steps(1))
                        navigation.navigate('Booking')
                    } catch (error) {} 
                }}/>
            <ProgressStepComponent progres={steps} activeIcon={true}/>
        </View> 
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor:'#ffffff',
    },
})
