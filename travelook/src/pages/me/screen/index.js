import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Header from '../../../component/header'
import Item from '../component/item'
import UserImage from '../component/image/user.png'
import { useSelector } from 'react-redux'

const index = () => {
    const {dataUser} = useSelector(state => state.userReducer)
    // console.log(dataUser);
    useEffect(() => {
    }, [dataUser])
    return (
        <View style={{flex:1, backgroundColor:'#ffffff'}}>
            <Header label='Settings' page='single_label'/>
            <View style={styles.user}>
                <Image source={UserImage} style={styles.userImage} />
                <Text style={styles.userName}>{dataUser?.first_name} {dataUser?.last_name}</Text>
            </View>
            <View style={styles.line}></View>
            <Item label='Account'/>
            <Item label='Notification'/>
            <Item label='Review'/>
            <View style={styles.line}></View>
            <Item label='Logout'/>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    user:{
        height:'14%', 
        flexDirection:'row', 
        alignItems:'center', 
        padding:20,
    },
    userImage:{
        width:60, 
        height:60, 
        borderRadius:30,
        marginRight:20,
    },
    userName:{
        fontSize:18, 
        color:'#363636', 
        fontWeight:'bold',
    },
    line:{
        width:'100%', 
        borderBottomWidth:1, 
        borderBottomColor:'#E1E1E1',
    }
})
