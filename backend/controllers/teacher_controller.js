import * as db from './../services/db.js';
import * as teacherModel from './../models/teacher_model.js';

const findAllTeachers = ()=>new Promise(async (resolve, reject)=>{
    try {
        await db.default.connect('teacher');
        const result = await db.default.find(teacherModel.default);
        resolve(result);
    } catch(error) {
        reject(error);
    } finally {
        db.default.disConnect();
    }
});

const createTeacher = ({ name,phonenumber,address,photo,sex})=>new Promise(async (resolve, reject)=>{
    try {
        await db.default.connect('teacher');
        const teacher = new teacherModel.default({name,phonenumber,address,photo,sex});
        const result = await db.default.save(teacher);
        resolve(result);
    } catch(error) {
        reject(error);
    } finally {
        db.default.disConnect();
    }
});

export default {
    findAllTeachers,
    createTeacher
}