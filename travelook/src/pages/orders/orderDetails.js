import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableHighlight} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ImagePicker, { openCamera, openPicker } from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import {
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import Header from '../../component/header'
import CardImage from '../../component/card/CardImage'
import BokingDate from './ccomponent/index'
import PreiceDetails from '../../component/detailList/priceDetails'
import Amenitie from '../../component/detailList/amenitie/amenitie'
import Review from '../../component/detailList/review'
import GoogleMap from '../../component/detailList/googleMap'
import About from '../../component/detailList/about/about'
import ButtonUpload from '../../component/button/black'
import Antdesign from 'react-native-vector-icons/AntDesign'
import Galery from 'react-native-vector-icons/MaterialIcons'
import { upload_payment } from '../../redux/action/actionReservation';
import { TouchableOpacity } from 'react-native';


const orderDetails = ({navigation}) => {
    const dispatch = useDispatch()
    const {details} = useSelector(state => state.hotelReducer)
    const {requirement} = useSelector(state => state.etcReducer)
    const [modalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState({
        mime:'',
        path:'',
    })
    const food = details?.foodandbeverage 
    const service = details?.service

    const OpenPicker = ()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        })
        .then(images => {
            //console.log(images);
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
            //console.log(image); 
            setImage({
                mime: 'image/jpg',
                path: image.path,
            });
        })
        setModalVisible(!modalVisible)
    }
    useEffect(() => {
        image.path !== '' && dispatch(upload_payment(requirement.idReservation, image))
    }, [requirement,image]);
    
    
    return (
        <>
            <ScrollView 
                showsVerticalScrollIndicator={false} 
                style={{backgroundColor:'#ffffff',}}>
                <Header label={requirement.order_id} page='w/arrow_bck/Dot'/>
                <CardImage
                    name={details?.name}
                    guest={requirement.guest}
                    badroom={details?.total_bedrooms}
                    bathroom={details?.total_bathroom}
                />
                <BokingDate
                    name='Booking Preview'
                    checkin={requirement.start}
                    checkout={requirement.end}
                    guest={requirement.guest}
                />
                <PreiceDetails
                    guest={requirement.guest}
                    price={requirement.price}
                    night={requirement.night}
                    caculate={requirement.total}
                    fee={details?.fee ? details.fee : 0}
                />
                <View style={{ width:'100%', borderBottomWidth:1, borderBottomColor:'#E1E1E1',}}></View>
                <View style={{marginHorizontal:16, marginBottom:20, marginTop:14}}>
                    {food !== undefined && service !== undefined &&
                    <Amenitie
                        foodandbeveragelist1 ={food["1"]}
                        foodandbeveragelist2 ={food['2']}
                        foodandbeveragelist3 ={food['3']}
                        serviceList1={service['1']}
                        serviceList2={service['2']}
                    />
                    }{
                        requirement.status === 'done' &&
                            <TouchableOpacity 
                                style={{
                                    backgroundColor:'#DAE8FF', 
                                    padding:10, 
                                    marginTop:15, 
                                    elevation:1, 
                                    alignItems:'center', 
                                    justifyContent:'space-between',
                                    flexDirection:'row'}}
                                onPress={()=>{
                                    navigation.navigate("EditReview")}}
                                >
                                <Text style={{fontSize:14, color:'#898B8F', }}>add your review</Text>
                                <Text style={{fontSize:14, color:'#898B8F', }}>+</Text>
                            </TouchableOpacity>}
                    <Review/>
                    {/* <GoogleMap/> */}
                    <About about={details?.summary}/>
                </View>
            </ScrollView>
            <View style={{width:'100%', padding:16, backgroundColor:'#ffffff'}}>
                {  image.path !== '' 
                        &&  <View style={styles.uploadFile}>
                                <Antdesign name="filetext1" size={20} color='#4A84FA'/>
                                <Text style={styles.uploadFileTxt}>1 file uploaded</Text>
                            </View>
                }
                {requirement.status === 'not approved' &&
                    <ButtonUpload 
                        label= { image.path !== '' ? 'Confirm Payment' :  'Upload Receipt' }
                        OpenModal={()=>{
                            setModalVisible(!modalVisible)
                        }}
                    />
                }
            </View>
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

export default orderDetails

const styles = StyleSheet.create({
    modalCenteredView:{
        marginTop:hp(10),
        marginHorizontal:wp(10),
        padding:30,
        backgroundColor:'rgba(52, 52, 52, 0.9)',
        borderRadius:8,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'space-around'
    },
    uploadFile:{
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center', 
        marginTop:24,
    },
    uploadFileTxt:{color:'#4A84FA', fontSize:16},
})
