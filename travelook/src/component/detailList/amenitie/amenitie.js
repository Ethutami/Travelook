import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import Dot_icon from 'react-native-vector-icons/Entypo'

const amanitie = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{flex:1}}>
            <View style={{}}>
                <Text style={styles.tag}>Amenities</Text>
                <View style={{marginTop:8}}>
                    <Text style={{fontSize:14, color:'#3E3E3E'}}>Food and beverage</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Dot_icon name='dot-single' size={30}/>
                        <Text style={{fontSize:14, color:'#3E3E3E'}}>{props.foodandbeveragelist1}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Dot_icon name='dot-single' size={30}/>
                        <Text style={{fontSize:14, color:'#3E3E3E'}}>{props.foodandbeveragelist2}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Dot_icon name='dot-single' size={30}/>
                        <Text style={{fontSize:14, color:'#3E3E3E'}}>{props.foodandbeveragelist3}</Text>
                    </View>
                </View>
                <View style={{marginTop:8}}>
                    <Text style={{fontSize:14, color:'#3E3E3E'}}>Service</Text>
                    <View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Dot_icon name='dot-single' size={30}/>
                            <Text style={{fontSize:14, color:'#3E3E3E'}}>{props.serviceList1}</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Dot_icon name='dot-single' size={30}/>
                            <Text style={{fontSize:14, color:'#3E3E3E'}}>{props.serviceList2}</Text>
                        </View>
                    </View>
                </View>
                
              <TouchableOpacity
                onPress={()=>{navigation.navigate('Amenitie')}}
              >
                    <Text style={styles.buttonShow}>
                    Show all amenities
                    </Text>
              </TouchableOpacity>
              <View style={{borderBottomColor:'#E1E1E1', borderBottomWidth:1,}}></View>
                   
              
               
            </View>
        </View>
    )
}

export default amanitie

const styles = StyleSheet.create({
    tag:{
        color:'#3E3E3E', 
        fontSize:16, 
        fontWeight:'bold', 
        marginBottom:10,
    },
    buttonShow:{
        padding:10, 
        borderWidth:1, 
        borderColor:'#E1E1E1', 
        width:'40%', 
        marginTop:21,
        marginBottom:24,
    },
})
