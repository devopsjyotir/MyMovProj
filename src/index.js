import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
// import './styles/index.css'
import App from './App'
import { ReactDOM } from 'react-dom/client'
import { createStore } from "redux"
import allReducers from './reducers'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('root'))

const store = createStore(
  allReducers,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)