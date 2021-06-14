import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../../component/header'
import TextInputComponent from '../../component/TextinputWlabel'
import PriceDetails from '../../component/detailList/priceDetails'
import BookingButton from '../../component/detailList/IDR'


const index = ({navigation}) => {
    const requirement = useSelector(state => state.etcReducer.requirement)
    const {details} = useSelector(state => state.hotelReducer)
    const caculate = requirement?.guest * details?.price * requirement.night
    const serviceFee = details?.service?.serviceFee ? details?.service?.serviceFee : 0
    const total = caculate - serviceFee
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{flex:1, backgroundColor:'#ffffff', marginBottom:25}}>
                <Header 
                    page='w/arrow_bck' 
                    label='Booking Preview' 
                    goBack={()=> navigation.goBack()}
                    
                />
                <View style={{marginHorizontal:18, marginTop:34,}}>
                    <TextInputComponent label2='Check-in' value={requirement?.startDate} />
                    <TextInputComponent label2='Check-out' value={requirement?.endDate}/>
                    <TextInputComponent label2='Guest' value={`${requirement?.guest}`}/>
                </View>
                <View style={{borderBottomColor:'#E1E1E1', borderBottomWidth:1,}}></View>
                <PriceDetails 
                    guest={requirement?.guest}
                    price={details?.price}
                    night={requirement?.night}
                    caculate={caculate}
                    fee={serviceFee}
                    total={total}
                />
                {/* <View style={{borderBottomColor:'#E1E1E1', borderBottomWidth:1, marginTop:25, marginBottom:10}}></View> */}
            </ScrollView>
            <BookingButton IDR={total} txtBtn='Continue Booking' wNight={true} night={requirement?.night}/>
        </>
    )
}

export default index

const styles = StyleSheet.create({})
