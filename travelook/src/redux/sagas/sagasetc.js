import {call, put} from 'redux-saga/effects';


export function* saveDestination(action){
  return yield put({
    type: 'MY_DESTINATION',
    payload: action.payload,
  })
}

export function* nextProgresSteps(action){
   // console.log(action.payload);
    return yield put({
      type: 'PROGRES_STEPS',
      payload: action.payload,
    })
}

export function* saveStartDate(action){
  // console.log(action);
  return yield put({
    type:'SAVE_START_DATE',
    payload: action.payload
  })
}

export function* saveEndDate(action){
  // console.log(action);
  return yield put({
    type:'SAVE_END_DATE',
    payload: action.payload
  })
}

export function* saveGuest(action){
  return yield put({
    type:'SAVE_GUEST',
    payload: action.payload
  })
}

export function* Requirement(action){
  return yield put({
    type:'SAVE_REQUIREMENT',
    payload: action.payload
  })
}

export function* toHomePageSagas(action){
  //console.log('home',action);
  return yield put({
    type: 'DETAIL_FROM_ALL_HOTEL',
    payload: action.toHome
  })
}

export function* tryPersist(action){
yield put({
  type:'TRY',
  payload:action.payload
})
}