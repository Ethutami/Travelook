import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../../header'
import Dot_icon from 'react-native-vector-icons/Entypo'
import { useSelector } from 'react-redux'


const allAmenitie = ({navigation}) => {
    const {details, loading} = useSelector(state => state.hotelReducer)
    const foodandbeverage = []
    const service = []
    const healthy = []
    const parkandtransport = []
    for(const key in details?.foodandbeverage) {
        foodandbeverage.push(details?.foodandbeverage[key])
    }
    for(const key in details?.service) {
        service.push(details?.service[key])
    }
    for(const key in details?.parkandtransport) {
        parkandtransport.push( details?.parkandtransport[key])
    }
    for(const key in details?.healthy) {
        healthy.push( details?.healthy[key])
    }
   

    return (
        <ScrollView>
            <Header page='w/arrow_bck' label='Amenities' goBack={()=>{navigation.goBack()}}/>
            <View style={{marginVertical:18, paddingStart:22}}>
                <View style={{}}>
                    <Text style={{fontSize:16, color:'#3E3E3E'}}>Food And Beverage</Text>
                    {foodandbeverage !== undefined && foodandbeverage.map((item, i)=>{
                        return(
                            <View key={i.toString()} style={{flexDirection:'row', alignItems:'center'}}>
                                <Dot_icon name='dot-single' size={30}/>
                                <Text style={{fontSize:16, color:'#3E3E3E'}}>{item}</Text>
                            </View>
                        )
                    })}
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{fontSize:16, color:'#3E3E3E',}}>Service</Text>
                    {service !== undefined && service.map((item, i)=>{
                        return(
                            <View key={i.toString()} style={{flexDirection:'row', alignItems:'center'}}>
                                <Dot_icon name='dot-single' size={30}/>
                                <Text style={{fontSize:16, color:'#3E3E3E'}}>{item}</Text>
                            </View>
                        )
                    })}
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{fontSize:16, color:'#3E3E3E'}}>Park And Transport</Text>
                    {parkandtransport !== undefined && parkandtransport.map((item,i)=>{
                        return(
                            <View key={i.toString()} style={{flexDirection:'row', alignItems:'center'}}>
                                <Dot_icon name='dot-single' size={30}/>
                                <Text style={{fontSize:16, color:'#3E3E3E'}}>{item}</Text>
                            </View>
                        )
                    })}
                </View>
                <View style={{marginTop:20}}>
                    <Text style={{fontSize:16, color:'#3E3E3E'}}>Healthy</Text>
                    {healthy !== undefined && healthy.map((item, i)=>{
                        return(
                            <View key={i.toString()} style={{flexDirection:'row', alignItems:'center'}}>
                                <Dot_icon name='dot-single' size={30}/>
                                <Text style={{fontSize:16, color:'#3E3E3E'}}>{item}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    )
}

export default allAmenitie

const styles = StyleSheet.create({

})
