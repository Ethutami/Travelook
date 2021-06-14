const initialState ={
    hotelRequest:[],
    checkin:{},
    details:{},
    stateHotel:[],
    requirementHotel:[],
    allHotel:[],
    loading:false,
    toPage:'',
    filter:[],
    review: []

}
const MyHotelRequest =(state = initialState, action)=>{
    const {type, payload} = action

    switch (type) {
        case 'HOTEL_BY_LOCATION':
            return {
                ...state,
                hotelRequest: payload,
              };
        case 'DETAILS_HOTEL':
            return {
                ...state,
                details: payload,
            };
        case 'STATE_HOTEL':
            return {
                ...state,
                stateHotel:payload,
                };
        case  'REQUIREMENT_HOTEL':
            return {
                ...state,
                requirementHotel: payload,
                };
        case  'ALL_HOTEL':
            return {
                ...state,
                allHotel: payload,
                };
        case 'HOTEL_FILTER':
            return {
                ...state,
                requirementHotel: payload,
                };
        case 'REVIEW_ROOM':
            return {
                ...state,
                review: payload,
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.status,
                toPage: action.page
                };
        default:
            return state;
    }

}
export default MyHotelRequest