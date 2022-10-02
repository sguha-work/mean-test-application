import express from 'express';
import bodyParser from 'body-parser';// body parser is required to parse the json data which is passed to the API
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import https from 'https';

import swaggerDocument from './swagger.json' assert { type: 'json' };
import * as teachersRouter from './modules/teachers/routes/teacher_routes.js';
import * as consumerRouter from './modules/consumers/routes/consumer_routes.js';

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/teachers', teachersRouter.default);
app.use('/consumers', consumerRouter.default);
// getting pem and cert file for https setup
const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');
const server = https.createServer({key: key, cert: cert }, app);

server.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
});
