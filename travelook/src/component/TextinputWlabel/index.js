import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { onChange } from 'react-native-reanimated'

const index = ({label, label2, placeholder, value, changeTxt}) => {
    return (
        <KeyboardAvoidingView style={{}} enabled={false} >
            
            <TextInput
                placeholder={typeof placeholder === 'number' ? placeholder.toString() : placeholder}
                value={value}
                style={{
                    width:'100%', 
                    paddingBottom:15,
                    paddingHorizontal:26, 
                    borderWidth:1, 
                    borderColor:'#E1E1E1',  
                    marginBottom:38,
                    
                }}
                onChangeText={(txt,)=>{changeTxt(txt, label)}}
                keyboardType={label === 'Phone' || placeholder === 'Mobile Number' || typeof placeholder === 'number'  ? 'numeric' : 'default'}
                />
            <View style={label || label2 ? styles.labelWrapped : styles.labelWrapped2}>
                <Text style={{color:'#3E3E3E',}}>{ label ? label + '*' : label2 ? label2 : ''}</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default index
const styles = StyleSheet.create({
    labelWrapped:{
        flex:1,
        position:'absolute', 
        bottom:80, 
        left:20, 
        backgroundColor: '#ffffff', 
        padding:5,
        alignItems:'center',
    },
    labelWrapped2:{
        alignItems:'center',
    }

})

