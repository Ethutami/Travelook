import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'

import Header from '../../component/header'
import ModalComponent from '../../component/modal'
import CardListHotel from '../../component/card/CardListHotel'

const index = ({navigation}) => {
    const requirement = useSelector(state => state.etcReducer.requirement)
    const [isVisible, setIsVisible] = useState()
    const [label, setLabel] = useState()
    const [modal, setModal] = useState()
    const [sortingBy, setSortingBy] = useState([
        'Most Popular', 'Highest Rating', 'Lowest Price'
    ])
    return (
        <>
        <View style={styles.container}>
           <Header 
            label={requirement?.destination} 
            date={`${requirement.startDate} - ${requirement.endDate} | ${requirement?.guest} guest`} 
            page="FILTER&SORT"
            goBack={()=> navigation.navigate('Home')}/>
            <CardListHotel/>
        </View>
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

const styles = StyleSheet.create({
    container: {
        flex:1, 
        marginBottom:40,
        backgroundColor:'#ffffff', 
    },
})

export default index
