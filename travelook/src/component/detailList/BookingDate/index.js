import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Smile_icon from 'react-native-vector-icons/Feather'
import Calendar_icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather_icon from 'react-native-vector-icons/Feather'
import File_icon from 'react-native-vector-icons/AntDesign'

export default function index(props) {
    return (
        <View style={{flex:1,marginBottom:16}}>
            {/* <Text style={styles.name}>{props.name}</Text> */}
            <View style={styles.checkinchecout}>
                <View style={styles.labelwrap}>
                    <Calendar_icon 
                        name='calendar-arrow-right' 
                        size={16} color='#898B8F'/>
                    <Text style={styles.label}>Check-in</Text>
                    <Text style={{fontSize:16, width:'50%' }}>{props.checkin}, from 12:00</Text>
                </View>
                <View style={styles.labelwrap2}>
                    <Calendar_icon 
                        name='calendar-arrow-left' 
                        size={16} color='#898B8F'/>
                    <Text style={styles.label}>Check-out</Text>
                    <Text style={{fontSize:16, width:'50%' }}>{props.checkout}, before 12:00</Text>
                </View>
            </View> 
            <View style={{flexDirection:'row', alignItems:'center', marginStart:21, marginBottom:24}}>
                <Smile_icon name="smile" size={16} color='#898B8F'/>
                <Text style={styles.label}>Guest(s)</Text>
                <Text style={{fontSize:16,}}>{props.guest} person(s)</Text>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',marginStart:21,marginBottom:24 }}>
                <Feather_icon name="home" size={16} color='#898B8F'/>
                <Text style={styles.label}>Facility</Text>
                <Text style={{fontSize:16,  width:'45%',}}>{props.facility}</Text>
            </View>
            <View style={{borderBottomColor:'#E1E1E1', borderBottomWidth:1,}}></View>
            <View style={{marginTop:15, marginLeft:21}}>
                <View style={{flexDirection:'row', marginBottom:8}}>
                    <File_icon name="filetext1" size={20} color='#2BB16A'/>
                    <Text style={styles.options}>Free cancelation</Text>
                </View>
                <View style={{flexDirection:'row', marginTop:15}}>
                    <Feather_icon name="calendar" size={20} color='#2BB16A'/>
                    <Text style={styles.options}>Reschedule anytime</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    name:{
        color:'#3E3E3E', 
        fontWeight:'bold', 
        fontSize:16, 
        marginBottom:15,
        marginTop:30,
        marginStart:21,
        backgroundColor:'tomato'
    },
    checkinchecout:{
        backgroundColor:'#F3F3F3', 
        paddingVertical:24, 
        paddingHorizontal:23, 
        marginBottom:16,
    },
    labelwrap:{
        flexDirection:'row',
        marginBottom:10,
        alignItems:'center', 
        marginBottom:24,
    },
    labelwrap2:{
        flexDirection:'row',
        marginBottom:10,
        alignItems:'center', 
    },
    label:{
        fontSize:16, 
        marginRight:34, 
        marginLeft:11,
        width:80,
    },
    options:{
        fontSize:15,
        color:'#2BB16A', 
        marginLeft:15,
    },
})
