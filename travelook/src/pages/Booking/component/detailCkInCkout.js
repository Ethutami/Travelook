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
        <View style={{flex:1, marginTop:10}}>
            <View style={{margin:10}}>
            <Text style={styles.name}>{name}</Text>
            <View style={{width:wp(100), backgroundColor:'#F3F3F3'}}>
                <View style={{flexDirection:'row',marginBottom:10,alignItems:'center'}}>
                    <Calendar_icon name='calendar-arrow-right' size={20} color='#898B8F'/>
                    <Text style={{fontSize:15, marginHorizontal:10, width:'35%'}}>Check-in</Text>
                    <Text style={{fontSize:15,  width:'45%',}}>{checkin}, from 12:00</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Calendar_icon name='calendar-arrow-left' size={20} color='#898B8F'/>
                    <Text style={{fontSize:15, marginHorizontal:10, width:'35%'}}>Check-out</Text>
                    <Text style={{fontSize:15,  width:'45%',}}>{checkout}, before 12:00</Text>
                </View>
            </View>
            <View style={{marginVertical:20}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Smile_icon name="smile" size={20} color='#898B8F'/>
                    <Text style={{fontSize:15, marginHorizontal:10, width:'35%'}}>Guest(s)</Text>
                    <Text style={{fontSize:15,  width:'45%',}}>{guest} person(s)</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Feather_icon name="home" size={20} color='#898B8F'/>
                    <Text style={{fontSize:15, marginHorizontal:10, width:'35%'}}>Facility</Text>
                    <Text style={{fontSize:15,  width:'45%',}}>{facility}</Text>
                </View>
            </View>
            </View>
            <View style={{borderBottomColor:'#E1E1E1', borderBottomWidth:1, marginVertical:10}}></View>
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
    name:
    {
        color:'#3E3E3E', 
        fontWeight:'bold', 
        fontSize:18, 
        marginBottom:15
    },
})
