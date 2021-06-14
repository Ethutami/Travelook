import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox';

import label from '../image/name.png'
import InputComponent from '../component/InputComponent'
import ButtonSignup from '../../../component/button/black'
import ButtonLogin from '../../../component/button/white'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { request_data_register, request_data_user } from '../../../redux/action/actionUser';

const RegisterScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [dataRegist, setDataRegist] = useState({
        first_name :'',
        last_name:'',
        email:'',
        password:'',
        confirmPassword:''
    })
 

    const changeTxt =(txt, label)=>{
        if (label === 'First Name'){
            setDataRegist({...dataRegist, first_name:txt})
        }else if (label === 'Last Name'){
            setDataRegist({...dataRegist, last_name:txt})
        }else if (label === 'Email'){
            setDataRegist({...dataRegist, email:txt})
        }else if (label === 'Password'){
            setDataRegist({...dataRegist, password:txt})
        }else if ( label === 'Confirm Password'){
            setDataRegist({...dataRegist, confirmPassword: txt})
        }
    }

    useEffect(() => {
        console.log(dataRegist);
    }, [dataRegist])

    return (
        <ScrollView style={{flex:1,}}>
                <Image source={label} style={styles.label}/>
                <Text style={styles.signup}>Sign Up</Text>                                      
            <View style={styles.container}>
                <View style={styles.inputWrapped}>
                    <InputComponent  label='First Name' changeTxt={(txt, label)=> {changeTxt(txt, label)}}/>
                    <InputComponent  label='Last Name' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                    <InputComponent  label='Email' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                    <InputComponent  label='Password' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                    <InputComponent  label='Confirm Password' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', marginTop:24}}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={{marginStart:12, fontSize:14}}>I agree with Whiteboard’s terms & conditions</Text>
                </View>
                <ButtonSignup 
                    label='Sign Up' 
                    register={()=>{
                        try {
                           const res =  axios({
                                method: 'POST',
                                url: `https://travelook.gabatch11.my.id/auth/signup`,
                                data : dataRegist
                            })
                            .then((e)=>{
                                AsyncStorage.setItem('access_token', e.data.token)
                                //console.log(e.status);
                                dispatch(request_data_user())
                                navigation.navigate('TabMain', { screen: 'Next Stay' })
                            })
                    } catch (error) {
                            console.log('regist',error.response.data);
                        }
                    }}/>
                <View style={styles.alredyamember}>
                    <View style={styles.line}></View>
                    <Text>Already a member?</Text>
                    <View style={styles.line}></View>
                </View>
                <ButtonLogin label='Login' onPressButton='login'/>
            </View>
        </ScrollView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#F3F3F3',
        paddingHorizontal:16,
        paddingBottom:6,
    },
    label:{
        width:96, 
        height:15, 
        resizeMode:'stretch',
        marginBottom: 80,
        marginTop:52,
        marginStart:16,
    },
    signup:{
        fontWeight:'bold',
        fontSize:28,
        marginStart:22,
    },
    alredyamember:{
        alignItems:'center', 
        marginTop:46, 
        flexDirection:'row', 
        width:'100%', 
        justifyContent:'space-between'
    },
    line:{
        borderBottomColor:'#E1E1E1', 
        borderWidth:1, 
        width:'25%'
    }

})
