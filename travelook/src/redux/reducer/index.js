import {combineReducers} from 'redux';
import userReducer from './userReducer'
import hotelReducer from './hotelReducer'
import etcReducer from './etcReducer'
import reservation from './reservationReduser'
import userReview from './reviewReducer'


export default combineReducers({
  userReducer,
  hotelReducer,
  etcReducer,
  reservation,
  userReview,

});
