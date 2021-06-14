const initialState ={
    allReview: [],
    oneReview: [],
}

const userReview = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case 'USER_REVIEW':
            return {
                ...state,
                allReview: payload,
            };
        case 'ONE_REVIEW':
            return {
                ...state,
                oneReview: payload,
            };
        default:
            return state;
    }
}
export default userReview 