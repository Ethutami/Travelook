import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View, } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { request_data_user } from '../../redux/action/actionUser';

import commonLogo from '../../asset/image/name.png'
import TextField from '../../component/TextField';
import ButtonComponent from '../../component/button';

export default function LoginPage() {
    const dispatch = useDispatch()
    const [dataLogin, setDataLogin] = useState({
        email:'',
        password:'',
    })
    const changeTxt =(txt, label)=>{
        if (label === 'Email'){setDataLogin({...dataLogin, email:txt})}
        else if (label === 'Password'){setDataLogin({...dataLogin, password:txt}) }
    }
      return (
        <ScrollView style={styles.container}>
            <Image source={commonLogo} style={styles.commonLogo}/>
            <Text style={styles.loginText}>Sign in</Text>
            <View style={styles.innerContainer}>
                <Text style={{marginTop:25, fontSize:16}}>or use your email to sign in:</Text>
                <View>
                    <TextField  placeholder='Email' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                    <TextField  placeholder='Password' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                </View>
                <ButtonComponent 
                    label='Login' 
                    backgroundColor = '#1E1E1E'  
                    color = '#ffffff'
                    login={()=>{
                        try {
                            axios({
                                method: 'POST',
                                url: `https://travelook.gabatch11.my.id/auth/signin`,
                                data: dataLogin,
                            })
                            .then((e)=>{
                                AsyncStorage.setItem('access_token', e.data.token)
                                dispatch(request_data_user())
                                navigation.navigate('TabMain', { screen: 'Next Stay' })
                            })
                            
                        } catch (error) {
                            console.log('Can not login', error);
                        }
                    }} 
                    />
                <View style={styles.noaccount}>
                    <View style={styles.line}></View>
                    <Text>Haven’t got an account?</Text>
                    <View style={styles.line}></View>
                </View>
                <ButtonComponent 
                     label='Sign Up Free'
                     borderColor = '#1E1E1E'
                     color = '#1E1E1E'
                     toNavigate = 'Register'
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
    loginText:{
        marginStart:22,
        fontWeight:'bold',
        fontSize:28,
    },
    innerContainer:{
        flex:1, 
        paddingHorizontal:17,
        backgroundColor:'#F3F3F3'
    },
    noaccount:{
        marginTop:90,
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