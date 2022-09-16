let mongoose = require("mongoose");
const patcher = require('mongoose-patcher'); 
let Schema = mongoose.Schema;

let schema = new Schema({
  name: { type: String, required: true },
  phonenumber: { type: Number, required: true },
  address: { type: String, required: true },
  photo: { type: String, required: false },
  sex: {
    type: String,
    enum: ["Male", "Female", "Trans", "Gay"],
  }
},
  { timestamps: true, optimisticConcurrency: true }
);

// If no path is given, all date fields will be applied
schema.plugin(patcher);
module.exports = mongoose.model("teacher_details", schema);
