import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { call, put } from "@redux-saga/core/effects";
import Toast from 'react-native-toast-message';

async function userReview(action){
    const token = await AsyncStorage.getItem('access_token')
    try {
        const data = await axios.post(
            `https://travelook.gabatch11.my.id/review/room/${action.idRoom}`,
            action.data, 
            {headers : {
            Authorization : `Bearer ${token}`
            },}
        )
        //console.log(data);
        Toast.show({
            text1: 'review success',
          });
        return data.data
    } catch (error) {
        console.log('eror review', error.response.data);
    }
}

export function* setUserReview(action){
    //console.log(1,action);
    const result = yield call(userReview, action)
    console.log('your review had', result?.message);
    yield put({
        type: 'USER_REVIEW',
        payload : result
    })
    
 
}
async function allUserReview(){
    try {
        const token = await AsyncStorage.getItem('access_token')
        const id = await AsyncStorage.getItem('user_id')
        const res = await axios({
            method: 'GET',
            url: `https://travelook.gabatch11.my.id/review/user/${id}`,
            headers:{Authorization : `bearer ${token}`}
        })
        console.log('your review had',res?.data?.message);

        return res.data.data
    } catch (error) {
        console.log('error when trying to show all user review',error.response.data);
    }
}

export function* getAllUserReview(){
    const result = yield call(allUserReview)
    //console.log(result);
    yield put({
        type: 'USER_REVIEW',
        payload : result ? result : undefined
    })
    
 
}

async function oneReview(idReview){
    try {
      const token = await AsyncStorage.getItem('access_token')
      const id = await AsyncStorage.getItem('user_id')
      const data = await axios({
        method: 'GET',
        url : `https://travelook.gabatch11.my.id/review?user_id=${id}&review_id=${idReview}`,
        headers:{ Authorization : `Bearer ${token}`}
      })
      return data.data
    } catch (error) {
      console.log('error when get one review,', error?.response?.data);
    }
  }
  

export function* requestOneReview(action){
    //console.log(action);
    const result = yield call(oneReview, action.idReview)
    console.log('get on user review ?',result?.message);
    yield put({
      type : 'ONE_REVIEW',
      payload: result.data,
    })
  }


export function* deleteOneReview (action){
    AsyncStorage.getItem('access_token')
    .then((token)=>{
        AsyncStorage.getItem('user_id')
        .then((id)=>{
            axios({
                method:'delete',
                url: `https://travelook.gabatch11.my.id/review/user/${id}?review_id=${action.idReview}`,
                headers:{Authorization : `bearer ${token}`}
            })
            .then((res)=>{
                console.log('delete review ?',res.data.message)
                Toast.show({
                    text1: 'Success Delete',
                  });
            })
        })
    })
}