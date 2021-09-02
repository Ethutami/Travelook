import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import RadioButtonRN from 'radio-buttons-react-native';
import moment from 'moment';

import PriceDetails from '../../../component/detailList/priceDetails'
import ButtonContinue from '../../../component/button/black'
import BookingDate from '../../../component/detailList/BookingDate'

const payment = () => {
    const {details} = useSelector(state => state. hotelReducer)
    const {guest, startDate, endDate} = useSelector(state => state.etcReducer)
    const [payment, setPayment] = useState()
    const [notifPayment, setNotifPayment] = useState()
    const data = [
        { label: 'Bank Transfer' },
        { label: 'Virtual Account' }
    ];
    const day = endDate.endDay === startDate.startDay ? 1 :  
                endDate.endDay < startDate.startDay ? 0 :
                endDate.endDay - startDate.startDay
    const caculate = guest * details?.price * day
    const serviceFee = details?.service?.serviceFee ? details?.service?.serviceFee : 0
    const total = caculate - serviceFee
    const start_date = moment(startDate.startDate).format('ddd, DD MMM YYYY')
    const end_date = moment(endDate.endDate).format('ddd, DD MMM YYYY')

    return (
        <>
        <ScrollView 
            showsVerticalScrollIndicator={false} 
            style={styles.container}>
            <View style={styles.paymentwrap}>
                <Text style={styles.payment}>Payment Method</Text>
                <Text style={{marginVertical:10, fontSize:14}}>Select on of this payment method</Text>
                {
                    notifPayment && payment === undefined &&
                    <Text style={{color:'red'}}>{notifPayment}</Text> 
                }
            </View>
            <RadioButtonRN
                data={data}
                box={false}
                selectedBtn={(e) => {setPayment(e)}}
                activeColor='#000000'
                deactiveColor='#000000'
            />
            <View style={styles.horizontalLine}></View>
            <BookingDate
                checkin={start_date}
                checkout={end_date}
                guest={guest}
                facility={`${details?.total_bedrooms} bedroom - ${details?.total_bathroom} bath`}
            />
            <PriceDetails
                guest={guest}
                price={details?.price}
                night={day}
                caculate={caculate}
                fee={serviceFee}
                total={total}
            />
            <Text style={{color:'#4A84FA', fontSize:16, marginHorizontal:10, marginTop:20}}>Pay with Bank Transfer</Text>
        </ScrollView>
        <View style={styles.buttonContinue}>
            <ButtonContinue 
                label='Pay >>' 
                num={ payment ? 3 : 2} 
                selectPayment={()=>{setNotifPayment('select payment method !!')}} />
        </View>
    </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor:'#ffffff',
    },
    paymentwrap:{
        paddingHorizontal:16, 
        marginTop:16, 
        marginBottom:16,
    },
    payment:{
        color:'#3E3E3E', 
        fontSize:16, 
        fontWeight:'bold',
    },
    horizontalLine: {
        marginTop:25,
        borderBottomWidth:1, 
        borderBottomColor:'#E1E1E1', 
    },
    buttonContinue: {
        padding:10, 
        backgroundColor:'#ffffff',
    },
})

export default payment