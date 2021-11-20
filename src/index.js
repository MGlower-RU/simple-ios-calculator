import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import Context from './components/Context';

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);