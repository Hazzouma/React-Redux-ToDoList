import {combineReducers} from 'redux';
import todosReducer from './todosReducer';

const allReducers = combineReducers({todosReducer});
export default allReducers;