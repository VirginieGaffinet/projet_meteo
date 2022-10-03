import React from 'react';
import ReactDOM from 'react-dom/client';
// import styles
import './styles/reset.css';
import './styles/index.scss';
import './styles/vars.scss';
// import component
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
