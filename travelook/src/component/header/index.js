import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import ArrowBck_icon from 'react-native-vector-icons/MaterialIcons'
import History_icon from 'react-native-vector-icons/MaterialIcons'
import Save_icon from 'react-native-vector-icons/AntDesign';
import Dot_icon from 'react-native-vector-icons/Entypo'
import ModalComponent from '../modal'
import { useDispatch, useSelector } from 'react-redux';
import { request_order_list } from '../../redux/action/actionReservation';


const index = ({label, page, date, goBack}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const {requirement} = useSelector(state => state.etcReducer)
    const [isVisible, setIsVisible] = useState()
    
    if (page === 'single_label'){
        return (
            <>
                <View 
                    style={styles.wrappedTAB}>
                    <Text style={styles.label}>{label}</Text>
                    
                </View>
                <View style={styles.line}></View>
            </>
        )
    }else if(page === 'w/arrow_bck'){
        return (
            <>
                <View 
                    style={styles.wrappedUSER}>
                        <View  style={{width:'10%'}}>
                            <ArrowBck_icon 
                                name="keyboard-arrow-left" 
                                size={30} 
                                onPress={()=>{goBack()}}/>
                        </View>
                        <View style={{alignItems:'center', marginLeft:15, width:'70%'}}>
                            <Text style={styles.label}>{label}</Text>
                        </View>
                        {label === 'Orders' && 
                            <View style={{ width:'15%'}} >
                                <TouchableOpacity 
                                    onPress={()=> {
                                        dispatch(request_order_list())
                                        navigation.navigate('OrderHistory')
                                    }}
                                >
                                    <History_icon 
                                        name='history' 
                                        size={20}  
                                        style={{alignSelf:'flex-end'}}/>
                                </TouchableOpacity>
                            </View>
                        }
                </View>
                <View style={{ width:'100%', borderBottomWidth:1, borderBottomColor:'#E1E1E1',}}></View>
            </>
        )
    }else if(page === 'w/arrow_bck/Dot'){
        return (
            <>
                <View 
                    style={styles.wrappedUSER}>
                        <View  style={{width:'10%'}}>
                            <ArrowBck_icon 
                                name="keyboard-arrow-left" 
                                size={30} 
                                onPress={()=>{navigation.goBack()}}/>
                        </View>
                        <View style={{alignItems:'center', marginLeft:10, width:'70%'}}>
                            <Text style={styles.label}>{label}</Text>
                        </View>
                        {requirement.passDate === false &&
                        <View style={{ width:'15%'}} >
                            <TouchableOpacity 
                                onPress={()=> 
                                    setIsVisible(true)
                                }
                            >
                                <Dot_icon 
                                    name='dots-three-vertical' 
                                    size={20}  
                                    style={{alignSelf:'flex-end'}}/>
                            </TouchableOpacity>
                        </View>
                        }
                        
                        
                </View>
                <View style={{ width:'100%', borderBottomWidth:1, borderBottomColor:'#E1E1E1',}}></View>
                <ModalComponent 
                    isModal={isVisible} 
                    closeModal={()=>setIsVisible(false)} 
                    modal='rescheduleCancelation'
                />
            </>
        )
    }else if(page === 'FILTER&SORT'){
        return (
            <>
                <View style={styles.wrappedUSER}>
                    <View style={{width:'10%'}}>
                        <ArrowBck_icon 
                            name="keyboard-arrow-left" 
                            size={25} 
                            onPress={()=>goBack()}/>
                    </View>
                    <View style={{alignItems:'center', marginLeft:10, width:'80%'}}>
                        <Text style={styles.label}>{label}</Text>
                        <Text style={{fontSize:11}}>{date}</Text>
                    </View>
                </View>
                <View style={{ width:'100%', borderBottomWidth:1, borderBottomColor:'#E1E1E1', }}></View>
            </>
        )
    }
  
}

export default index

const styles = StyleSheet.create({
    wrappedTAB:{
        height:hp(10), 
        flexDirection:'column',
        alignItems:'center', 
        justifyContent:'center',
    },
    wrappedUSER:{
        height:hp(10), 
        flexDirection:'row',
        alignItems:'center', 
        paddingHorizontal:10,
    },
    label:{
        fontSize:16, 
        color:'#363636', 
        fontWeight:'bold',
    },
    line:{ 
        width:'100%', 
        borderBottomWidth:1, 
        borderBottomColor:'#E1E1E1',
    }
})
