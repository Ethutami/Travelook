import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View,} from 'react-native'
import { Slider } from 'react-native-elements';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'



const Slider = () => {
    const [state, setState] = useState({
        value:''
    })
    const [state2, setState2] = useState({
        value: ''
    })
    const [value, setValue] = useState()
    return (
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
            <Slider
                value={state.value}
                onValueChange={(value) => setState({ value })}
            />
            <Text>Value: {state.value}</Text>

            {/* // Replace Thumb with custom image */}
          
            <Slider
                value={state2.value}
                onValueChange={(value) => setState({ value })}
                thumbStyle={{ height: 40, width: 40, backgroundColor: 'transparent' }}
                thumbProps={{
                Component: Animated.Image,
                source: {
                    uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                },
                }}
            />
            <Text>Value: {state2.value}</Text>
            

{/* // Set Custom Children inside thumb */}

    <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={50}
        minimumValue={20}
        step={1}
        trackStyle={{ height: 10, backgroundColor: 'transparent' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
        children: (
            <Icon
            name="heartbeat"
            type="font-awesome"
            size={20}
            reverse
            containerStyle={{ bottom: 20, right: 20 }}
            color="#f50"
            />
        ),
        }}
    />
  <Text>Value: {state.value}</Text>
        </View> 
    )
}

export default Slider

const styles = StyleSheet.create({})
