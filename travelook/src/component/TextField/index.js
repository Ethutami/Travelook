import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View, } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import Eye_icon from 'react-native-vector-icons/Feather'

export default function TextField(props) {
    const [showPass, setShowPass] = useState(false);
    return (
        <>
            <KeyboardAvoidingView enabled={false}>
                <TextInput
                    placeholder={props.placeholder}
                    onChangeText={txt => {props.changeTxt(txt, props.placeholder)}}
                    style={styles.inputTxt}
                    secureTextEntry={
                        (props.placeholder === 'Password' && !showPass) ||
                        (props.placeholder === 'Confirm Password' && !showPass)
                        ? true
                        : false
                    }
                    />
            </KeyboardAvoidingView>
            {
                props.placeholder === 'Password' || props.placeholder === 'Confirm Password' ?
                <Eye_icon
                    name={showPass ? 'eye' : 'eye-off'}
                    size={20}
                    style={styles.eyeIcon}
                    onPress={() => setShowPass(!showPass)}
                /> : null
            }
            
        </>
    )
}

const styles = StyleSheet.create({
    inputTxt: {
        marginTop: 24,
        padding: 15,
        width: '100%',
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#E1E1E1',
        backgroundColor: '#ffffff',
      },
      eyeIcon:{
        position: 'absolute',
        top: '50%',
        right: '5%',
      },
})
