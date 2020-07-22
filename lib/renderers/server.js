
// 07/21/2020 01:18 pm - SSN - [20200721-1305] - [002] - M03-P10 - Server-side rendering of React component

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../components/App';


const fetch = require('node-fetch');


const getdata = async () => {

    const response = await fetch(global.global_url + '/testdata2.json');
    let data = await response.json();

    return data.data;
};


const serverRender = async ( ) => {

    let data = await getdata();

    let tempString = ReactDOMServer.renderToString(
        <App datadata={data} callSource='serverRender' />
    );
  
    return tempString;

};


export default serverRender;

