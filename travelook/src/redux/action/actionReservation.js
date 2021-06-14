export function request_reservation (data, idRoom){
   // console.log(data, idRoom);
    return{
        type :'DATA_RESERVASI',
        data,
        idRoom,
    }
}

export function request_preview_order(id){
    //console.log(id);
    return{
        type: 'DATA_ORDER',
        payload: id,
    }
}

export function upload_payment(id, image){
   // console.log(id, image);
    return{
        type: 'PAYMENT_RECEIPT',
        id,
        image,
    }
}

export function request_order_list(){
    return{
        type: 'DATA_ORDER_LIST',
    }
}

export function request_cancelation(idRoom,idReservation){
    return{
        type: 'CANCELATION',
        idRoom,
        idReservation,
    }
}

export function request_Reschedule(data){
    return{
        type: 'RESCHEDULE',
        idRoom : data.idRoom,
        data :{
            id_reservation : data.id_reservation,
            start : data.start,
            end : data.end,
        }
    }
}
