import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '/Users/mihikarajvanshi/Desktop/cs projects/yash_projects/flask_app/chatgpt-form/src/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
