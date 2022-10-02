import * as mongoose from 'mongoose';
import patcher from 'mongoose-patcher'; 
let Schema = mongoose.Schema;

let schema = new Schema({
  
    aadharNumber: {type:String, default: null},
    email: {type:String, default: null},
    divisionId: {type:String, default: null},
    createdByUserId: {type:String, default: null},
    approvedOn: {type:String, default: null},
    fullName: {type:String, default: null},
    phoneNumber: {type:String, default: null},
    city: {type:String, default: null},
    dateOfBirth: {type:String, default: null},
    imagePath: {type:String, default: null},
    area: {type:String, default: null},
    approvedByUserId: {type:String, default: null},
    createdOn: {type:String, default: null},
    userType: {type:String, default: null},
    divisionIds: [{type: String, default:null}],
    division: {type:String, default: null},
    pin: {type:String, default: null},
    isApprovedByAdmin: {type:Boolean, default: false},
    panNumber: {type:String, default: null},
    isRejectedByAdmin: {type:Boolean, default: false},
    state: {type:String, default: null},
    id: {type:String, default: null}

},
  { timestamps: true, optimisticConcurrency: true }
);

// If no path is given, all date fields will be applied
schema.plugin(patcher);
export default mongoose.model("consumer", schema);
