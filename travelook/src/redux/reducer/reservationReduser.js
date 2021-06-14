import photo from '../../asset/image/image.png'
const initialRoot = {
reservation :[],
order:[],
orderList:[],
orderList2:[],
payment:{},
}

const myReservastion = (state = initialRoot, action) => {
    const {type, payload} = action
    switch (type) {
        case 'SET_RESERVASI':
            return{
                ...state,
                reservation: payload
            }
        case 'ORDER_PREVIEW':
            return{
                ...state,
                order: payload
            }
        case 'PAYMENT':
            return{
                ...state,
                payment: payload
            }
        case 'ORDER_LIST':
            return{
                ...state,
                orderList: payload
            }
        case 'ORDER_LIST2':
            return{
                ...state,
                orderList2: payload
            }
        default:
            return state;
    }
}
export default myReservastion