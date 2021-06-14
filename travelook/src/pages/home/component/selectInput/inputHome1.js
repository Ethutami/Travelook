import React, { useEffect, useState } from 'react'
import {StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Location_icon from 'react-native-vector-icons/SimpleLineIcons'
import Calendar_icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Smile_icon from 'react-native-vector-icons/Feather'
import ModalComponent from '../../../../component/modal/';


const inputHome1 = (props) => {

    const [isVisible, setIsVisible] = useState()
    
    const showIcon = ()=>{
        if (props.label === 'Destination'){
            return(
                <Location_icon name='location-pin' size={16} color='#FF704D'/>
            )
        }else if (props.label === 'Check-in'){
            return(
                <Calendar_icon name='calendar-arrow-right' size={16} color='#FF704D'/>
            )
        }else if (props.label === 'Check-out'){
            return(
                <Calendar_icon name="calendar-arrow-left" size={16} color='#FF704D'/>
            )
        }else{
            return(
                <Smile_icon name="smile" size={15} color='#FF704D'/>
            )
        }
    }
  

    return (
        <View style={props.label === 'Guest' ? styles.input2 : styles.input}>
            <Text style={{color:'#898B8F', fontSize:11}}>{props.label}</Text>
            <View style={{flexDirection:'row', marginTop:3, alignItems:'center',}}>
                {showIcon()}
                <TouchableOpacity onPress={()=> setIsVisible(true) }>
                    <Text style={{marginHorizontal:10, fontSize:16}}>{props.value}</Text>
                </TouchableOpacity>
            </View>
            <ModalComponent 
                isModal={isVisible} 
                closeModal={()=>setIsVisible(false)} 
                label={props.label} 
                page='HOME' 
                modal={props.label === 'Guest' ? 'modal2' :
                        props.label === 'Check-in' || props.label === 'Check-out' ? 'Check-in Check-out':
                        'modal1'}
            />
        </View>
    )
}

export default inputHome1

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1, 
        borderBottomColor:'#E1E1E1', 
        height:'20%',
        padding:24, 
    },
    input2:{
        height:'20%',
        padding:20, 
       
    }
})
