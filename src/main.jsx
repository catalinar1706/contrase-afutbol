import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Contrasena from './Contrasena'
import Codigo from './Codigo'
import ChangePassword from './components/ChangePassword';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contrasena/>
    <Codigo/>
    
    <ChangePassword/>

  </React.StrictMode>,
)
