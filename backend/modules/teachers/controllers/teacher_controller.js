import TeacherService from "./../services/teacher_service.js";
class TeacherController {
    constructor() {
        this.teacherService = new TeacherService();
    }
    findAllTeachers() {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.teacherService.findAllTeachers();
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }

    createTeacher({ name, phonenumber, address, photo, sex }) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.teacherService.createTeacher({ name, phonenumber, address, photo, sex });
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }
}
export default TeacherController;