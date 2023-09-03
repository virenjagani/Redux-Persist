// import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Reducer } from './reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

const presistConfig = {
    key:'persist-key',
    storage
}

const rootReducer = combineReducers({
    user:Reducer
})

const persistReduce = persistReducer(presistConfig,rootReducer)

const store = configureStore({ reducer: persistReduce, middleware: [thunk, logger] });


export const persistor = persistStore(store)

export default store; 