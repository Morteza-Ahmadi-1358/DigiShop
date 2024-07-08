import { combineReducers, configureStore } from '@reduxjs/toolkit'
import localStorage from 'redux-persist/lib/storage'
import sessionStorage from 'redux-persist/lib/storage/session'
import shoppingCartSlice from './features/shoppingCart/shoppingCartSlice'
import usersSlice from './features/users/usersSlice'
import { persistReducer, persistStore } from 'redux-persist'

const localStorageConfiguration = {
    key: 'globalStorage',
    storage: localStorage,
    blackList: ['user']
}
const sessionStorageConfiguration = {
    key: 'globalStorage',
    storage: sessionStorage
}
const rootReducer = combineReducers({
    shoppingCart: shoppingCartSlice,
    user: persistReducer(sessionStorageConfiguration, usersSlice)
})
const persistableReducer = persistReducer(localStorageConfiguration, rootReducer)

export const ReduxPersistStore = configureStore({reducer: persistableReducer})
export const persistor = persistStore(ReduxPersistStore)