import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {call, put} from 'redux-saga/effects';
import Toast from 'react-native-toast-message';

async function postDataRegister(data) {
  try {
    const response = await axios({
      method: 'POST',
    url: `https://travelook.gabatch11.my.id/auth/signup`,
    data : data
    })
    console.log('ini response', response.data);
    await AsyncStorage.setItem('access_token', response.data.token)
    return response.status
  } catch (error) {
  }
}

export function* requestDataRegister(action) {
const result = yield call(postDataRegister, action.payload);
console.log('ini data regist', result);
yield put({
    type: 'ADD_DATA_USER',
    payload: result,
});

}

async function getDataUser(){
  const token = await AsyncStorage.getItem('access_token')
  try {
    const res = await axios({
      method: 'GET',
      url: 'https://travelook.gabatch11.my.id/auth/',
      headers:{Authorization : 'Bearer ' + token}
    })
    //console.log(res);
    AsyncStorage.setItem('user_id', res.data.data.id)
   
    return res.data.data
  } catch (error) {
    
  }
}

export function* requestDataUser(){
  const result = yield call(getDataUser)
  //console.log(result);
  
  yield put({
    type:'DATA_USER',
    payload: result,
  })
}


