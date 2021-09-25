

import express from 'express';
import DefaultData from './default.js';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './connection/db.js';
import Route from './routes/route.js';


const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json({ extended : true}));
app.use('/', Route);


const PORT = 8000;

Connection();

app.listen(PORT, () =>
    console.log(`server is at ${PORT}`)
);

DefaultData();

