import { React, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/main.scss'
import './assets/scss/init/_vars.scss'
import App from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
