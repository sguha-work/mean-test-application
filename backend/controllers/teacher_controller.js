const db = require('./../services/db');
const teacherModel = require('./../models/teacher_model');

const findAllTeachers = ()=>new Promise(async (resolve, reject)=>{
    try {
        await db.connect('teacher');
        const result = await db.find(teacherModel);
        resolve(result);
    } catch(error) {
        reject(error);
    } finally {
        db.disConnect();
    }
});

const createTeacher = ({ name,phonenumber,address,photo,sex})=>new Promise(async (resolve, reject)=>{
    try {
        await db.connect('teacher');
        const teacher = new teacherModel({name,phonenumber,address,photo,sex});
        const result = await db.save(teacher);
        resolve(result);
    } catch(error) {
        reject(error);
    } finally {
        db.disConnect();
    }
});

module.exports = {
    findAllTeachers,
    createTeacher
}