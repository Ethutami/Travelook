import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Smile_icon from 'react-native-vector-icons/Feather'
import Calendar_icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather_icon from 'react-native-vector-icons/Feather'
import File_icon from 'react-native-vector-icons/AntDesign'
import ModalComponent from '../../../component/modal'


const detailCkInCkout = ({name, checkin, checkout, guest, facility}) => {
    const [isVisible, setIsVisible] = useState()
    const [label, setLabel] = useState()
    return (
        <View style={styles.container}>
            <View style={{margin:10}}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.checkDateWrap}>
                <View style={styles.checkinDateWrap}>
                    <Calendar_icon name='calendar-arrow-right' size={20} color='#898B8F'/>
                    <Text style={styles.checkinText}>Check-in</Text>
                    <Text style={styles.checkin}>{checkin}, from 12:00</Text>
                </View>
                <View style={styles.checkoutDateWrap}>
                    <Calendar_icon name='calendar-arrow-left' size={20} color='#898B8F'/>
                    <Text style={styles.checkoutText}>Check-out</Text>
                    <Text style={styles.checkout}>{checkout}, before 12:00</Text>
                </View>
            </View>
            <View style={{marginVertical:20}}>
                <View style={styles.guestWrap}>
                    <Smile_icon name="smile" size={20} color='#898B8F'/>
                    <Text style={styles.guestText}>Guest(s)</Text>
                    <Text style={styles.guest}>{guest} person(s)</Text>
                </View>
                <View style={styles.facilityWrap}>
                    <Feather_icon name="home" size={20} color='#898B8F'/>
                    <Text style={styles.facilityText}>Facility</Text>
                    <Text style={styles.facility}>{facility}</Text>
                </View>
            </View>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={{marginTop:15, marginHorizontal:10}}>
                <View style={{flexDirection:'row'}}>
                    <File_icon name="filetext1" size={20} color='#2BB16A'/>
                    <TouchableOpacity
                        onPress={()=>{
                            setLabel('Cancel')
                            setIsVisible(true)
                    }}
                    >
                        <Text style={{fontSize:15,color:'#2BB16A', marginLeft:15}}>Free cancelation</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', marginTop:15}}>
                    <Feather_icon name="calendar" size={20} color='#2BB16A'/>
                    <TouchableOpacity
                        onPress={()=>{
                            setLabel('Reschedule')
                            setIsVisible(true)
                    }}
                    >
                        <Text style={{fontSize:15,color:'#2BB16A', marginLeft:15}}>Reschedule anytime</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ModalComponent 
                isModal={isVisible} 
                closeModal={()=>setIsVisible(false)} 
                modal={label === 'Cancel' && 'Comfirm Reschedule'}
                label ={label}
                data= {{checkin, checkout}}
            />
        </View>
    )
}

export default detailCkInCkout

const styles = StyleSheet.create({
    container: {
        flex:1, 
        marginTop:10,
    },
    name: {
        marginBottom:15,
        fontWeight:'bold', 
        fontSize:18, 
        color:'#3E3E3E', 
    },
    checkDateWrap: {
        width:wp(100), 
        backgroundColor:'#F3F3F3',
    },
    checkinDateWrap: {
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
    },
    checkinLabel: {
        marginHorizontal:10, 
        width:'35%',
        fontSize:15, 
    },
    checkin: {
        width:'45%',
        fontSize:15,  
    },
    checkoutDateWrap: {
        flexDirection:'row', 
        alignItems:'center',
    },
    checkoutLabel: {
        marginHorizontal:10, 
        width:'35%',
        fontSize:15, 
    },
    checkout: {
        width:'45%',
        fontSize:15,  
    },
    guestWrap: {
        flexDirection:'row', 
        alignItems:'center',
    },
    guestText: {
        marginHorizontal:10, 
        width:'35%',
        fontSize:15, 
    },
    guest: {
        width:'45%',
        fontSize:15,  
    },
    facilityWrap: {
        flexDirection:'row', 
        alignItems:'center',
    },
    facilityText: {
        marginHorizontal:10, 
        width:'35%',
        fontSize:15, 
    },
    facility: {
        width:'45%',
        fontSize:15, 
    },
    horizontalLine: {
        marginVertical:10,
        borderBottomWidth:1, 
        borderBottomColor:'#E1E1E1', 
    },
})
