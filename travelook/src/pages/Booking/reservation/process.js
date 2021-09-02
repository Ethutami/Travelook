import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableHighlight } from 'react-native'
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import Antdesign from 'react-native-vector-icons/AntDesign'
import Galery from 'react-native-vector-icons/MaterialIcons'

import { upload_payment } from '../../../redux/action/actionReservation';
import images from '../asset/image.png'
import ButtonUpload from '../../../component/button/white'
import ButtonConfirm from '../../../component/button/black'
import CardImageOrder from '../../../component/card/cardImageOrder'

const process = ({switchOn}) => {
    const dispatch = useDispatch()
    const {order} = useSelector(state => state.reservation)
    const [modalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState({
        mime:'',
        path:'',
    })
    let id = 1
   for (const key of order) { id = key.id }
    const OpenPicker = ()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        })
        .then(images => {
            setImage({
                mime: 'image/png',
                path: images.path,
                name: images.filename,
            });
        })
        setModalVisible(!modalVisible)
    }
    const OpenPickerCam =()=>{
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setImage({
                mime: 'image/jpg',
                path: image.path,
            });
        })
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        image.path !== '' && dispatch(upload_payment(id, image))
    }, [order, id, image]);

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={{marginHorizontal:18}}>
                    <Image source={images} style={styles.image}/>
                    <Text style={styles.txt1}>Your booking is waiting for confirmation. </Text>
                    <Text style={styles.txt2}>Mean while please complete your payment</Text>
                    <View style={styles.countDown}>
                    </View>
                    {   image.path !== '' 
                        &&  <View style={styles.uploadFile}>
                                <Antdesign name="filetext1" size={20} color='#4A84FA'/>
                                <Text style={styles.uploadFileTxt}>1 file uploaded</Text>
                            </View>
                    }{  image.path !== '' 
                        ?   <ButtonConfirm label='Confirm Payment' /> 
                        :   <ButtonUpload 
                                label='Upload Receipt' 
                                OpenPicker={()=>{
                                    setModalVisible(!modalVisible)
                                }}
                                onPressButton={()=>{}}/>
                    }
                </View>
                <View style={styles.line}></View>
                {order?.map((e)=>{
                    //console.log(e);
                    return(
                        <View key={e.id}>
                            <CardImageOrder
                                orderId= {e.order_id}
                                guest ={e.guest_number}
                                start_date={e.start_date}
                                end_date={e.end_date}
                                name={e.Room.name}/>
                        </View>
                    )
                })}
            </ScrollView>
            <Modal
                backdropColor='transparant'
                isVisible={modalVisible}
                animationOut='slideOutDown'
                onBackdropPress={()=>{
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.modalCenteredView}>
                    <TouchableHighlight onPress={()=>{OpenPickerCam()}}>
                        <Antdesign name='camera' size={50}/>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>{OpenPicker()}}>
                        <Galery name='photo-library' size={50}/>
                    </TouchableHighlight>
                </View>
            </Modal>
        </>
    )
}

export default process

const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor:'#ffffff',
    },
    image:{
        marginTop:hp(8),
        marginBottom:hp(5),
        width:'45%', 
        height:hp(20), 
        alignSelf:'center', 
        resizeMode:'stretch', 
    },
    txt1:{
        alignSelf:'center', 
        fontSize:14
    },
    txt2:{
        marginBottom:24,
        alignSelf:'center', 
        fontSize:14, 
    },
    countDown:{
        marginBottom:7, 
        width:277,
        alignSelf:'center', 
        justifyContent:'center', 
    },
    uploadFile:{
        marginTop:24,
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center', 
    },
    uploadFileTxt:{
        fontSize:16
        color:'#4A84FA', 
    },
    modalCenteredView:{
        marginTop:hp(10),
        marginHorizontal:wp(10),
        padding:30,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-around',
        borderRadius:8,
        backgroundColor:'rgba(52, 52, 52, 0.9)',
    },
    line:{
        marginBottom:24, 
        marginTop:14,
        borderBottomWidth:1, 
        borderBottomColor:'#E1E1E1', 
    },
})
