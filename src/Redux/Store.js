//LIBRARIES
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
//ASSETS
import rootSaga from './Sagas';       // List of Sagas
import rootReducer from './Reducers'  // List of Reducers
import { sagaMonitor } from './Config';


//persistCombineReducers is used to combining the list of Reducers
const Reducers = persistCombineReducers({
    key: 'root',
    storage,
  }, rootReducer);

//createSagaMiddleware creates Redux Middleware and connects saga to the redux 
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [];
const enhancers = [];
middlewares.push(sagaMiddleware,logger);
enhancers.push(applyMiddleware(...middlewares));

export const store = createStore(
    Reducers,
    compose(...enhancers),
)

//persistStore contains all the data from store
export const persistor = persistStore(store);      
sagaMiddleware.run(rootSaga);