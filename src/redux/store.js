import {applyMiddleware, createStore} from 'redux';
import reducer from './reducers/rootReducer';
import { save, load } from 'redux-localstorage-simple';

const createStoreWithMiddleware = applyMiddleware (
    save({ state: ['dataUser'] })
)(createStore);

const store = createStoreWithMiddleware(
    reducer, 
    load ({
        preloadState : {
            dataUser : ''
        }, 
        states: ['dataUser']
    })

    // + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    //     trace: true,
    // })
);


export default store;  