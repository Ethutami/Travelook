import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { request_data_user } from '../../redux/action/actionUser';
import commonLogo from '../../asset/image/name.png'
import TextField from '../../component/TextField';
import ButtonComponent from '../../component/button';

export default function SignupPage({navigation}) {
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
    }, [dataRegist])

    return (
        <ScrollView style={styles.container}>
            <Image source={commonLogo} style={styles.commonLogo}/>
            <Text style={styles.signupText}>Sign Up</Text>    
            <View style={styles.innerContainer}>
                <View>
                    <TextField  placeholder='First Name' changeTxt={(txt, label)=> {changeTxt(txt, label)}}/>
                    <TextField  placeholder='Last Name' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                    <TextField  placeholder='Email' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                    <TextField  placeholder='Password' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                    <TextField  placeholder='Confirm Password' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                </View>
                <View style={styles.chackBoxtWrap}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                    <Text style={styles.chackBoxtText}>I agree with Whiteboard’s terms & conditions</Text>
                </View>
                <ButtonComponent 
                    label='Sign Up' 
                    backgroundColor = '#1E1E1E'  
                    color = '#ffffff'
                    register={() =>{
                        try {
                           const res =  axios({
                                method: 'POST',
                                url: `https://travelook.gabatch11.my.id/auth/signup`,
                                data : dataRegist
                            })
                            .then((e)=>{
                                AsyncStorage.setItem('access_token', e.data.token)
                                dispatch(request_data_user())
                                navigation.navigate('TabMain', { screen: 'Next Stay' })
                            })
                    } catch (error) {}
                   }}
                    />
                <View style={styles.alredyamember}>
                    <View style={styles.line}></View>
                    <Text>Already a member?</Text>
                    <View style={styles.line}></View>
                </View>
                <ButtonComponent 
                    label='Login' 
                    borderColor = '#1E1E1E'
                    color= '#1E1E1E'
                    toNavigate= 'Login'
                    />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:16
    },
    commonLogo:{
        marginBottom: 60,
        marginTop:52,
        width:96, 
        height:15, 
        resizeMode:'stretch',
    },
    signupText:{
        marginStart:22,
        fontWeight:'bold',
        fontSize:28,
    },
    innerContainer:{
        flex:1, 
        marginBottom:20,
        paddingHorizontal:16,
        paddingBottom:6,
        backgroundColor:'#F3F3F3',
    },
    chackBoxtWrap: {
        marginTop:24,
        flexDirection:'row', 
        alignItems:'center', 
    },
    chackBoxtText: {
        marginStart:12, 
        fontSize:14,
    },
    alredyamember:{
        marginTop:46, 
        width:'100%', 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between'
    },
    line:{
        width:'25%',
        borderWidth:1, 
        borderBottomColor:'#E1E1E1', 
    }
})
