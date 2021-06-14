import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducer from './reducer'
import rootSagas from './sagas'

const persistConfig = {
    key: 'root',
    storage : AsyncStorage,
    whitelist : [""]
  }

const persistedReducer = persistReducer(persistConfig, reducer)
const sagaMiddleware = createSagaMiddleware()
const store = createStore(persistedReducer,applyMiddleware(sagaMiddleware))
export const persistor = persistStore(store)


// then run the saga
sagaMiddleware.run(rootSagas)
export default store;
