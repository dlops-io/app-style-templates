import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './template1/app/App';
import App2 from './template2/app/App';
//import App3 from './template3/app/App';

console.log(window.location)
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params)
let template = '1';
if (params["template"]) {
  template = params["template"]
}

ReactDOM.render(
  <React.StrictMode>
    {template == '1' && <App1 />}
    {template == '2' && <App2 />}
  </React.StrictMode>,
  document.getElementById('root')
);

