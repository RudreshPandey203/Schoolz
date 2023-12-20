const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const formschema = new Schema({
    name:{
        type:String,
        required:true
    },
    dob: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    subject:{
        type:String,
        required:true
    },
    address: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    fees: {
        type: String,
        required: true
    },
    institutionName: {
        type: String,
        required: true
    }
},{timestamps:true});

export default mongoose.models.teacherforms || mongoose.model('teacherforms',formschema)