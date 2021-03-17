import {combineReducers} from 'redux';
import userReducer from './userReducer';
import appointmentReducer from './appointmentReducer';

const rootReducer = combineReducers({
    userReducer, 
    appointmentReducer
});

export default rootReducer;