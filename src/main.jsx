import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './assets/app.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
     <BrowserRouter>
       <App />
    </BrowserRouter>
  </Provider>
)
