import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DefaultLayout from './layout';

ReactDOM.render(
  <React.StrictMode>
    <DefaultLayout>
      <App />
    </DefaultLayout>
  </React.StrictMode>,
  document.getElementById('root')
);