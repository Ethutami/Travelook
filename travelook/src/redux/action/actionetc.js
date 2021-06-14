export function destination (data){
    //console.log(data);
    return{
      type :'DESTINATION',
      payload: data,
    }
   }
   
export function start_date(date){
 // console.log('start',date);
  return{
    type: 'SET_START_DATE',
    payload: date,
  }
}

export function end_date(date){
  //console.log('end',date);
  return{
    type: 'SET_END_DATE',
    payload: date,
  }
}

export function guest(guest){
  //console.log(guest);
  return{
    type: 'SET_GUEST',
    payload: guest,
  }
}

export function requirement(req){
  //console.log(req);
  return{
    type: 'SET_REQUIREMENT',
    payload: req,
  }
}

export function toHomePage(toHome){
  //console.log('home', toHome);
  return{
    type: 'REQUEST_TO_HOME',
    toHome

  }
}

export function next_progres_steps (num){
    //console.log('next step', num);
     return {
         type: 'REQUEST_NEXT_PROGRES_STEPS',
         payload: num,
       };
}

export function rescheduleDate(date){
  //console.log(date);
  return{
    type: 'SET_REQUIREMENT',
    payload: date,
  }
}

export function detailsForAllHotel(toHome){
  console.log(toHome);
  return{
    type : "REQUEST_DETAIL_FROM_ALL_HOTEL",
    payload:toHome
  }
}

export function testingdata(txt){
  return{
    type:'TES',
    payload: txt,
  }
}
