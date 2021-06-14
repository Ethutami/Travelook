import React, { useState } from 'react'
import {Text, View,} from 'react-native'
import Plus_icon from 'react-native-vector-icons/AntDesign'
import ButtonSelectComponent from '../../button/black'

export const showModalGuest =({label, closeModal})=>{
    const [stateAdult, setStateAdult] = useState(1)
    const [stateChildren, setStateChildren] = useState(0)
    return(
        <View style={{flex:1, padding:16, }}>
            <Text style={{flex:1, fontSize:18}}>{label}</Text>
            <View style={{flex:1, flexDirection:'row', alignContent:'center'}}>
                <Text style={{flex:1, fontSize:15,}}>Adult</Text>
                <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
                    <Plus_icon name='minuscircleo' size={20} color={stateAdult === 1 ? '#E1E1E1' : '#000000'}
                        onPress={()=> {stateAdult !== 0 && setStateAdult(stateAdult -1)}}/>
                    <Text style={{marginHorizontal:20}}>{stateAdult}</Text>
                    <Plus_icon name='pluscircleo' size={20}  color='#000000' 
                        onPress={()=> setStateAdult(stateAdult+1)} />
                </View>
            </View>
            <View style={{flex:1, flexDirection:'row'}}>
                <Text style={{flex:1, fontSize:15,}}>Children</Text>
                <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
                    <Plus_icon name='minuscircleo' size={20} color={stateChildren === 0 ? '#E1E1E1' : '#000000'}
                        onPress={()=> {stateChildren !== 0 && setStateChildren(stateChildren -1)}}/>
                    <Text style={{marginHorizontal:20}}>{stateChildren}</Text>
                    <Plus_icon name='pluscircleo' size={20} color='#000000' 
                         onPress={()=> setStateChildren(stateChildren+1)} />
                </View>
            </View>
            <View style={{flex:1,}}>
                <ButtonSelectComponent 
                    label='Select Guest' 
                    guest={stateAdult + stateChildren}
                    closeModal={closeModal}/>
            </View>
        </View>
    )
}