import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import Feather from 'react-native-vector-icons/Feather'
import EmptyStateScreen from '../empty_State'


import Header from '../../component/header'
import Images from '../../asset/image/image.png'
import { TouchableOpacity } from 'react-native';
import { request_details_hotel } from '../../redux/action/actionhotel';
import { requirement } from '../../redux/action/actionetc';
import { ActivityIndicator } from 'react-native';

export default function orderHistory() {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const {orderList2 } = useSelector(state => state.reservation)
    const [load, setLoad] = useState(false)
// console.log(orderList2);
    const renderItemNotActive = ({item}) =>{
        //console.log('2',item);
        const todayDate = moment(new Date())
        const start_date = moment(item.start_date).format('ddd, DD MMM YYYY')
        const end_date = moment(item.end_date).format('ddd, DD MMM YYYY')
        const startDate = moment(item.start_date)
        const passDate = startDate.diff(todayDate, 'days')
        //console.log(startDate , todayDate)'
        if (item.status === 'done') {
            return(
                <View style={styles.CardWrapped}>
                    <Image source={Images} style={styles.cardImage}/>
                    <TouchableOpacity style={{width:'100%'}} onPress={()=>{
                        try {
                            dispatch(request_details_hotel(item.id_room))
                            dispatch(requirement({
                                passDate: passDate <= 0 ? true : false,
                                idUser : item.id_user,
                                idReservation: item.id,
                                id: item.id_room,
                                order_id: item.order_id,
                                status : item.status,
                                name: item.Room.name,
                                start : `${start_date}`, 
                                end : `${end_date}`,
                                guest : item.guest_number,
                                price : item.price_per_night,
                                night : item.number_of_nights,
                                total : item.total
                            }))
                            navigation.navigate("OrderDetails")
                        } catch (error) { console.log('try again'); }
                    }}>
                        <View style={{paddingHorizontal:15}}>
                            <Text style={{color:'#898B8F', fontSize:12, marginTop:14, marginBottom:13}}>{`ORDER ID #${item.order_id}`}</Text>
                            <Text style={item.status === 'done' ? styles.confirmed : item.status === 'failed' && styles.proccess}>{item.status === 'done' ? 'Done' : `On Proccess`}</Text>
                            <Text style={styles.CardItemName}>{item.Room.name}</Text>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Feather name='calendar' size={12}/>
                                <Text style={{color:'#3E3E3E', fontSize:12, marginLeft:15}}>{`${start_date} - ${end_date}`}</Text>
                            </View>
                            <View style={{flexDirection:'row', marginTop:10, alignItems:'center', marginBottom:16}}>
                                <Feather name='smile' size={12}/>
                                <Text style={{color:'#3E3E3E',fontSize:12, marginLeft:15,}}>{item.guest_number} guests</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
        // if (load) {
        //     return(
        //         <View style={{justifyContent:'center', alignItems:'center', flex :1}}>
        //             <ActivityIndicator size="large" color="#3E3E3E"  />
        //         </View>
        //     )
        // }
            
        

            
}

    return (
        <View style={{flex:1, backgroundColor:'#ffffff'}}>
        <Header label='Orders History' page='w/arrow_bck' goBack={()=>{navigation.goBack()}}/> 
        {orderList2?.length !== 0  &&  orderList2 !== undefined ?
            <>
                <Text style={{margin:16}}>After book a stay you can manage orders here.</Text>
                <FlatList
                    data={orderList2}
                    keyExtractor={(item)=> item.id}
                    renderItem={renderItemNotActive}
                />
                
            </>
        : 
        orderList2 === undefined ?
            <View style={{justifyContent:'center', alignSelf:'center', flex :1}}>
                <ActivityIndicator size="large" color="#3E3E3E"  />
            </View>
        :
            <EmptyStateScreen text1='No orders yet' text2='After book a stay you can manage orders here.'/>
        }
            
        </View>
    )
}

const styles = StyleSheet.create({
    CardWrapped:{
        flex:1,
        width:wp(92), 
        borderColor:'#E1E1E1',
        borderWidth:1,
        marginHorizontal:16,
        marginVertical:20,
    },
    cardImage:{
        width:'100%', 
        height:179, 
        resizeMode:'stretch'
    },
    CardItemName:{
        color:'#3E3E3E', 
        fontSize:14, 
        fontWeight:'bold',
        marginBottom:10,
    },
    confirmed:{
        position:'absolute', 
        right:26.5, 
        top:11, 
        padding:4, 
        backgroundColor:'#199946', 
        fontSize:11, 
        color:'#F4FCF1',
    },
    proccess:{
        position:'absolute', 
        right:12, 
        top:10, 
        padding:4, 
        backgroundColor:'#E1E1E1', 
        fontSize:11, 
        color:'#898B8F',
    }
})
