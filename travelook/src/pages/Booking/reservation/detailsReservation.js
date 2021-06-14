import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

import { useSelector, useDispatch } from 'react-redux';

import InputTxtComponent from '../../../component/TextinputWlabel'
import SpesialReq from '../component/spesialReq'
import ButtonContinue from '../../../component/button/black'
import BokingDate from '../../../component/detailList/BookingDate'
import moment from 'moment';


const detailsReservation = () => {
    const {details} = useSelector(state => state. hotelReducer)
    const {guest, startDate, endDate,} = useSelector(state => state.etcReducer)
    //console.log(details, startDate, endDate, guest);
    const [booking, setBooking] = useState({
        firstName :'',
        lastName:'',
        email:'',
        phone:'',
        number:1,
        start:'',
        end:''
    })
    
    const changeTxt = (txt, label)=>{
        if (label === 'First Name') {
            //console.log('ini',booking);
            setBooking({...booking, firstName:txt})
        } else if (label === 'Last Name' ) {
            setBooking({...booking, lastName:txt})
        }else if (label === 'Email' ) {
            setBooking({...booking, email:txt})
        }else if (label === 'Phone'){
            setBooking({...booking, phone:txt})
        }
    }
    const start_date = moment(startDate.startDate).format('ddd, DD MMM YYYY')
    const end_date = moment(endDate.endDate).format('ddd, DD MMM YYYY')

    let indate =''
    let outdate=''
    for (const key in startDate.startDate) {
        startDate.startDate[key] === '-' ?
        indate += startDate.startDate[key].replace('-', '/') :
        indate += startDate.startDate[key]
    }
    for (const key in endDate.endDate) {
        endDate.endDate[key] === '-' ?
        outdate += endDate.endDate[key].replace('-', '/') :
        outdate += endDate.endDate[key]
    }
    // console.log(typeof guest.toString(), guest.toString());
    useEffect(() => {
        setBooking({...booking, number: guest.toString(), start: indate, end:outdate  })
    }, [endDate, startDate, guest,])
    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={{paddingHorizontal:16, marginTop:16, marginBottom:16}}>
                <Text style={styles.guestDetails}>Guest Details</Text>
                <Text style={{marginVertical:10, fontSize:14}}>Fill in guest details below</Text>
            </View>
            <View style={{paddingHorizontal:16, marginBottom:2}}>
                <InputTxtComponent label='First Name' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                <InputTxtComponent label='Last Name' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                <InputTxtComponent label='Email' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                <InputTxtComponent label='Phone'  placeholder='Mobile Number'changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
            </View>
            <View style={{borderBottomColor:'#E1E1E1', borderBottomWidth:1,}}></View>
            <SpesialReq/>
            <View style={{borderBottomColor:'#E1E1E1', borderBottomWidth:1, marginTop:32}}></View>
            <BokingDate
                checkin={start_date}
                checkout={end_date}
                guest={guest}
                facility={`${details.total_bedrooms} bedroom - ${details?.total_bathroom} bath`}
            />
        </ScrollView>
        <View style={{paddingHorizontal:10, backgroundColor:'#ffffff', marginBottom:20}}>
            <ButtonContinue 
                label='Continue to payment >>' 
                reservasion={booking}
                idRoom={details?.id}
            />
        </View>
        </>
    )
}

export default detailsReservation

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#ffffff', 
    },
    guestDetails:{
        color:'#3E3E3E', 
        fontSize:16, 
        fontWeight:'bold',
    },
})
