import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'

import { Provider } from 'react-redux'
// Provider is a wrapper taken from the bindings library of Redux for React
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
    {/* so inside here we have also BookStore, BookDetail, CartIndicator */}
  </Provider>
)
