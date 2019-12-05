import {combineReducers} from 'redux';
import commonReducer from './common';

let rootReducer = combineReducers({
    common:commonReducer
})
export default rootReducer;