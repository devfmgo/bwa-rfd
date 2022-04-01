import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './assets/css/app.css';

// root
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<App />);
