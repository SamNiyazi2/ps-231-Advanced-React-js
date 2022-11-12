

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



app.get('/data', (req, res) => {

        
    console.log(' ');
    console.log(' ');
    console.log('100 - server.js: url [', req.url, ']');
    console.log(' ');
    console.log(' ');

    res.send(data);
});


app.get('/', async (req, res) => {
    
    
    console.log(' ');
    console.log(' ');
    console.log('102 -  server.js: url [', req.url, ']');
    console.log(' ');
    console.log(' ');


    global.global_url = req.protocol + '://' + req.get('host'); // + req.originalUrl;

    await serverRender().then((response) => {

        //         res.render('index', { ...response  });
        res.render('index', { initialContent: response.initialContent, initialData: response.initialData });

    });

});



app.get('*', async (req, res) => {

    
    console.log(' ');
    console.log(' ');
    console.log('103-  server.js: url [', req.url, ']');
    console.log('103-  server.js: url [', req.url.substring(1), ']');
    console.log(' ');
    console.log(' ');
 
    
    // res.render("test_context");
    res.render(req.url.substring(1));

});






app.listen(config.port, () => {

    console.info(`Runnnig on ${config.port}`);

});

