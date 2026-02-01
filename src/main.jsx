import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.css'
import App from './App.jsx'

// Initialize Bootstrap ScrollSpy for active nav highlighting
if (typeof document !== 'undefined' && bootstrap && bootstrap.ScrollSpy) {
  // offset matches navbar height
  new bootstrap.ScrollSpy(document.body, { target: '#mainNav', offset: 90 });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
