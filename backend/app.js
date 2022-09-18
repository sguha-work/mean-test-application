import express from 'express';
import bodyParser from 'body-parser';// body parser is required to parse the json data which is passed to the API
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';

import swaggerDocument from './swagger.json' assert { type: 'json' };
import * as teachersRouter from './routers/teacher_routes.js';

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

app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
});
