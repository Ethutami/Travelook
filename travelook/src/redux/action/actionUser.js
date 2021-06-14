export function request_data_register(dataRegist) {
    //console.log('helo dapat nih data register', dataRegist);
    return {
      type: 'REQUEST_DATA_REGISTER',
      payload: dataRegist,
    };
  }
export function request_data_login(dataLogin){
  //console.log('helo dapat nih data register', dataLogin);
  return{
    type: 'REQUEST_DATA_LOGIN',
    payload: dataLogin,
  }
}

export function request_data_user(){
  return{
    type:'REQUEST_DATA_USER', 
  }
}


  