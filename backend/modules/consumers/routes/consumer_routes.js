import express from 'express';
const router = express.Router();
import ConsumerController from './../controllers/consumer_controller.js';
const consumerController = new ConsumerController();

router.get('/', async (request, response) => {// read, fetch all teachers data
    let responseObj = {};
    responseObj.status = 200;
    responseObj.data = {};
    responseObj.message = '';
    try {
        const result = await consumerController.findAll();
        responseObj.data = result;
        response.send(result);
    } catch (error) {console.error(error);
        responseObj.status = error.code?error.code:500;
        response.message = error.message?error.message:"Error occured in code";
        response.send(responseObj);
    }
});

export default router;