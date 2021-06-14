import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Header from '../../component/header'
import ModalComponent from '../../component/modal'
import CardListHotel from '../../component/card/CardListHotel'
import Sort_icon from 'react-native-vector-icons/FontAwesome'
import { useSelector } from 'react-redux'



const index = ({navigation}) => {
    const requirement = useSelector(state => state.etcReducer.requirement)
    const [isVisible, setIsVisible] = useState()
    const [label, setLabel] = useState()
    const [modal, setModal] = useState()
    const [sortingBy, setSortingBy] = useState([
        'Most Popular', 'Highest Rating', 'Lowest Price'
    ])
    //console.log(requirement);
    return (
        <>
        <View style={{flex:1, backgroundColor:'#ffffff', marginBottom:40}}>
           <Header 
            label={requirement?.destination} 
            date={`${requirement.startDate} - ${requirement.endDate} | ${requirement?.guest} guest`} 
            page="FILTER&SORT"
            goBack={()=> navigation.navigate('Home')}/>
            <CardListHotel/>
        </View>
        {/* <View style={styles.bottom}>
            <View style={{flexDirection:'row', alignItems:'center',}}>
                <Sort_icon name='filter' size={16}/>
                <TouchableOpacity 
                    onPress={()=> {
                        setIsVisible(true) 
                        setLabel('Filter')
                        setModal('modal1')
                    }}>
                    <Text style={{fontSize:12, marginStart:10}}>Filter</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',}}>
                <Sort_icon name='sort' size={16}/>
                <TouchableOpacity
                        onPress={()=> {
                        setIsVisible(true) 
                        setLabel('Sort')
                        setModal('modal2')
                    }}>
                    <Text style={{fontSize:12, marginStart:10}}>Sort</Text>
                </TouchableOpacity>
            </View>
        </View> */}
            <ModalComponent 
                isModal={isVisible} 
                closeModal={()=>{setIsVisible(false)}}
                label={label}
                page= 'FILTER'
                modal={modal}
                data={sortingBy} 
                />
        </>
    )
}

export default index

const styles = StyleSheet.create({
 
    bottom:{
        width:'100%', 
        height:49, 
        borderTopWidth:1, 
        borderTopColor:'#E1E1E1', 
        elevation:1,
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#ffffff',
    },
    bottomLine:{
        height:'5%', 
        borderRightWidth:1, 
        borderRightColor:'#E1E1E1'
    },
})
