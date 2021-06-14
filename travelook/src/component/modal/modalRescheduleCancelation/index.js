import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Modal from 'react-native-modal';

import IonIcon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

import Reschedule from './Reschedule'
import ButtonReschedule from '../../button/black'
import ButtonCancel from '../../button/white'
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import { request_order_list } from '../../../redux/action/actionReservation';

export const rescheduleCancelation = ({closeModal}) => {
    const dispatch = useDispatch()
    const {requirement, startDate, endDate,} = useSelector(state => state.etcReducer)
    const [isModal2, setIsModal2] = useState(false)
    const [label, setLabel] = useState()
    const [confirm, setConfirm] = useState(false)
    const [checkin, setCheckin] = useState({
        startDate :'' ,
        startDay:startDate?.startDay ? startDate.startDay : 0,
    })
    const [checkout, setCheckout] = useState({
        endDate:'',
        endDay: endDate?.endDay ? endDate.endDay : 0
    })
    const [data, setData] = useState(null)
    const start_date = moment(checkin.startDate).format('YYYY/MM/DD')
    const end_date = moment(checkout.endDate).format('YYYY/MM/DD')

    const confirmation = () =>{
        return(
            <View style={styles.modal_headlineConfirmRes}>
                    <Text style={{
                    fontSize:18, 
                    marginBottom:15, 
                    marginTop:20, 
                    fontWeight:'bold'
                    }}> 
                        {label === 'Reschedule' ? `Reschedule Trip ${requirement?.start} - ${requirement?.end}` :
                        label === 'Cancel' && 'Cancel trip?'}
                    </Text>
                    <Text>
                        {
                            label === 'Reschedule' 
                            ? `Your trip will be reschedule to ${requirement.start} - ${requirement.end}. Are you sure to reschedule?`
                            : label === 'Cancel' 
                            && `Are you sure want to cancel the ${requirement.start} - ${requirement.end} booking?`
                        }
                    </Text>
                    <View style={{marginTop:25}}>
                        <ButtonReschedule 
                            label={'Yes, ' + label}
                            data = {data} 
                            closeModal={()=>{
                                setIsModal2(false)
                                setConfirm(false)
                                dispatch(request_order_list())
                                closeModal()
                                }}/>
                        <ButtonCancel
                            label={label === 'Cancel' ? 'No' : 'Cancel'} 
                            closeModal={()=>{
                                setConfirm(false)
                                setIsModal2(false)
                                setData(null)
                            }}
                        />
                    </View>
                </View>
        )
    }
    const ShowCalender =(label)=>{
        return(
            <View style={{marginTop:20}}>
                <Calendar
                    markingType={'period'}
                    enableSwipeMonths={true}
                    hideExtraDays={true}
                    onDayPress={(day) => {
                        console.log('selected day', day, label)
                        if(label === 'Check-in'){
                            setCheckin({...checkin, startDate:day.dateString, startDay: day.day})
                        }if (label === 'Check-out'){
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

    return (
        <>
        <View >
            <View style={{flexDirection:'row', marginVertical:25}}>
                <IonIcon name='reload' size={20} color='#C2C3C6'/>
                <TouchableOpacity onPress={()=>{ 
                    setLabel('Reschedule')
                    setIsModal2(true)
                    }}>
                    <Text style={{fontSize:16, color:'#3E3E3E', marginLeft:15}}>Reschedule</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',}}>
                <AntDesign name='closecircleo' size={20} color='#C2C3C6'/>
                <TouchableOpacity onPress={()=>{ 
                    setLabel('Cancel')
                    setIsModal2(true)
                    }}>
                    <Text style={{fontSize:16, color:'#3E3E3E', marginLeft:15}}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
        <Modal isVisible={isModal2} style={styles.modal_add}>
            {
                label === 'Reschedule' ?
                <>
                    {confirm ? confirmation()
                        :<View style={styles.modal_headline}>
                            <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:16}}>
                                <Text style={{fontSize:18, marginBottom:15, marginTop:20}}>{`Reschedule Trip (${requirement.start} - ${requirement.end})`}</Text>
                                <Text>Choose the date for new trip. Make sure the new date is correct.</Text>
                                {ShowCalender('Check-in')}
                                {ShowCalender('Check-out')}
                                <ButtonReschedule 
                                    label='Select Date' 
                                    reschedule='reschedule'
                                    pressed={()=>{
                                        setConfirm(true)
                                        //alert('helo')
                                        setData({
                                            idRoom: requirement.idRoom,
                                            id_reservation : requirement.idReservation,
                                            start : start_date,
                                            end : end_date,
                                
                                         })
                                    }}/>
                                    <ButtonCancel
                                        label={label === 'Cancel' ? 'No' : 'Cancel'} 
                                        closeModal={()=>{
                                            setConfirm(false)
                                            setIsModal2(false)
                                        }}
                                    />
                            </ScrollView>
                        </View>
                    }
                </>
                : label === 'Cancel' && confirmation()
                
            }
        </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    modal_add: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      modal_headline: {
        width: '100%',
        height:'96%',
        backgroundColor: '#ffffff',
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        
      },
      modal_headlineConfirmRes: {
        width: '100%',
        height:'45%',
        backgroundColor: '#FFFFFF',
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        padding:15,
      },
     
})