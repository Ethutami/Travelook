import {call, put, takeLatest} from 'redux-saga/effects';
import { 
  nextProgresSteps, 
  Requirement, 
  saveDestination, 
  saveEndDate, 
  saveGuest, 
  saveStartDate, 
  toHomePageSagas,
  tryPersist
} from './sagasetc';
import { 
  requestAllHotel, 
  requestDataHotelByFilter, 
  requestDetailsHotel, 
  requestHotel, 
  requestHotelByLocation, 
  requestReviewRoom, 
  requestStateHotel,
  SetLoading, 
} from './sagasHotel';
import { 
  cancelationRequest, 
  rescheduleRequest, 
  uploadPayment, 
  userOrderList, 
  userOrderList2, 
  userOrderPreview, 
  userResevation 
} from './sagasReservation';
import {deleteOneReview, getAllUserReview, requestOneReview, setUserReview, } from './sagasReview';
import { 
  requestDataLogin, 
  requestDataRegister, 
  requestDataUser,
} from './sagaUser';

function* rootSagas() {
    yield takeLatest('LOADING', SetLoading)

    yield takeLatest('REQUEST_DATA_REGISTER', requestDataRegister)
    //yield takeLatest('REQUEST_DATA_LOGIN', requestDataLogin)
    yield takeLatest('REQUEST_DATA_USER', requestDataUser)

    yield takeLatest('REQUEST_HOTEL_BY_LOCATION', requestHotelByLocation)
    yield takeLatest('SET_REQUIREMENT_HOTEL', requestHotel)
    yield takeLatest('REQUEST_STATE_HOTEL', requestStateHotel)
    yield takeLatest('REQUEST_DETAILS_HOTEL', requestDetailsHotel)
    yield takeLatest('REQUEST_ALL_HOTEL', requestAllHotel)
    yield takeLatest('REQUEST_FILTER_HOTEL', requestDataHotelByFilter)
    yield takeLatest('REVIEW_ITEM', requestReviewRoom)

    yield takeLatest('DATA_RESERVASI', userResevation)
    yield takeLatest('DATA_ORDER', userOrderPreview)
    yield takeLatest('PAYMENT_RECEIPT', uploadPayment)
    yield takeLatest('DATA_ORDER_LIST', userOrderList)
    yield takeLatest('DATA_ORDER_LIST', userOrderList2)
    yield takeLatest('CANCELATION', cancelationRequest)
    yield takeLatest('RESCHEDULE', rescheduleRequest)

    yield takeLatest('SET_USER_REVIEW', setUserReview)
    yield takeLatest('GET_ALL_USER_REVIEW', getAllUserReview)
    yield takeLatest('REQUEST_ONE_REVIEW', requestOneReview)
    yield takeLatest('DELETE_ONE_REVIEW', deleteOneReview)
  
    yield takeLatest('DESTINATION', saveDestination)
    yield takeLatest('REQUEST_NEXT_PROGRES_STEPS', nextProgresSteps)
    yield takeLatest('SET_START_DATE', saveStartDate)
    yield takeLatest('SET_END_DATE', saveEndDate)
    yield takeLatest('SET_GUEST', saveGuest)
    yield takeLatest('SET_REQUIREMENT', Requirement)
    yield takeLatest('REQUEST_TO_HOME', toHomePageSagas)
    yield takeLatest('TES', tryPersist)

  
  }
  export default rootSagas;