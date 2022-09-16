const express = require('express');
const bodyParser = require('body-parser');// body parser is required to parse the json data which is passed to the API
require('dotenv').config();
const teachersRouter = require('./routers/teacher_routes');

const app = express();

app.use(bodyParser.json());
app.use('/teachers', teachersRouter);

app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`);
});
