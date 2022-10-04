import { configureStore } from '@reduxjs/toolkit'

import { applyMiddleware, compose } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from '../reducers/reducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// on combine devTools avec les middlewares
// const enhancers = composeEnhancers(
//   applyMiddleware(
//   ),
// );

const store = configureStore({
  reducer : {
    reducer : rootReducer
  }
  // enhancers,
  // devToolsEnhancer(),
});

export default store;
