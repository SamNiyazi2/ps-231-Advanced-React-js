

// 07/20/2020 12:35 pm - SSN - [20200720-0738] - [003] - M03 - Full-stack JavaScript with React.js


import express from 'express';
import config from './config.js';

import serverRender from './renderers/server';

const app = express();


app.use(express.static('public'));
app.use(express.static('data'));

app.set('view engine', 'ejs');

global.global_url = 'notset-20200721-1701';


app.get('/', (req, res) => {

    global.global_url = req.protocol + '://' + req.get('host'); // + req.originalUrl;

    serverRender(res).then((initialContent) => {

        res.render('index', { initialContent });

    });

});


app.listen(config.port, () => {

    console.info(`Runnnig on ${config.port}`);

});





