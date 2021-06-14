import React from 'react'
import { View, Text } from 'react-native'
import Toast from 'react-native-toast-message';

export default function index() {
    function SomeComponent() {
      useEffect(() => {
        Toast.show({
            text1: 'Hello',
            text2: 'This is some something 👋'
          });
      }, [])
        return <View />;
      }

    return (
        <View>
             <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    )
}
