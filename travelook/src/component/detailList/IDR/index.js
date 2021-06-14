import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

const index = ({IDR, txtBtn, wNight, night}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const {requirement} = useSelector(state => state.etcReducer)
    //console.log(requirement);
    return (
        <View style={styles.container}>
            <View style={{marginStart:16, marginBottom:19, marginTop:19}}>
                <Text style={{fontSize:21, color:'#199946',}}>IDR {IDR}</Text>
                {wNight ? <Text style={{fontSize:14, color:'#898B8F'}}>{night}/night{night > 1 && `s`}</Text> : <Text style={{fontSize:14, color:'#898B8F'}}>/night</Text>}
            </View>
            <TouchableOpacity 
                style={styles.buttonBookNow}
                onPress={()=>{
                    if (txtBtn === 'Book Now' && requirement === null ) {
                        navigation.navigate('Home')
                    } if (txtBtn === 'Book Now' && requirement !== null){
                        navigation.navigate('Booking') 
                    } if (txtBtn === 'Continue Booking' ){
                        navigation.navigate('DetailsReservation')
                    }

                }}   
            >
                <Text style={{color:'#ffffff', fontSize:13}}>{txtBtn}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex:1, 
        flexDirection:'row', 
        justifyContent:'space-between',
        backgroundColor:'#ffffff',
        position:'absolute',
        bottom:0,
        width:wp(100),
        // alignItems:'center',
        // shadowColor: "black",
        // shadowOffset: { width: 0, height: -10 }, // change this for more shadow
        // shadowOpacity: 0.4,
        // shadowRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: -10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,


    },
    buttonBookNow:{
        width:144,
        height:55,
        marginVertical:16,
        marginEnd:16,
        backgroundColor:'#1E1E1E', 
        alignItems:'center', 
        justifyContent:'center',
    },
})
