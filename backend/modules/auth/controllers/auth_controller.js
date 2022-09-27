import DBService from './../services/db.js';
import * as teacherModel from './../model/teacher_model.js';
class AuthController {
    constructor() {
        this.dbService = new DBService();
    }
    login({email,password}) {
        return new Promise(async(resolve, reject) => {
            try {
                await this.dbService.connect();
                resolve();
            } catch (error) {
                reject(error);
            } finally {
                this.dbService.disConnect();
            }
        });
    }
}
export default AuthController;