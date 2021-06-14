import moment from 'moment';
import React, {useState } from 'react'
import { Text, View, ScrollView,} from 'react-native'
import {Calendar} from 'react-native-calendars';
import ButtonSelectComponent from '../../button/black'

export const showModalCheckinCheckout =(props)=>{
    const [checkin, setCheckin] = useState({
        startDate :'',
        startDay:0,
    })
    const [checkout, setCheckout] = useState({
        endDate:'',
        endDay:0
    })
    const ShowCalender =()=>{
        return(
            <View style={{marginTop:20}}>
                <Calendar
                    markingType={'period'}
                    enableSwipeMonths={true}
                    hideExtraDays={true}
                    minDate={new Date()}
                    onDayPress={(day) => {
                        console.log('selected day', day, props.label)
                        if(props.label === 'Check-in'){
                            setCheckin({...checkin, startDate:day.dateString, startDay: day.day})
                        }if (props.label === 'Check-out'){
                            setCheckout({...checkout, endDate: day.dateString, endDay: day.day})
                        }
                    }}
                    markedDates={{
                        
                        [checkin.startDate]: {startingDay: true, color: '#3E3E3E', textColor: 'white'},
                        // '2021-05-02': {color: '#F3F3F3', textColor: '#3E3E3E', marked: true, dotColor: 'white'},
                        // '2021-05-03': {color: '#F3F3F3', textColor:'#3E3E3E'},
                        [checkout.endDate]: {endingDay: true, color: '#3E3E3E', textColor: 'white'},
                    }}
                    />
                
            </View>
        )
    }

    return(
        <View style={{padding:16}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{fontSize:18, marginBottom:15,}}>{props.label === 'Check-in' ? 'Check-In' : 'Check-Out'}</Text>
                {ShowCalender()}
                <ButtonSelectComponent 
                    label='Select Date' 
                    date={props.label === 'Check-in' ? checkin : checkout}
                    labelDate={props.label} 
                    closeModal={props.closeModal}
                />
            </ScrollView>
        </View>
    )

}
