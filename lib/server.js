

// 07/20/2020 12:35 pm - SSN - [20200720-0738] - [003] - M03 - Full-stack JavaScript with React.js
// 07/21/2020 10:10 pm - SSN - [20200721-2209] - [001] - M04-P04 - Dealing with asynchronous API on the client
// 07/21/2020 10:12 pm - SSN - [20200721-2209] - [002] - M04-P04 - Dealing with asynchronous API on the client


import express from 'express';
import config from './config.js';
import serverRender from './renderers/server';
import { data } from '../data/testdata2.json';


const app = express();


app.use(express.static('public'));
app.use(express.static('data'));

app.set('view engine', 'ejs');

global.global_url = 'notset-20200721-1701';


app.get('/', async (req, res) => {

    global.global_url = req.protocol + '://' + req.get('host'); // + req.originalUrl;

    await serverRender().then((response) => {

        //         res.render('index', { ...response  });
        res.render('index', { initialContent: response.initialContent, initialData: response.initialData });

    });

});


app.get('/data', (req, res) => {

    res.send(data);

});



app.listen(config.port, () => {

    console.info(`Runnnig on ${config.port}`);

});

