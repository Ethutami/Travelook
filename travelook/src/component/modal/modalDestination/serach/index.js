import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Search_icon from 'react-native-vector-icons/AntDesign';
import Close_icon from 'react-native-vector-icons/AntDesign'
import { useDispatch } from 'react-redux';
import { request_Search_hotel_by_location } from '../../../../redux/action/actionhotel';


const index = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('');
  return (
      <>
        <View style={styles.searchComponet}>
            <Search_icon
              name="search1"
              size={13.68}
              color="#898B8F"
            />
          <TextInput
            style={{
              backgroundColor: '#F3F3F3',
              color: '#444444',
              width: '90%',
              height: 36,
              marginLeft:10,
              
            }}
            placeholder="Your Destination"
            value={search}
            onChangeText={(txt) =>  {
              setSearch(txt)
              txt !== '' && dispatch(request_Search_hotel_by_location(txt))
            }}
          />
          <Close_icon name='closecircle' onPress={()=> setSearch('')} color='#898B8F' />
        </View>
      </>
  )
}

export default index

const styles = StyleSheet.create({
    searchComponet: {
        paddingHorizontal: 8,
        width: '100%',
        alignItems:'center',
        flexDirection: 'row',
        backgroundColor: '#F3F3F3',
      },
})
