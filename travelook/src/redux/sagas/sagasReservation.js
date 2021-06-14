import AsyncStorage from "@react-native-async-storage/async-storage";
import { call, put } from "@redux-saga/core/effects";
import axios from "axios";
import Toast from 'react-native-toast-message';

async function reservation(data, idRoom) {
  const token = await AsyncStorage.getItem('access_token')
  console.log(token);
  try {
    const response = await axios({
      method: 'POST',
      url: `https://travelook.gabatch11.my.id/reservation/room?id_room=${idRoom}`,
      headers:{
        authorization : 'bearer ' + token
      },
      data,
    })
      return response?.data
    } catch (error) {
        console.log('something wrong ', data, idRoom, error.response)
    }
}

export function* userResevation(action){
    const result = yield call(reservation, action.data, action.idRoom)
    console.log(result);
    if (result) {
      yield put({
        type:'SET_RESERVASI',
        payload:result,
      })
      yield put({
        type: 'PROGRES_STEPS',
        payload: 2,
      })
    } 
}

async function dataOrder(id){
  const token = await AsyncStorage.getItem('access_token')
  try {
    const response = await fetch(`https://travelook.gabatch11.my.id/reservation/order/?order_id=${id}`, {
      method: 'GET',
      headers: {
        Authorization : `Bearer ${token}`
      },
    })
    const json = await response.json()
    //console.log(json);
    return json.data.rows
  } catch (error) {
    console.log(error);
  }
}

export function* userOrderPreview(action){
  const result = yield call(dataOrder, action.payload)
  //console.log(result)
  if (result) {
    yield put({
      type:'ORDER_PREVIEW',
      payload: result
    })
    yield put({
      type: 'PROGRES_STEPS',
      payload: 3,
    })
  }
}

async function payment(id, image){
  const token = await AsyncStorage.getItem('access_token')
  const data = new FormData();
  data.append('image', {
    type: image.mime,
    uri:
      Platform.OS === "android" ? image.path : image.path.replace("file://", "")
  });
  //console.log('photo',data);
  try {
    const response = await axios({
      method: 'PUT',
      url: 'https://travelook.gabatch11.my.id/reservation/payment?id=' + id,
      headers:{
        Authorization : `Bearer ${token}`,
      },
      data
    })
    // console.log(response);
    Toast.show({
      text1: 'upload payment success',
    });
    return response.data
  } catch (error) {
    console.log('eror upload payment receipt', error);
  }
}

export function* uploadPayment(action){
  //console.log(action);
  const result = yield call(payment, action.id, action.image)
  console.log(result);
  yield put({
    type: 'PAYMENT',
    payload: result,
  })
}


async function orderList(){
  const token = await AsyncStorage.getItem('access_token')
  try {
    const res = await axios({
      method:'POST',
      url:'https://travelook.gabatch11.my.id/reservation/user?page=1',
      headers:{
        Authorization :`Bearer ${token}`  
      },
      data:{status : 'active'}
    })
    .then((a)=>{
      //console.log('try',a.data.data)
      return a.data.data
    })
    return res
  } catch (error) {
    console.log('order list',error.response.data)
  }
}

export function* userOrderList(){
  const result = yield call(orderList)
  //console.log('order list',result);
  yield put({
    type: 'ORDER_LIST',
    payload: result
  })
}

async function orderList2(){
  const token = await AsyncStorage.getItem('access_token')
  try {
    const res = await axios({
      method:'POST',
      url:'https://travelook.gabatch11.my.id/reservation/user?page=1',
      headers:{
        Authorization :`Bearer ${token}`  
      },
      data:{status : 'not active'}
    })
    .then((a)=>{
      //console.log('try',a.data.data)
      return a.data.data
    })
    return res
  } catch (error) {
    console.log('order List 2',error. response.data)
  }
}

export function* userOrderList2(){
  const result = yield call(orderList2)
  //console.log('order list',result);
  yield put({
    type: 'ORDER_LIST2',
    payload: result
  })
}


async function cancelation(action){
  console.log(action);
  try {
    const token = await AsyncStorage.getItem('access_token')
    const data = await axios({
                  method:'PUT',
                  url:`https://travelook.gabatch11.my.id/reservation/user?id_room=${action.idRoom}`,
                  headers:{Authorization : `Bearer ${token}`},
                  data: {id_reservation : action.idReservation}
                })
    Toast.show({
      text1: 'cancelation success',
    });
  return data.status
  } catch (error) {
    console.log('error cancelation', error)
  }
}

export function* cancelationRequest(action){
  const result = yield call(cancelation, action)
  console.log('cancelation done?', result);
}

async function reschedule(action){
  //console.log(action);
  try {
    const token = await AsyncStorage.getItem('access_token')
    const data = await axios({
      method : 'PUT',
      url: `https://travelook.gabatch11.my.id/reservation/order?id_room=${action.idRoom}`,
      headers: { Authorization : `Bearer ${token}`},
      data: action.data
    })
    Toast.show({
      text1: 'reschedule success',
    });
    return data
  } catch (error) {
    console.log('error reshedule', error);
  }
}

export function* rescheduleRequest(action){
//console.log(action);
  const result = yield call(reschedule, action)
  //console.log('reschedule success ?', result);
}