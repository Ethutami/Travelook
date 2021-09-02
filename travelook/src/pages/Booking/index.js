import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

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
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <Header 
                    page='w/arrow_bck' 
                    label='Booking Preview' 
                    goBack={()=> navigation.goBack()}
                    />
                <View style={styles.textField}>
                    <TextInputComponent label2='Check-in' value={requirement?.startDate} />
                    <TextInputComponent label2='Check-out' value={requirement?.endDate}/>
                    <TextInputComponent label2='Guest' value={`${requirement?.guest}`}/>
                </View>
                <View style={styles.horizontalLine}></View>
                <PriceDetails 
                    guest={requirement?.guest}
                    price={details?.price}
                    night={requirement?.night}
                    caculate={caculate}
                    fee={serviceFee}
                    total={total}
                />
            </ScrollView>
            <BookingButton IDR={total} txtBtn='Continue Booking' wNight={true} night={requirement?.night}/>
        </>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex:1, 
        marginBottom:25,
        backgroundColor:'#ffffff', 
    },
    textField: {
        marginTop:34,
        marginHorizontal:18, 
    },
    horizontalLine: {
        borderBottomWidth:1,
        borderBottomColor:'#E1E1E1', 
    },
})
