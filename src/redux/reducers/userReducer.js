import { LOGIN, LOGOUT, REGISTER } from '../types/userType';

const initialState = {
    user : {}, 
    validation: {}

};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state, 
                user : action.payload.user,
                validation : action.payload.validation
            }

        case LOGOUT:
            return initialState;

        case REGISTER: 
            return {
                ...state, 
                user : action.payload
            }

        default:
            return state
    }
};


export default userReducer;