// import { combineReducers, createStore } from '@reduxjs/toolkit';
import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from './reducers/contactsReducer.js';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
