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
        <View style={{flex:1}}>
            <Text style={styles.name}>{props.name}</Text> 
            <View style={styles.checkinchecout}>
                <View style={styles.labelwrap}>
                    <Calendar_icon 
                        name='calendar-arrow-right' 
                        size={16} color='#898B8F'/>
                    <Text style={styles.label}>Check-in</Text>
                    <Text style={{fontSize:16,}}>{props.checkin}</Text>
                </View>
                <View style={styles.labelwrap}>
                    <Calendar_icon 
                        name='calendar-arrow-left' 
                        size={16} color='#898B8F'/>
                    <Text style={styles.label}>Check-out</Text>
                    <Text style={{fontSize:16,}}>{props.checkout}</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Smile_icon name="smile" size={16} color='#898B8F'/>
                    <Text style={styles.label}>Guest(s)</Text>
                    <Text style={{fontSize:16,}}>{props.guest} person(s)</Text>
                </View>
            </View> 
            <View style={{borderBottomColor:'#E1E1E1', borderBottomWidth:1,}}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    name:{
        color:'#3E3E3E', 
        fontWeight:'bold', 
        fontSize:16, 
        marginBottom:17,
        marginTop:10,
        marginStart:21,
    },
    checkinchecout:{
        width:'100%', 
        paddingHorizontal:23, 
        marginBottom:34,
    },
    labelwrap:{
        flexDirection:'row',
        marginBottom:10,
        alignItems:'center', 
        marginBottom:24,
    },
    label:{
        fontSize:16, 
        marginRight:34, 
        marginLeft:11,
        width:'49%',
    },
    options:{
        fontSize:15,
        color:'#2BB16A', 
        marginLeft:15,
    },
})
