import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const White = (props) => {
    const navigation = useNavigation();
    const [state, setState] = useState(false)
    return (
        <View style={{flex:1}} >
            <TouchableOpacity
            style={styles.button}
            onPress={ ()=> {
                try {
                    if ( props.onPressButton === 'signup') {
                        navigation.navigate('Register')
                    } else if(props.onPressButton === 'login') {
                        navigation.navigate('Login')
                    } else if(props.label === 'Upload Receipt'){
                        //props.onSwitch()
                        props.OpenPicker()
                        // !== undefined && onPressButton()
                    } else if(props.label === 'No' || props.label=== 'Cancel'){
                        props.closeModal()
                    }
                    
                    // props.label='Upload Receipt' ?  props.onSwitch !== undefined && onPressButton() :
                } catch (error) {
                    console.log('invalid Button', error);
                }

            }}>
                <Text style={{color:'#1E1E1E'}}>{ props.label}</Text>
            </TouchableOpacity>
    </View>
    )
}

export default White

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#ffffff', 
        borderColor:'#1E1E1E',
        borderWidth:1,
        width:'100%', 
        height:55, 
        marginTop:24, 
        marginBottom:10,
        padding:15, 
        justifyContent:'center', 
        alignItems:'center'
    },
})
