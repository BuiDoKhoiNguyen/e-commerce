import thunk from 'redux-thunk';
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import { authReducer } from './Auth/Reducer';

const rootReducers = combineReducers({
    auth:authReducer
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));