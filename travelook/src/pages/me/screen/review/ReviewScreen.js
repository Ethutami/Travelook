import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';


import Header from '../../../../component/header'
import photo from '../../../../asset/image/image.png'
import Feather from 'react-native-vector-icons/Feather'
import EmptyState from '../../../../pages/empty_State'
import { requirement } from '../../../../redux/action/actionetc';
import { get_all_user_review, request_one_review } from '../../../../redux/action/actionrivew';

export default function ReviewScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const {allReview} = useSelector(state => state.userReview)
    useEffect(() => {
        dispatch(get_all_user_review())
    }, [allReview])
    //console.log(allReview);
    return (
        <View style={{backgroundColor:'#ffffff', flex:1}}>
            <Header label='Review' page='w/arrow_bck' goBack={()=> {navigation.navigate('TabMain', {screen : 'Me'})}}/>
            {allReview && allReview !== undefined && allReview?.length !== 0  ? 
                <>
                <Text style={{marginLeft:16, marginVertical:20, fontSize:14}}>Let everyone knows your experience by writing a review</Text>
                <View style={{flex:1}}>
                {
                        allReview.length >= 1 &&
                        <FlatList
                        // contentContainerStyle={{flexGrow:1}}
                        // ListEmptyComponent={()=>{
                        //     return(
                        //         <View style={{flex:1}}>
                        //             <EmptyState text1='You have not order yet, please order now'/>
                        //         </View>
                        //     )
                        // }}
                       data={allReview}
                       keyExtractor={(item,i)=> item.id+[i]}
                       renderItem={({item})=>{
                           //console.log(item.Room.name, item.comment);
                           const start = moment(item?.start_date).format('ddd, DD MMM YYYY')
                           const end = moment(item?.end_date).format('ddd, DD MMM YYYY')
                               return(
                                   <View style={styles.CardWrapped} >
                                       <Image source={photo} style={styles.cardImage}/>
                                       <TouchableOpacity onPress={()=>{
                                           try {
                                               console.log(item.id);
                                               dispatch(request_one_review(item.id))
                                               navigation.navigate("ShowReview")
                                           } catch (error) { 
                                               console.log('error when trying navigate to show Review', error);    
                                           }
                                       }}>
                                           <View style={{paddingHorizontal:15, paddingBottom:10}}>
                                               <Text style={{color:'#898B8F', fontSize:12,marginTop:14}}>{`ORDER ID#0000000`}</Text>
                                               <Text style={item?.status === 'done' && styles.confirmed }>{item?.status === 'done' && 'Done'}</Text>
                                               <Text style={styles.CardItemName}>{item?.Room.name}</Text>
                                               <View style={{flexDirection:'row', marginTop:13}}>
                                                   <Feather name='calendar' size={16} color='#3E3E3E'/>
                                                   <Text style={{color:'#3E3E3E', marginLeft:8, fontSize:12}}>{`${start}, ${end}`}</Text>
                                               </View>
                                               <View style={{flexDirection:'row', marginTop:10}}>
                                                   <Feather name='smile' size={16} color='#3E3E3E'/>
                                                   <Text style={{color:'#3E3E3E', marginLeft:8, fontSize:12}}>{item?.guest_number} guests</Text>
                                               </View>
                                           </View>
                                       </TouchableOpacity>
                                       <View style={{flexDirection:'row',paddingHorizontal:15, paddingBottom:20, alignItems:'center'}}>
                                           <Text style={{marginRight:15, fontSize:14}}>How was the experience?</Text>
                                           <Rating 
                                               ratingCount={5}
                                               showRating ={false}
                                               fractions={1}
                                               startingValue={item.rating} 
                                               imageSize={15}
                                               //onFinishRating={(a)=>{console.log(a)}}
                                           />
                                           { item.review !== '' && 
                                               <TouchableOpacity style={{marginLeft:10}}>
                                                   <Text style={{color:'#2BB16A'}}>Full Review</Text> 
                                               </TouchableOpacity>
                                           }
                                       </View>
                                   </View>
                               )
                           
                       }}
                       />
                    }
                </View>
                
                </>
                :
                allReview === undefined ?
                <EmptyState text1='You have not order, please order now'/>
                : 
                <View style={{justifyContent:'center', alignSelf:'center', flex :1}}>
                    <ActivityIndicator size="large" color="#3E3E3E"  />
                </View>
                
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
        marginBottom:16,
    },
    cardImage:{
        width:'100%', 
        height:hp(25), 
        resizeMode:'stretch'
    },
    CardItemName:{
        //marginTop:13, 
        color:'#3E3E3E', 
        fontSize:14, 
        fontWeight:'bold',
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
})

