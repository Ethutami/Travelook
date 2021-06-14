import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {call, put} from 'redux-saga/effects';


async function fetchLocation(location) {
    try {
      const response = await axios({
        method: 'GET',
        url: `https://travelook.gabatch11.my.id/room/loc?loc=${location}`,
      })
    //   console.log('hotel',response.data.data);
      return response.data.data
    } catch (error) {
        console.log('location not found')
    }
}

export function* requestHotelByLocation(action) {
    const result = yield call(fetchLocation, action.payload);
    // console.log('yours hotel request ', result);

    yield put({
        type: 'HOTEL_BY_LOCATION',
        payload: action.payload === null ? null : result,
    });
}

async function fetchRequestHotel(requirement) {
  try {
    const response = await axios({
      method: 'GET',
      url: `https://travelook.gabatch11.my.id/room/loc?loc=${requirement.destination}&guest=${requirement.guest}&checkin=${requirement.startDate}&checkout=${requirement.endDate}`,
    })
    // console.log('hotel',response.data);
    return response.data.data
  } catch (error) {
      console.log('eror request hotel',error);
  }
}

export function* requestHotel(action) {
  const result = yield call(fetchRequestHotel, action.payload);
  yield put({
      type: 'REQUIREMENT_HOTEL',
      payload: result,
  });
}

async function fetchRequesStatetHotel() {
  try {
    const response = await axios({
      method: 'GET',
      url: `https://travelook.gabatch11.my.id/room/state`,
    })
    return response.data.data
  } catch (error) {
      console.log('state not found')
  }
}

export function* requestStateHotel(){
  const result = yield call(fetchRequesStatetHotel);
  //console.log('state of hotel nih', result);
  yield put({
    type: 'STATE_HOTEL',
    payload: result,
  });
}

async function fetchRequesDetailsHotel(id) {
  try {
    const response = await axios({
      method: 'GET',
      url: `https://travelook.gabatch11.my.id/room/detail/${id}`,
    })
    // console.log('hotel',response);
    return response.data.data
  } catch (error) {
      console.log('details not found')
  }
}

export function* requestDetailsHotel(action){
  const result = yield call(fetchRequesDetailsHotel, action.payload);
  yield put({
    type: 'DETAILS_HOTEL',
    payload: result,
  });
}

async function fetchRequestAllHotel(){
  try {
    const response = await axios({
      method: 'GET',
      url: `https://travelook.gabatch11.my.id/room/`,
    })
    // console.log('hotel',response.data);
    return response.data.data
  } catch (error) {
      console.log(`hotels not found`)
  }
}

export function* requestAllHotel(){
  const result = yield call(fetchRequestAllHotel);
  //console.log('all hotel nih', result);
  yield put({
    type: 'ALL_HOTEL',
    payload: result,
  });
}

async function fetchRequestHotelByFilter(rating, price, state){
  const filterBy =  rating && price && state ? `rating=${rating}&price=${price}&state=${state}` :
                    rating && price ? `rating=${rating}&price=${price}` :
                    rating && state ? `rating=${rating}&state=${state}` :
                    price && state ? `price=${price}&state=${state}` :
                    rating ? `rating=${rating}`:
                    price ? `price=${price}` :
                    state && `state=${state}`
  try {
    const response = await axios({
      method: 'GET',
      url: 'https://travelook.gabatch11.my.id/room?' + filterBy
    })
    return response.data.data
  } catch (error) {
    console.log('something wrong with datafilter');
  }
}

export function* requestDataHotelByFilter(action){
  const result = yield call(fetchRequestHotelByFilter, action.payload)
  yield put({
    type : 'HOTEL_FILTER',
    payload: result,
  })
}

async function fetchReviewRoom(idRoom){
  try {
    const res = await axios({
      method:'GET',
      url: `https://travelook.gabatch11.my.id/review/room/${idRoom}`,
    })
    return res.data.data
  } catch (error) {
    console.log('review not found, Error :', error);
  }
}

export function* requestReviewRoom(action){
  //console.log(action);
  const result = yield call(fetchReviewRoom, action.payload)
  //console.log(result);
  yield put({
    type: 'REVIEW_ROOM',
    payload: result,
  })
}

export function* SetLoading(action){
  //console.log(action);
  yield put({
    type: 'SET_LOADING',
    status: action.status,
    page: action.page
  })
}


