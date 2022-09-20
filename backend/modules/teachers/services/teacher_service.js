import DBService from './db.js';
import * as teacherModel from './../model/teacher_model.js';
class TeacherService {
    constructor() {
        this.dbService = new DBService();
    }
    findAllTeachers() {
        return new Promise(async (resolve, reject) => {
            try {
                await this.dbService.connect('teacher');
                const result = await this.dbService.find(teacherModel.default);
                resolve(result);
            } catch (error) {
                reject(error);
            } finally {
                this.dbService.disConnect();
            }
        });
    }

    createTeacher({ name, phonenumber, address, photo, sex }) {
        return new Promise(async (resolve, reject) => {
            try {
                await this.dbService.connect('teacher');
                const teacher = new teacherModel.default({ name, phonenumber, address, photo, sex });
                const result = await this.dbService.save(teacher);
                resolve(result);
            } catch (error) {
                reject(error);
            } finally {
                this.dbService.disConnect();
            }
        });
    }
}
export default TeacherService;