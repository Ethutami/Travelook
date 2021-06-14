import CheckBox from '@react-native-community/checkbox'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import Star_icon from 'react-native-vector-icons/FontAwesome'


const index = ({label,key,a, rating }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [state, setState] = useState({
        
    })

    return (
        <>
            <View key={key} style={{flexDirection:'row', alignItems:'center', marginLeft:0}}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) =>
                    {
                        setToggleCheckBox(newValue)
                    }}
                />
                    <Text style={{fontSize:15}}>{label}</Text> 
            </View>
        </>
    )
}

export default index

const styles = StyleSheet.create({})
