
// 07/21/2020 01:18 pm - SSN - [20200721-1305] - [002] - M03-P10 - Server-side rendering of React component

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../components/App';

// 07/22/2020 12:57 am - SSN - [20200722-0055] - [001] - M04-P05 - Dealing with an asynchronous operation on the server
import axios from 'axios';



const serverRender = async () => {

    let returnString = "NotSet-20200722-0129";

    await axios.get(global.global_url + '/data').then(results => {


        returnString = ReactDOMServer.renderToString(
            <App datadata={results.data} callSource='serverRender' />
        );


    }).catch(error => {
        console.log('server.js ---------------- Error');
        console.log('server.js ---------------- Error');
        console.log('server.js ---------------- Error');
        console.log('server.js ---------------- Error');

        console.log(error);

        return 'Error-20200722-0108';

    });

    return returnString;



};


export default serverRender;

