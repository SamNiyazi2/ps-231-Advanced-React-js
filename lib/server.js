

// 07/20/2020 12:35 pm - SSN - [20200720-0738] - [003] - M03 - Full-stack JavaScript with React.js



// const express = require('express');
// const config = require('./config.js');

import express from 'express';
import config from './config.js';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');


app.get ( '/' , (req,res) => { 

    res.render('index', {answer: 421 });

});


app.listen(config.port, function listenHandler() {

    console.info(`Runnnig on ${config.port}`);

});





