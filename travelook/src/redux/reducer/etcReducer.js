const initialState ={
    steps:1,
    destination:'',
    startDate:{},
    endDate: {},
    guest:1,
    requirement:{},
    renderStar :[],
    toHome:false,
}

const Etc =(state = initialState, action)=>{
    const {type, payload} = action

    switch (type) {
        case 'PROGRES_STEPS':
           return{
               ...state,
               steps : payload,
           };
        case 'MY_DESTINATION':
            return {
                ...state,
                destination: payload,
            };
        case 'SAVE_START_DATE':
            return {
                ...state,
                startDate: payload,
            };
        case 'SAVE_END_DATE':
            return {
                ...state,
                endDate: payload,
            };
        case 'SAVE_GUEST':
            return {
                ...state,
                guest: payload,
            };
        case 'SAVE_REQUIREMENT':
            return {
                ...state,
                requirement: payload,
            };
        case 'DETAIL_FROM_ALL_HOTEL':
            return {
                ...state,
                toHome: payload,
            };
        case 'TRY':
            return {
                ...state,
                tryPersist: payload,
            };
        default:
        return state;
   }

}
export default Etc