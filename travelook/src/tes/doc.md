<!-- // useEffect(() => {
    //   dispatch(details_hotel())
    // }, [])

    // useEffect(() => {
    // // console.log(loading);
    // }, [loading])

    // if(loading === true ){
    //     return(
    //         <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    //             <Text style={{fontSize:40}}>loading</Text>
    //         </View>

    //     )
    // } -->


    export function* detailsHotel(action){
  try {
    yield put({
      type:'SET_LOADING',
      payload: true
    })
    const result = yield call(fetchDetailsHotel, action.payload)
    //console.log(result);
    yield put({
        type: 'DETAILS',
        payload: result,
      })
     yield put({
          typeL:'SET_LOADING',
          payload:false,
        })
  } catch (error) {
    
  }
}

 fetch(`https://travelook.gabatch11.my.id/reservation/order/?order_id=Travelook-162167230483040`, {
      method: 'GET',
      headers: {
        Authorization : 'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM2MmIwMTQwLWIyNWEtMTFlYi1hNWY5LWUxNzY4NGU2NTg3YyIsImlhdCI6MTYyMTY2OTQ4M30.NN4WN5ODalp2RC315H9rHG6eFWXCwZhfkORxPrJ66vI',
      },
    })
    .then((res)=>{
      console.log('res',res);
      //return res.data
    })
    .catch((err)=>{
      console.log(err);
    })

    axios({
      method : 'GET',
      url :'`https://travelook.gabatch11.my.id/reservation/order/?order_id=Travelook-162167230483040`',
      headers:{
        Authorization : 'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM2MmIwMTQwLWIyNWEtMTFlYi1hNWY5LWUxNzY4NGU2NTg3YyIsImlhdCI6MTYyMTY2OTQ4M30.NN4WN5ODalp2RC315H9rHG6eFWXCwZhfkORxPrJ66vI',
      },
    })
    .then(({res})=>{
      console.log(res);
      //return res.data
    })
    .catch((err)=>{
      console.log(err);
    })

    <CountDown
      until={24 * 60 * 60}
      timeToShow={['H', 'M', 'S']}
      timeLabels={{h: null, m: null, s: null}}
      digitStyle={{backgroundColor: '#ffffff'}}
      digitTxtStyle={{color: '#000000'}}
      showSeparator
      size={18}
      onFinish={() => alert('finished')}
      onPress={() => alert('hello')}
  />


  //reviw
   {
                User:{
                    id :1,
                    first_name: 'nan',
                    last_name :'yoo',
                    image : null,
                },
                updatedAt: '2021-05-19',
                rating: 4,
                comment: 'I can’t believe the amount of detail of the building, nicely decorated!',
            },
            {
                User:{
                    id :2,
                    first_name: 'yala',
                    last_name :'meeha',
                    image : null,
                },
                updatedAt: '2021-05-19',
                rating: 4,
                comment: 'I can’t believe the amount of detail of the building, nicely decorated!',
            },
            {
                User:{
                    id :1,
                    first_name: 'toni',
                    last_name :'yodino',
                    image : null,
                },
                updatedAt: '2021-05-19',
                rating: 4,
                comment: 'I can’t believe the amount of detail of the building, nicely decorated!',
            },
            {
                User:{
                    id :1,
                    first_name: 'sua',
                    last_name :'ga',
                    image : null,
                },
                updatedAt: '2021-05-19',
                rating: 4,
                comment: 'I can’t believe the amount of detail of the building, nicely decorated!',
            },
        

        account :
        <View >
                            {label === 'Account'
                                ? (<View style={{flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
                                        {/* <Save_icon name='check' size={30} color="#2BB16A"/>  */}
                                        <Text style={{fontSize:14, color:'#2BB16A'}}>Save</Text>
                                    </View> )
                                : <Text></Text>
                            }
                        </View>


//login api
async function postDataLogin(data){
  try {
    const res = await axios({
      method: 'POST',
      url: `https://travelook.gabatch11.my.id/auth/signin`,
      data:data,
    })
    console.log(res.data.token);
    await AsyncStorage.setItem('access_token', res.data.token)
    return res.status
  } catch (error) {
    console.log('login eror',error);
  }
}

export function* requestDataLogin(action){
  const result = yield call(postDataLogin, action.payload)
  console.log(result);
  yield put({
    type: 'ADD_DATA_USER',
    payload: result,
  })
}

//regist
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

reschedule button
//date={checkin.startDay <= checkout.endDay ? {checkin, checkout} : undefined}
                                // closeModal={()=>{
                                //     closeModal()
                                //     // setConfirm(true)
                                // }}

// try {
        //   await GoogleSignin.hasPlayServices();
        //   const userInfo = await GoogleSignin.signIn();
        // //   this.setState({ userInfo });
        // // const token = await GoogleSignin.getTokens()
        // console.log(userInfo);
        // // console.log(token);
        // } catch (error) {
        //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //     // user cancelled the login flow
        //   } else if (error.code === statusCodes.IN_PROGRESS) {
        //     // operation (e.g. sign in) is in progress already
        //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //     // play services not available or outdated
        //   } else {
        //     // some other error happened
        //   }
        //   console.log('hoogle error',error);
        // }

        
        // Sign-in the user with the credential
        // const tes= await auth().signInWithCredential(googleCredential);
        // console.log('6',tes);