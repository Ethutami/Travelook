import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import DetailReservation from '../reservation/detailsReservation'
import Payment from '../reservation/payment'
import Process from '../reservation/process'

const progresStrp = ({progres, activeIcon}) => {
    const ShowPage =()=>{
        if(progres === 1) {
            return(
                <DetailReservation/>
            )
        }else if (progres === 2) {
            return(
                <Payment/>
            )
        }else if (progres === 3) {
            return(
                <Process/>
            )
        }
    }

    
   
    return (
        <>
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={progres === 1 && activeIcon ? styles.activeIconSteps : styles.disableIconSteps}>
                    <Text style={styles.activeNumSteps}>1</Text>
                </View>
                <Text style={progres === 1 && activeIcon ? styles.activeLabelSteps : styles.disableLabelSteps}>Details</Text>
            </View>
            <View style={styles.disableLineSteps}></View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={progres === 2 && activeIcon ? styles.activeIconSteps : styles.disableIconSteps}>
                    <Text style={styles.activeNumSteps}>2</Text>
                </View>
                <Text style={progres === 2 && activeIcon ? styles.activeLabelSteps : styles.disableLabelSteps}>Payment</Text>
            </View>
            <View style={styles.disableLineSteps}></View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={progres === 3 && activeIcon ? styles.activeIconSteps : styles.disableIconSteps}>
                    <Text style={styles.activeNumSteps}>3</Text>
                </View>
                <Text style={progres === 3 && activeIcon ? styles.activeLabelSteps : styles.disableLabelSteps}>Pocess</Text>
            </View>
        </View>
        {ShowPage()}
        
        
        </>
    )
}

export default progresStrp

const styles = StyleSheet.create({
    container:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:'#F3F3F3', 
        padding:10,
        marginBottom:10,
    },
    activeIconSteps:{
        width:25, 
        height: 25, 
        borderRadius:25/2 , 
        backgroundColor:'#1E1E1E', 
        alignItems:'center',
        justifyContent:'center',
        marginRight:8,
    },
    disableIconSteps:{
        width:25, 
        height: 25, 
        borderRadius:25/2 , 
        backgroundColor:'#C2C3C6', 
        alignItems:'center',
        justifyContent:'center',
        marginRight:8,
    },
    activeNumSteps:{
        color:'#ffffff', 
        fontSize:10,
    },
    activeLabelSteps:{
        color:'#1E1E1E',
        fontSize:12,
    },
    disableLabelSteps:{
        color:'#C2C3C6',
        fontSize:12,
    },    
    disableLineSteps:{
        width:wp(10), 
        borderWidth:1, 
        borderColor:'#C2C3C6', 
        marginHorizontal:8,
    },

   
})
