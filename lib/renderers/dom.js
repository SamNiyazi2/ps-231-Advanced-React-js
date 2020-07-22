

// 07/20/2020 04:20 pm - SSN - [20200720-1620] - [001] - M03 - Configuring a full-stack JavaScript Environment: Client side
// 07/21/2020 12:41 am - SSN - [20200721-0002] - [001] - M03-P06 - Matching data to React components
// 07/22/2020 10:53 am - SSN - [20200722-0055] - [004] - M04-P05 - Dealing with an asynchronous operation on the server


import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import StateApi from '../state-api';

const store = new StateApi(window.initialData, 'index.js');

ReactDOM.render(
    <App store={store} />, document.getElementById('root')
);