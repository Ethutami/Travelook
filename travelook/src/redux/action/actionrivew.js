export function set_user_review(idRoom, data){
    //console.log(idRoom, data);
    return{
        type: 'SET_USER_REVIEW',
        idRoom,
        data,
    }
}
export function get_all_user_review(){
    return{
        type: 'GET_ALL_USER_REVIEW',
    }
}

export function request_one_review(idReview){
    return{
      type: 'REQUEST_ONE_REVIEW',
      idReview,
    }
  }

export function delete_one_review(idReview){
    return{
        type:'DELETE_ONE_REVIEW',
        idReview,
    }
}