
// 07/21/2020 01:18 pm - SSN - [20200721-1305] - [002] - M03-P10 - Server-side rendering of React component
// 07/22/2020 12:57 am - SSN - [20200722-0055] - [001] - M04-P05 - Dealing with an asynchronous operation on the server
// 07/22/2020 10:48 am - SSN - [20200722-0055] - [002] - M04-P05 - Dealing with an asynchronous operation on the server
// 07/22/2020 10:50 am - SSN - [20200722-0055] - [003] - M04-P05 - Dealing with an asynchronous operation on the server


import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../components/App';

import axios from 'axios';


import StateApi from '../state-api';

const serverRender = async () => {

    let initialContent = "NotSet-20200722-0129";
    let initialData = {};


    await axios.get(global.global_url + '/data').then(results => {

        const store = new StateApi(results.data, 'serverRender-002');

        initialContent = ReactDOMServer.renderToString(
            <App store={store} />
        );

        initialData = results.data;


    }).catch(error => {

        console.log('renderers/server.js ---------------- Error');

        console.error(error);

        initialContent = 'Error-20200722-0108';

    });


    return {
        initialContent,
        initialData
    };

};


export default serverRender;

