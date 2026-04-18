import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/fonts.css'
import './styles/index.css'

import AppCasoPractico from './AppCasoPractico'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppCasoPractico/>
  </StrictMode>,
)
