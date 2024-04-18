import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* 
Создаем корневой компонент React с помощью функции createRoot из ReactDOM.
Этот метод создает новый корневой контейнер, который является точкой входа в
React-приложение.
Находим DOM-элемент с id 'root', который является контейнером, в который хотим 
встроить React-приложение.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // строгий режим React, помогает выявлять и предотвращать некоторые типичные
  // проблемы в приложении во время разработки
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
