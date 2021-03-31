import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {rootReducer} from './redux/rootReducer'

const saveState = (state) => {
  try {
       const serialisedState = JSON.stringify(state);
      window.localStorage.setItem('app_state', serialisedState);
  } catch (err) {

  }
};

const loadState = () => {
  try {
      const serialisedState = window.localStorage.getItem('app_state');
      if (!serialisedState) return undefined;
      return JSON.parse(serialisedState);
  } catch (err) {
      return undefined;
  }
};

const oldState = loadState();
const store = createStore(rootReducer,oldState,
   compose(
 applyMiddleware(thunk)
 
 //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
) 
)

store.subscribe(() => {
  saveState(store.getState());
});

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(app,document.getElementById('root'));

reportWebVitals();
