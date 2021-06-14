export function request_Search_hotel_by_location (location){
 //console.log('search for location', location);
  return {
      type: 'REQUEST_HOTEL_BY_LOCATION',
      payload: location,
    };
}

export function request_hotel (requirement){
  //console.log('my request', requirement);
  return{
    type :'SET_REQUIREMENT_HOTEL',
    payload: requirement,
  }
}

export function request_State_hotel (){
  return{
    type :'REQUEST_STATE_HOTEL',
  }
}

export function request_details_hotel (id){
 //console.log('id',id);
  return{
    type :'REQUEST_DETAILS_HOTEL',
    payload: id
  }
}

export function request_all_hotel(){
  return{
    type: 'REQUEST_ALL_HOTEL'
  }
}

export function filtering_Hotel(dataFilter){
  //console.log(dataFilter);
  return{
    type: 'REQUEST_FILTER_HOTEL',
    payload: dataFilter
  }
}

export function get_review_room(idRomm){
  //console.log(idRomm);
  return{
    type: 'REVIEW_ITEM',
    payload: idRomm,
  }
}

export function loading_page(loading, pageName){
  //console.log(loading, pageName);
  return{
    type:'LOADING',
    status: loading,
    page: pageName,
  }

}