import ConsumerService from "../services/consumer_service.js";
class ConsumerController {
    constructor() {
        this.consumerService = new ConsumerService();
    }
    findAll() {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.consumerService.findAll();
                resolve(result);
            } catch (error) {
                reject(error);
            }
        });
    }
}
export default ConsumerController;