import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
      
// import './pages/style.css';              // ✅ Importar el CSS global

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);