import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import {thunk} from 'redux-thunk';
import reducer from './reducers';
const persistConfig = {
    key: 'dashboard',
    storage
}
const persistedReducer = persistReducer(persistConfig, reducer);
const middlewares = [];

export const store = configureStore({
    reducer: persistedReducer,
    devTools: import.meta.env.DEV,
    middleware: (middleware) => middleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(thunk).concat(middlewares)
})

export const persistor = persistStore(store);