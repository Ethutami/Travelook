import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {Calendar} from 'react-native-calendars';
import { useSelector } from 'react-redux';
import ButtonSelectComponent from '../../button/black'

const reschedule = ({closeModal, data}) => {
    const {requirement} = useSelector(state => state.etcReducer)
    // const {startDate, endDate,} = useSelector(state => state.etcReducer)
    // const [checkin, setCheckin] = useState({
    //     startDate :'' ,
    //     startDay:startDate?.startDay ? startDate.startDay : 0,
    // })
    // const [checkout, setCheckout] = useState({
    //     endDate:'',
    //     endDay: endDate?.endDay ? endDate.endDay : 0
    // })
    // const ShowCalender =(label)=>{
    //     return(
    //         <View style={{marginTop:20}}>
    //             <Calendar
    //                 markingType={'period'}
    //                 enableSwipeMonths={true}
    //                 hideExtraDays={true}
    //                 onDayPress={(day) => {
    //                     console.log('selected day', day, label)
    //                     if(label === 'Check-in'){
    //                         setCheckin({...checkin, startDate:day.dateString, startDay: day.day})
    //                     }if (label === 'Check-out'){
    //                         setCheckout({...checkout, endDate: day.dateString, endDay: day.day})
    //                     }
    //                 }}
    //                 markedDates={{
    //                     [checkin.startDate]: {startingDay: true, color: '#3E3E3E', textColor: 'white'},
    //                     // '2021-05-02': {color: '#F3F3F3', textColor: '#3E3E3E', marked: true, dotColor: 'white'},
    //                     // '2021-05-03': {color: '#F3F3F3', textColor:'#3E3E3E'},
    //                     [checkout.endDate]: {endingDay: true, color: '#3E3E3E', textColor: 'white'},
    //                 }}
    //                 />
                
    //         </View>
    //     )
    // }

    return(
        <View style={{padding:16}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{fontSize:18, marginBottom:15,}}>{`Reschedule Trip (${requirement.checkin} - ${requirement.checkout})`}</Text>
                <Text>Choose the date for new trip. Make sure the new date is correct.</Text>
                {/* {ShowCalender('Check-in')}
                {ShowCalender('Check-out')} */}
                <ButtonSelectComponent 
                    label='Select Data' 
                    // date={checkin.startDay <= checkout.endDay ? {checkin, checkout} : undefined}
                    closeModal={closeModal}
                />
            </ScrollView>
        </View>
    )
}

export default reschedule

const styles = StyleSheet.create({})
