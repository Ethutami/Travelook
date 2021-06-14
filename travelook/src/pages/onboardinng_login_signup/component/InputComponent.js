import React, { useEffect, useState } from 'react'
import { StyleSheet,Text,TextInput, TouchableOpacity, View, } from 'react-native'
import ShowPass_icon from 'react-native-vector-icons/Feather'

export default function InputComponent({label, changeTxt,}) {
    const [showPass, setShowPass] = useState(false);
    let num
        return (
            <View style={{}}>
                <TextInput
                placeholder={label}
                //keyboardType={ label === 'First Name' && Platform.OS === 'android' ? 'numeric' : 'number-pad'}
                onChangeText={(txt)=>{changeTxt(txt, label)} }
                    
                style={styles.inputTxt}
                secureTextEntry={
                    label === 'Password' && !showPass || 
                    label === 'Confirm Password' && !showPass 
                    ? true : false
                }
                />
                { label === 'Password' &&
                 <ShowPass_icon 
                        name={showPass ? 'eye' : 'eye-off'} 
                        size={20} 
                        style={{
                            position:'absolute', 
                            top:'50%',
                            right:'5%'
                        }}
                        onPress={()=> setShowPass(!showPass)}/>
                }
                {label === 'Confirm Password' &&
                 <ShowPass_icon 
                        name={showPass ? 'eye' : 'eye-off'} 
                        size={20} 
                        style={{
                            position:'absolute', 
                            top:'50%',
                            right:'5%'
                        }}
                        onPress={()=> setShowPass(!showPass)}/>
                }
                
                

            </View>
        ) 
}

const styles = StyleSheet.create({
    inputTxt:{
        width:'100%', 
        padding:15, 
        borderWidth:1, 
        borderColor:'#E1E1E1',  
        backgroundColor:"#ffffff", 
        marginTop:24,
        fontSize:16,
    },
})
