import React, {useCallback, useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View,} from 'react-native'
import CurrencyInput from 'react-native-currency-input';
import { useSelector } from 'react-redux'

import CheckBox from '../../checkBox'
import CheckRate from '../../rate/index'
import ButtonFilter from '../../button/black'

export const ShowFilter =(label, isModal, closeModal)=>{
    const stateHotel = useSelector(state => state.hotelReducer.stateHotel)
    const [minBudget, setMinBudget] = useState(0)
    const [maxBudget, setMaxBudget] = useState(0); // can also be null
    const [rating, setRating] = useState()
    const [state, setState] = useState()
    const [dateFilter, setDateFilter] = useState({
        rating :'',
        price:0,
        state:'',
    })
    useEffect(() => {
        if(!isModal){
            setMinBudget(0)
            setMaxBudget(0)
        }
    }, [minBudget, maxBudget, isModal]) 
    useEffect(() => {
        setDateFilter({
            ...dateFilter, 
            rating: rating, 
            state: state, 
            price: maxBudget,
        })
    }, [rating, state, maxBudget])  
  //console.log(dateFilter); 

    return(
        <>
        <ScrollView style={{flex:1,}} >
            <View style={{marginVertical:'10%', padding:15}}>
                <Text style={styles.label}>{label}</Text>
                <View style={{flexDirection:'column'}}>
                    <Text style={{color:'#898B8F', marginVertical:10}}>price</Text>
                    <View style={styles.selectIDRWrapped}>
                        <CurrencyInput
                            style={styles.IDR}
                            value={minBudget}
                            onChangeValue={(e)=>{typeof e === 'object' ? setMinBudget(0) :  setMinBudget(e)}}
                            minValue={0}
                            maxValue={10000000}
                            prefix= 'RP '
                            delimiter="."
                        />
                        <Text>-</Text>
                        <CurrencyInput
                            style={styles.IDR}
                            value={maxBudget}
                            onChangeValue={(e)=>{typeof e === 'object' ? setMaxBudget(0) :  setMaxBudget(e)}}
                            minValue={0}
                            maxValue={10000000}
                            prefix= 'RP '
                            delimiter="."
                        />
                    </View>                  
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={{marginVertical:10, padding:10,}}>
                <Text style={{color:'#898B8F',marginLeft:9}}>Location</Text>
                {stateHotel.map((item,key)=>{
                    return(
                        <View key={key}>
                            <CheckBox label={item} />
                        </View>
                    )
                })}
            </View>
            <View style={styles.line}></View>
            <View style={{padding:10, width:'45%'}}>
                <Text style={{color:'#898B8F',marginLeft:9, marginBottom:10}}>Star Rating</Text>
                <View style={rating === 5 ? styles.activeStar : styles.inActiveStar}>
                    <CheckRate rate={5} rating={(a)=>{setRating(a)}}/>
                </View>
                <View style={rating === 4 ? styles.activeStar : styles.inActiveStar}>
                    <CheckRate rate={4} rating={(a)=>{setRating(a)}}/>
                </View>
                <View style={rating === 3 ? styles.activeStar : styles.inActiveStar}>
                    <CheckRate rate={3} rating={(a)=>{setRating(a)}}/>
                </View>
                <View style={rating === 2 ? styles.activeStar : styles.inActiveStar}>
                    <CheckRate rate={2} rating={(a)=>{setRating(a)}}/>
                </View>
                <View style={rating === 1 ? styles.activeStar : styles.inActiveStar}>
                    <CheckRate rate={1} rating={(a)=>{setRating(a)}}/>
                </View>
            </View>
        </ScrollView>
            <View style={{padding:10,}}>
                <ButtonFilter label="Apply Filter" rating={rating} closeModal={closeModal}/>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    label:{
        color:'#1E1E1E', 
        fontSize:16, 
        fontWeight:'bold',
    },
    selectIDRWrapped:{
        width:'100%', 
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center',
    },
    IDR :{
        width:'45%', 
        height:'90%', 
        borderColor:'#E1E1E1', 
        borderWidth:1, 
        color:'#1E1E1E',
        textAlign:'center'
    },
    line:{
        width:'100%',
        borderBottomWidth:1, 
        borderBottomColor:'#E1E1E1', 
    },
    loadMore:{
        color:'#2BB16A', 
        fontSize:15, 
        fontWeight:'bold', 
        textDecorationLine:'underline', 
        marginTop:10,
        marginLeft:9,
    },
    activeStar:{
        flexDirection:'row', 
        backgroundColor:'#F3F3F3',
        borderRadius:5,
        alignItems:'center',
        marginBottom:10,
        paddingVertical:3,
    },
    inActiveStar:{
        flexDirection:'row', 
        alignItems:'center',
        marginBottom:10,
    },
})