import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'

const teting = () => {
    const [state, setState] = useState(false)
    return (
        <View style={{
            flex:1, 
            flexDirection:'row', 
            alignItems:'center', 
            justifyContent:'center',
            }} >
                <TouchableOpacity 
                    style={{width:'100%'}}
                    onPress={()=>{setState(!state)}}>
                    <View style={state ? styles.activestyle : styles.inact}>
                        <Text>notif</Text>
                    </View>
                </TouchableOpacity>
        </View>
    )
}

export default teting

const styles = StyleSheet.create({
    activestyle:{ 
        backgroundColor:'tomato',
        width:'100%',
        alignItems:'center'},
    inact:{
        width:'100%',
        alignItems:'center',
        backgroundColor:'#F4FCF1'
    }
})
