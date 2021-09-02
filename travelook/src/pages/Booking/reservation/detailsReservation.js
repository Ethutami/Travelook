import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import moment from 'moment';

import InputTxtComponent from '../../../component/TextinputWlabel'
import SpesialReq from '../component/spesialReq'
import ButtonContinue from '../../../component/button/black'
import BokingDate from '../../../component/detailList/BookingDate'


const detailsReservation = () => {
    const {details} = useSelector(state => state. hotelReducer)
    const {guest, startDate, endDate,} = useSelector(state => state.etcReducer)
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
        if (label === 'First Name') {setBooking({...booking, firstName:txt})} 
        else if (label === 'Last Name' ) {setBooking({...booking, lastName:txt})}
        else if (label === 'Email' ) {setBooking({...booking, email:txt})}
        else if (label === 'Phone'){setBooking({...booking, phone:txt})}
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

    useEffect(() => {
        setBooking({...booking, number: guest.toString(), start: indate, end:outdate  })
    }, [endDate, startDate, guest,])
    return (
        <>
        <ScrollView 
            showsVerticalScrollIndicator={false} 
            style={styles.container}>
            <View style={styles.guestDetailsWrap}>
                <Text style={styles.guestDetailsLabel}>Guest Details</Text>
                <Text style={styles.text}>Fill in guest details below</Text>
            </View>
            <View style={styles.textField}>
                <InputTxtComponent label='First Name' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                <InputTxtComponent label='Last Name' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                <InputTxtComponent label='Email' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                <InputTxtComponent label='Phone'  placeholder='Mobile Number'changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
            </View>
            <View style={styles.horizontalLine}></View>
            <SpesialReq/>
            <View style={styles.horizontalLine, {marginTop:32}}></View>
            <BokingDate
                checkin={start_date}
                checkout={end_date}
                guest={guest}
                facility={`${details.total_bedrooms} bedroom - ${details?.total_bathroom} bath`}
            />
        </ScrollView>
        <View style={styles.buttonContinue}>
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
    guestDetailsWrap: {
        marginTop:16, 
        paddingHorizontal:16, 
        marginBottom:16,
    },
    guestDetailsLabel:{
        fontSize:16, 
        fontWeight:'bold',
        color:'#3E3E3E', 
    },
    text: {
        marginVertical:10, 
        fontSize:14,
    },
    textField: {
        marginBottom:2,
        paddingHorizontal:16, 
    },
    horizontalLine: {
        borderBottomWidth:1,
        borderBottomColor:'#E1E1E1', 
    },
    buttonContinue: {
        marginBottom:20,
        paddingHorizontal:10, 
        backgroundColor:'#ffffff',
    },
})
