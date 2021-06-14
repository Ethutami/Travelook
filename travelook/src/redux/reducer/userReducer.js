const initialState ={
    status: '',
    dataUser:{ },
}
const MyDataUser = (state = initialState, action) => {
const {type, payload} = action
// console.log('ini review',payload);
switch (type) {
    case 'ADD_DATA_USER':
        return {
            ...state,
            status: payload,
        };
    case 'DATA_USER':
        return {
            ...state,
            dataUser: payload,
        };
    default:
        return state;
}
}
export default MyDataUser;