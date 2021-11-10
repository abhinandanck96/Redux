import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store/storeConfig';
import { Provider } from 'react-redux';
import TodoList from'./ReduxExample';

export const reduxStore = configureStore(window.REDUX_INITIAL_DATA)



ReactDOM.render(
  <Provider store={reduxStore}>
  <React.StrictMode>
    <TodoList/>
    <App/>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
