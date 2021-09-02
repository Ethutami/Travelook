import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from '../modal'

import { request_data_login, request_data_register } from '../../redux/action/actionUser';
import { destination, end_date, guest, next_progres_steps, start_date } from '../../redux/action/actionetc';
import { filtering_Hotel } from '../../redux/action/actionhotel';
import { request_cancelation, request_order_list, request_preview_order, request_Reschedule, request_reservation } from '../../redux/action/actionReservation';

export default function ButtonComponent(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const {reservation, payment} = useSelector(state => state.reservation)
    const {requirement} = useSelector(state => state.etcReducer)
    const [onModal, setOnModal] = useState()
    return (
        <>
            <TouchableOpacity
                style={styles.button = {
                    ...styles.button, 
                    backgroundColor : props.backgroundColor,
                    borderColor : props.borderColor,
                    borderWidth : props.borderColor ? 1 : 0
                }}
                onPress={()=>{
                    try {
                        if (props.label === 'Sign Up Free' || props.label === 'Sign Up' || props.label === 'Login'  ){
                            navigation.navigate(props.toNavigate)
                        }
                        // else if(props.label === 'Continue to payment >>'){
                        //     dispatch(request_reservation(props.reservasion, props.idRoom))
                        // }else if(props.label === 'Pay >>'){
                        //     if (props.num === 2) {
                        //         props.selectPayment() 
                        //     }else{
                        //         dispatch(request_preview_order(reservation?.order_id))
                        //         dispatch(next_progres_steps(props.num))
                        //     }
                        // }else if(props.label === 'Confirm Payment'){
                        //     if (payment?.message === 'Success') {
                        //         try {
                        //             dispatch(next_progres_steps(1))
                        //             dispatch(request_order_list())
                        //             navigation.navigate('TabMain', {screen : 'Orders'})
                        //         } catch (error) {
                        //             console.log('something error when you try to navigate', error);
                        //         }
                        //     }
                            
                        // }else if(props.label === 'Select Date'){
                        //     if (props.labelDate){
                        //         if (props.labelDate === 'Check-in') {
                        //             dispatch(start_date(props.date))
                        //         } else {
                        //             dispatch(end_date(props.date))
                        //         }
                        //         props.closeModal()
                        //     }else if (props.reschedule === 'reschedule'){
                        //         props.pressed()
                        //     }
                        // }else if(props.label === 'Select Guest'){
                        //     dispatch(guest(props.guest))
                        //     props.closeModal()
                        // }else if(props.label === 'Apply Filter'){
                        //     dispatch(filtering_Hotel(props.rating))
                        //     props.closeModal()
                        // }else if(props.label === 'Yes, Cancel'){
                        //     try {
                        //         dispatch(request_cancelation(requirement.idRoom, requirement.idReservation))
                        //         dispatch(request_order_list())
                        //         props.closeModal()
                        //         navigation.navigate('Orders')
                        //     } catch (error) {
                        //         console.log('error request cancelation', error);
                        //     }
                            
                        // }else if(props.label === 'Yes, Reschedule'){
                        //     try {
                        //         if (props.data !== null) {
                        //             dispatch(request_Reschedule(props.data))
                        //             dispatch(request_order_list())
                        //             props.closeModal()
                        //             navigation.navigate('Orders')
                        //         }
                        //     } catch (error) {
                        //         console.log('error request reschedule', error);
                        //     }
                        // }else if(props.label === 'Save'){
                        //     props.updateProfile()
                        // }else if(props.label === 'Upload Receipt'){
                        //     props.OpenModal()
                        // }else if(props.label === 'Submit'){
                        //     props.submit()
                        // }else if(props.label === 'Delete'){
                        // }else if(props.label === 'Edit'){}
                    } catch (error) {
                        console.log(`invalid button ${props.label}`); 
                    }
                   }}
                >
                <Text 
                    style={styles.buttonLabel = {
                        ...styles.buttonLabel,
                        color : props.color
                    }}>
                {props.label}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    button:{
        marginTop:30, 
        padding:15, 
        width:'100%', 
        height:55, 
        justifyContent:'center', 
        alignItems:'center',
        
    },
    buttonLabel: {
        fontSize:14, 
        fontWeight:'500',
    }
})
