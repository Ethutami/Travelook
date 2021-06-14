import React, { useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
  import auth from '@react-native-firebase/auth';


import label from '../image/name.png'
import google_icon from '../image/google.png'
import Facebook from '../image/facebook.png'
import InputComponent from '../component/InputComponent'
import ButtonLogin from '../../../component/button/black'
import ButtonSignup from '../../../component/button/white'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableOpacity } from 'react-native';
import { request_data_user } from '../../../redux/action/actionUser';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

GoogleSignin.configure({
    // webClientId:''
    // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '1080559858850-h1sta3tmcftehli9h25rq512rvmiadls.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    // // androidClientId : '1080559858850-h1sta3tmcftehli9h25rq512rvmiadls.apps.googleusercontent.com', 
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    // // hostedDomain: '', // specifies a hosted domain restriction
    // // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    // accountName: '', // [Android] specifies an account name on the device that should be used
    // googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
  });

const LoginScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const [dataLogin, setDataLogin] = useState({
        email:'',
        password:'',
    })

    const changeTxt =(txt, label)=>{
        if (label === 'Email'){
            setDataLogin({...dataLogin, email:txt})
        }else if (label === 'Password'){
            setDataLogin({...dataLogin, password:txt})
        }
    }
    
    const signIn = async () => {
        try {
            const { idToken } = await GoogleSignin.signIn();
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.log('3', error);
        }
      };


    return (
        <ScrollView style={{flex:1}}>
                <Image source={label} style={styles.label}/>
                <Text style={styles.login}>Sign in</Text>
            <View style={styles.container}>
            {/* <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={()=>{}}
    // disabled={this.state.isSigninInProgress} 
    /> */}
                {/* <View style={styles.gooleFacebook_Wrapped}>
                    <TouchableOpacity style={styles.googleFacebook_box}
                    onPress={()=>{signIn().then(() => alert('success'))}}
                    >
                        <Image source={google_icon} style={styles.googleicon}/>
                        <Text style={{fontSize:16}}>Google</Text>
                    </TouchableOpacity>
                    <View style={styles.googleFacebook_box}>
                        <Image source={Facebook} style={styles.facebookicon}/>
                        <Text  style={{fontSize:16}}>Facebook</Text>
                    </View>
                </View> */}
                <Text style={{marginTop:25, fontSize:16}}>or use your email to sign in:</Text>
                <View style={styles.inputWrapped}>
                    <InputComponent  label='Email' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                    <InputComponent  label='Password' changeTxt={(txt, label)=>{changeTxt(txt, label)}}/>
                </View>
                <ButtonLogin 
                    label='Login'   
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
                    }} />
                {/* <View style={{alignItems:'center', marginTop:24}}> */}
                    {/* <Text style={styles.forgotPass}>Forgot Password</Text> */}
                    <View style={styles.noaccount}>
                        <View style={styles.line}></View>
                        <Text>Haven’t got an account?</Text>
                        <View style={styles.line}></View>
                    </View>
                {/* </View> */}
                <ButtonSignup label='Sign Up Free' onPressButton='signup'/>
            </View>
        </ScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1, 
        paddingHorizontal:17,
        backgroundColor:'#F3F3F3'
    },
    label:{
        width:96, 
        height:15, 
        resizeMode:'stretch',
        marginBottom: 60,
        marginTop:52,
        marginStart:16,
    },
    login:{
        fontWeight:'bold',
        fontSize:28,
        marginStart:22,
    },
    gooleFacebook_Wrapped:{
        flexDirection:'row',
        width:'100%',
        height:43,
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:25
        
    },
    googleFacebook_box:{
        borderColor:'black',
        borderWidth:1,
        width:163,
        height:43,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    },
    googleicon :{
        width:17.55, 
        height:18.99, 
        marginEnd:10, 
        resizeMode:'stretch'
    },
    facebookicon:{
        width:9.77, 
        height:18.99, 
        marginEnd:10, 
        resizeMode:'stretch',
    },
    // forgotPass:{
    //     color:'#42C38B',  
    //     textDecorationLine: 'underline',
    //     fontWeight:'bold'
    // },
    noaccount:{
        marginTop:90,
        alignItems:'center', 
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
