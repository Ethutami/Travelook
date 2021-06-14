import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import bckground from '../image/bckground.png'
import InputComponent from '../component/selectInput/inputHome1'
import ButtonSearch from '../component/button/buttonSearch'
import { useDispatch, useSelector } from 'react-redux'
import { request_order_list } from '../../../redux/action/actionReservation';
import { request_data_user } from '../../../redux/action/actionUser';


const Home1 = () => {
    const dispatch = useDispatch()
    const {destination, startDate, endDate, guest} = useSelector(state => state.etcReducer)
    const [requirement, setRequirement] = useState({
        destination: '' ,
        startDate : '',
        endDate : '',
        guest : 0,
        night :'',
        name:'',
        time:''
    })
    const [hkn, setHkn] = useState(false)
    
    const a = new Date().getDate()
    const b = new Date().getMonth()+1
    const month1 = new Date(startDate?.startDate).getMonth()+1
    const month2 = new Date(endDate?.endDate).getMonth()+1
    const day1 = new Date(startDate?.startDate).getDate()
    const day2 = new Date(endDate?.endDate).getDate()

    const start_date =  moment(startDate?.startDate).format('ddd, DD MMM YYYY');
    const end_date = moment(endDate?.endDate).format('ddd, DD MMM YYYY')
    const startD = startDate.length !== undefined ? moment(startDate?.startDate) : null
    const endD = moment(endDate?.endDate)
    const nightof = endD.diff(startD, 'days')   // =1
    const hours = startD === null ? 24 : startD.diff(new Date, 'hour')

    useEffect(() => {
        setRequirement({
                ...requirement,
                destination: destination,
                startDate : start_date,
                endDate : end_date,
                guest : guest,
                night: nightof
            })
            
    }, [destination, startDate, endDate, guest, startDate, endDate])
    useEffect(() => {
        try {
            if (startDate?.length !== 0) {
                if (month1 === month2 && day1 > day2 ) {
                        console.log(2);
                        setHkn(true) 
                }else if (month1 === month2 && day1 === day2 ) {
                        setHkn(true) 
                }else if (month1 === b && day1 === a) {
                    setHkn(true) 
                }else if (hours !== 24 ){
                    setHkn(true)
                }else  {
                    setHkn(false)
                }
            } 
        }catch (error) {  }
        }, [month1, day1,])
    useEffect(() => {
        try {
            if (endDate?.length !== 0) {
              
               // month2 > b && day2 < a ? setHkn(false) : setHkn(true)
                if (month1 === month2 && day1 > day2 ) {
                    setHkn(true) 
                }else if (month1 === month2 && day1 === day2 ) {
                    setHkn(true) 
                }else if (hours !== 24 ){
                    setHkn(true)
                } else{
                    setHkn(false)
                }
            }
        } catch (error) {  }
   }, [month2, day2,])
   
   useEffect(() => {
    dispatch(request_order_list())
    dispatch(request_data_user())
   }, [])

   //console.log(destination, startDate, endDate, guest);
    return (
        <View style={{flex:1, }}>
            <ImageBackground source={bckground} resizeMode="stretch" style={{flex:1,alignItems:'center',}}>
                <Text style={styles.txt}>Where’s next?</Text>
                <View style={styles.cardWrapped}>
                    <InputComponent label='Destination' value={destination ? destination : 'Select Destination'} />
                    <InputComponent label='Check-in' value= {startDate?.startDate ? start_date : 'Select Date'}/>
                    <InputComponent label='Check-out' value= {endDate?.endDate ? end_date : 'Select Date' }/>
                    <InputComponent label='Guest' value={guest && `${guest} guest`}/>
                    <View style={{alignItems:'center'}}>
                        <ButtonSearch 
                            search={
                                requirement?.destination 
                                && requirement?.startDate
                                && requirement?.endDate
                                && requirement?.guest 
                                ?  requirement
                                : null
                                }
                            invalidDate={hkn}
                            />
                    </View>
                    {hkn && <Text style={{marginVertical:5, color:'red', alignSelf:'center'}}>invalid date</Text>}
                </View>
            </ImageBackground>
        </View>
    )
}

export default Home1

const styles = StyleSheet.create({
    txt:{
        fontSize:24,
        fontWeight:'bold', 
        color:'#1E1E1E', 
        marginTop:'15%',
    },
    cardWrapped:{
        width:327, 
        // height:'70%', 
        backgroundColor:'#ffffff', 
        marginTop:24,
        marginHorizontal:24,
        marginBottom:161

    }
})
