import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux';
import {store} from './redux/store.js';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
   </React.StrictMode>,
  </Provider>
)
