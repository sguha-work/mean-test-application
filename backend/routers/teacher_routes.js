import express from 'express';
const router = express.Router();
import * as teacherController from './../controllers/teacher_controller.js';

router.get('/', async (request, response) => {// read, fetch all teachers data
    let responseObj = {};
    responseObj.status = 200;
    responseObj.data = {};
    responseObj.message = '';
    try {
        const result = await teacherController.default.findAllTeachers();
        responseObj.data = result;
        response.send(responseObj);
    } catch (error) {console.error(error);
        responseObj.status = error.code?error.code:500;
        response.message = error.message?error.message:"Error occured in code";
        response.send(responseObj);
    }
});

router.get('/:teacher_id', (request, response) => {// read, fetch perticuler teacher data
    let responseObj = {};
    responseObj.status = 200;
    responseObj.data = {};
    response.send(responseObj);
});

router.post('/', async (request, response) => {// create, create new teacher
    let responseObj = {};
    responseObj.status = 201;
    responseObj.data = {};
    responseObj.message = '';
    try {
        console.log(request.body);
        const result = await teacherController.createTeacher(request.body);
        responseObj.data = result;
        response.send(responseObj);
    } catch (error) {
        responseObj.status = error.code?error.code:500;
        response.message = error.message?error.message:"Error occured in code";
        response.send(responseObj);
    }
});

router.patch('/:teacher_id', (request, response) => {// update, update perticuler teacher
    let responseObj = {};
    responseObj.status = 201;
    responseObj.data = {};
    response.send(responseObj);
});

router.delete('/:teacher_id', (request, response) => {// delete, delete perticuler teacher
    let responseObj = {};
    responseObj.status = 203;
    responseObj.data = {};
    response.send(responseObj);
});

export default router;