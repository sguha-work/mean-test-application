import DBService from './db.js';
import * as consumerModel from '../model/consumer_model.js';
class ConsumerService {
    constructor() {
        this.dbService = new DBService();
    }
    findAll() {
        return new Promise(async (resolve, reject) => {
            try {
                await this.dbService.connect('consumersdb');
                const result = await this.dbService.find(consumerModel.default);
                resolve(result);
            } catch (error) {
                reject(error);
            } finally {
                this.dbService.disConnect();
            }
        });
    }
}
export default ConsumerService;