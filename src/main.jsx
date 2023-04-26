import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { StateProvider } from './StateProvider'
import reducer, { initialState } from './reducer'
import ScrollToTop from './components/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <ScrollToTop />
          <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
)
