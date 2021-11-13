import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { searchStudents } from './reducers';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import './components/bootstrap.min.css'


const logger = createLogger()
const store = createStore(searchStudents, applyMiddleware(logger))  // There is only one reducer, therefore no need to use root reducer

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
