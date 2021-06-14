import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../../component/header'
import TxtInput from '../../../component/TextinputWlabel'
import ButtonClick from '../../../component/button/black'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ScrollView } from 'react-native'
import { request_data_user } from '../../../redux/action/actionUser'
import Toast from 'react-native-toast-message'

const AccountScreen = ({navigation}) => {
     const dispatch = useDispatch()
     const {dataUser} = useSelector(state => state.userReducer)
     const phone = parseInt(dataUser?.phone_number, 10)
     const [data, setData] = useState({
          first_name :'',
          last_name :'',
          email :'',
          phone_number:'',
          password:'Dian123_',
          confirmPassword :'Dian123_',
     })
     const updateProfile = (value, label) =>{
          if (label === 'First Name') {
               setData({...data, first_name: value})
          } else if (label === 'Last Name') {
               setData({...data, last_name: value})
          }else if (label === 'Email') {
               setData({...data, email: value})
          }else if (label === 'Email') {
               setData({...data, email: value})
          }else {
               setData({...data, phone_number: value})
          }
          
     }
     useEffect(() => {
     }, [dataUser])
     return (
          <>
          <ScrollView style={{backgroundColor:'#ffffff', flex:1}}>
               <Header label='Account' page='w/arrow_bck' goBack={()=>{navigation.goBack()}}/>
               <View style={{paddingHorizontal:18, marginTop:16}}>
                    <Text style={{marginBottom:26, fontSize:14}}>Here’s your account details. Tap to make changes.</Text>
                    <TxtInput label='First Name' placeholder={dataUser?.first_name} changeTxt={(txt, label)=>{updateProfile(txt, label)}}/>
                    <TxtInput label='Last Name' placeholder={dataUser?.last_name} changeTxt={(txt, label)=>{updateProfile(txt, label)}}/>
                    <TxtInput label='Email' placeholder={dataUser?.email} changeTxt={(txt, label)=>{updateProfile(txt, label)}}/>
                    <TxtInput label='' placeholder={phone !== null || phone !== undefined ? phone  : `Mobile Number`} changeTxt={(txt, label)=>{updateProfile(txt, label)}}/>
               </View >
               <TouchableOpacity style={{paddingLeft:'5%'}}>
                    <Text style={{fontSize:14, fontWeight:'bold', color:'#2BB16A', textDecorationLine: 'underline'}}>Change Password</Text>
               </TouchableOpacity>
               
          </ScrollView>
               <View style={{position:'absolute', bottom:0, width:'100%'}}>
               <ButtonClick 
                         label='Save' 
                         updateProfile={()=>{
                              try {
                                   const token =  AsyncStorage.getItem('access_token')
                                   .then((e)=>{
                                        //console.log(1,e);
                                        return e
                                   })
                                   axios({
                                        method:'PUT',
                                        url:`https://travelook.gabatch11.my.id/auth/update/${dataUser.id}`,
                                        headers:{
                                             Autorization : `Bearer ${token}`
                                        },

                                        data : data,
                                   })
                                   .then((e)=>{
                                        //console.log(e);
                                        Toast.show({
                                             text1: 'Account updated',
                                           });
                                        dispatch(request_data_user())
                                   })
                                   
                              } catch (error) {
                                   console.log(err);
                              }
                         }}/>
               </View>
          </>
     )
}

export default AccountScreen

const styles = StyleSheet.create({})
