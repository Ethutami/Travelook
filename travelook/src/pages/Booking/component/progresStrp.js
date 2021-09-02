import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import DetailReservation from '../reservation/detailsReservation'
import Payment from '../reservation/payment'
import Process from '../reservation/process'

const progresStrp = ({progres, activeIcon}) => {
    const ShowPage =()=>{
        if(progres === 1) {<DetailReservation/>}
        else if (progres === 2) { <Payment/>}
        else if (progres === 3) {<Process/>}
    }

    return (
        <>
        <View style={styles.container}>
            <View style={styles.wrapped}>
                <View style={progres === 1 && activeIcon ? styles.activeIconSteps : styles.disableIconSteps}>
                    <Text style={styles.activeNumSteps}>1</Text>
                </View>
                <Text style={progres === 1 && activeIcon ? styles.activeLabelSteps : styles.disableLabelSteps}>Details</Text>
            </View>
            <View style={styles.disableLineSteps}></View>
            <View style={styles.wrapped}>
                <View style={progres === 2 && activeIcon ? styles.activeIconSteps : styles.disableIconSteps}>
                    <Text style={styles.activeNumSteps}>2</Text>
                </View>
                <Text style={progres === 2 && activeIcon ? styles.activeLabelSteps : styles.disableLabelSteps}>Payment</Text>
            </View>
            <View style={styles.disableLineSteps}></View>
            <View style={styles.wrapped}>
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
        marginBottom:10,
        padding:10,
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center', 
        backgroundColor:'#F3F3F3', 
    },
    wrapped: {
        flexDirection:'row', 
        alignItems:'center',
    },
    activeIconSteps:{
        marginRight:8,
        width:25, 
        height: 25, 
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25/2 , 
        backgroundColor:'#1E1E1E', 
    },
    disableIconSteps:{
        marginRight:8,
        width:25, 
        height: 25, 
        alignItems:'center',
        justifyContent:'center',
        borderRadius:25/2 , 
        backgroundColor:'#C2C3C6', 
    },
    activeNumSteps:{
        fontSize:10,
        color:'#ffffff', 
    },
    activeLabelSteps:{
        fontSize:12,
        color:'#1E1E1E',
    },
    disableLabelSteps:{
        fontSize:12,
        color:'#C2C3C6',
    },    
    disableLineSteps:{
        marginHorizontal:8,
        width:wp(10), 
        borderWidth:1, 
        borderColor:'#C2C3C6', 
    },
    
   
})
