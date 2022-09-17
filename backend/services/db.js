import * as mongoose from 'mongoose';

const connectionString = (dbName = 'test') => `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${dbName}`;
let db;

const connect = (DBName) => new Promise(async (resolve, reject) => {
    try {
        await mongoose.connect(connectionString(DBName), { useNewUrlParser: true }); // await on a step makes process to wait until it's done/ err'd out.
        db = mongoose.connection;
        resolve(db);
    } catch (error) {
        reject(error);
    }
});

const disConnect = () => new Promise(async (resolve, reject) => {
    try {
        db.close();
        resolve(db);
    } catch (error) {
        reject(error);
    }
});

const find = (dataModel, query = {}, val, sort) => {
    return new Promise(async (resolve, reject) => {
        if (
            typeof dataModel.find === "undefined" ||
            typeof dataModel.find !== "function"
        ) {
            reject({
                message: "Not a valid data model",
            });
        } else {
            try {
                const response = await dataModel.find();
                resolve(response);
            } catch (err) {
                reject({
                    message: err.message,
                    status: err.code === 11000 ? 409 : 500,
                });
            }
        }
    });
};

const save = (dataModel) => new Promise(async (resolve, reject) => {
    if (typeof dataModel.save === "undefined" || typeof dataModel.save !== "function") {
        reject({
            message: "Not a valid data model",
        });
    } else {
        try {
            let dbResp = await dataModel.save();
            resolve(dbResp);
        } catch (err) {
            console.log(err);
            reject({ message: err.message, status: (err.code === 11000) ? 409 : 500 });
        }
    }
});


export default {
    connect,
    disConnect,
    find,
    save
}