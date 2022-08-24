import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './components/RouteSwitch';
import './index.css';
import App from './App';
var firebase = require('firebase');
var firebaseui = require('firebaseui');
var ui = new firebaseui.auth.AuthUI(firebase.auth());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
