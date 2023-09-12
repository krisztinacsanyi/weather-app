import { configureStore } from '@reduxjs/toolkit'
import cityReducer from '../slices/citySlice'
import storage from 'redux-persist/lib/storage'
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage: storageSession,
}

const persistedReducer = persistReducer(persistConfig, cityReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)