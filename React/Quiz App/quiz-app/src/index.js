import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import QuizApp from './QuizMain';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizApp></QuizApp>
  </React.StrictMode>
);


reportWebVitals();
