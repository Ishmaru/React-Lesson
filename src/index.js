import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// My notes:
// Boilerplate generated by create-react-app. This is the master render function and the entry point of your react application.
// Note <App/> is calling the App component. you would name it to whatever is your top most parent component.
// document.getElementById('root')) is binding the whole application to a html element with an id of 'root'.
ReactDOM.render(<App />, document.getElementById('root'));



// Notes generated by create-react-app:
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();