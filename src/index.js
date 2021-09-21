import Providers from 'Providers'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'tailwindcss/tailwind.css'
import 'styles/index.css'
import './fonts/SFProText/SFProText.ttf'

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
)
