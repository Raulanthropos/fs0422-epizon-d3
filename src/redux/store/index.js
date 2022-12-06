import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import bookReducer from '../reducers/bookReducer'
import cartReducer from '../reducers/cartReducer'
import userReducer from '../reducers/userReducer'
// configureStore will set up the Redux Store for us!
import localStorage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { encryptTransform } from 'redux-persist-transform-encrypt'

// our redux store looked like this:
// const initialState = {
//   cart: {
//     content: []
//   },
//   user: {
//     name: ''
//   }
// }

const persistConfig = {
  key: 'root', // ???
  storage: localStorage, // the default engine
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
}

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  // the names of the keys here, cart and user, are re-creating the previous
  // structure! so the cart subobject gets now a cart property in combineReducers,
  // and the user subobject gets a key in combineReducers called 'user'
  book: bookReducer,
})

// this is creating a persisted version of bigReducer, using the configuration
// object declared above
const persistedReducer = persistReducer(persistConfig, bigReducer)

export const store = configureStore({
  reducer: persistedReducer, // here there's place for just 1 value!
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // this is for shutting down the serializable check
      // performed by Redux, and getting rid of the error in the console
    }),
})

// we also have to create a persisted version of our store
// this is commonly refered as "persistor"
export const persistor = persistStore(store)

// now the store is ready! let's INJECT IT into our REACT APP!
// we do it in the src/index.js file
