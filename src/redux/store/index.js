import { configureStore, combineReducers } from '@reduxjs/toolkit'
import bookReducer from '../reducers/bookReducer'
import cartReducer from '../reducers/cartReducer'
import userReducer from '../reducers/userReducer'
// configureStore will set up the Redux Store for us!

// our redux store looked like this:
// const initialState = {
//   cart: {
//     content: []
//   },
//   user: {
//     name: ''
//   }
// }

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  // the names of the keys here, cart and user, are re-creating the previous
  // structure! so the cart subobject gets now a cart property in combineReducers,
  // and the user subobject gets a key in combineReducers called 'user'
  book: bookReducer,
})

const store = configureStore({
  reducer: bigReducer, // here there's place for just 1 value!
})

export default store

// now the store is ready! let's INJECT IT into our REACT APP!
// we do it in the src/index.js file
