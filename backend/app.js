import express from 'express';
import bodyParser from 'body-parser';// body parser is required to parse the json data which is passed to the API
import dotenv from 'dotenv';
import * as teachersRouter from './routers/teacher_routes.js';

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use('/teachers', teachersRouter.default);

app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
});
