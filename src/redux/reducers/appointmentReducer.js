import { CREATE, DELETE, UPDATE } from '../types/appointmentType';

const initialState = {
    appointment : {}
}; 

const appointmentReducer = (state = initialState, action) => {
    
    switch(action.type){
        case CREATE:
            return {
                ...state, 
                appointment : action.payload
            }

        case DELETE:
            return {
                ...state, 
                appointment : action.payload
            }

        case UPDATE: 
            return {
                ...state, 
                appointment : action.payload
            }

        default:
            return state
    }
};


export default appointmentReducer;