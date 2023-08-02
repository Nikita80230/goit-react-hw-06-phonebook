// import { combineReducers, createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// const enhancer = devToolsEnhancer();
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

import { contactListReducer } from './reducers/contactsReducer.js';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactListReducer,
  },
});
