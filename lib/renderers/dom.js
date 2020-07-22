

// 07/20/2020 04:20 pm - SSN - [20200720-1620] - [001] - M03 - Configuring a full-stack JavaScript Environment: Client side


import React from 'react';
import ReactDOM from 'react-dom';


// 07/21/2020 12:41 am - SSN - [20200721-0002] - [001] - M03-P06 - Matching data to React components

import App from '../components/App';


const getdata = async () => {

    const response = await fetch('/testdata2.json');
    let data = await response.json();
    return data.data;
};


getdata().then((data) => {

    ReactDOM.render(
        <App datadata={data} callSource='index.js' />, document.getElementById('root')
    );

});

