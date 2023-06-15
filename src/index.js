import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

/*
  TO DO:
  -Sign up functionality
  -Styling ***IN PROGRESS***
  -Form and routes for updating profile
  -Webpack
*/