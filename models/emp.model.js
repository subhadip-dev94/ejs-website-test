const mongoose = require('mongoose');

const EmpSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    fullName: {
        type: String,
    },
    phoneNumber: { 
        type: Number, 
    },
    age: {
        type: String,
    },
    gender: {
        type: String,
    },
    address: {
        type: String,
    },
    isDeleted: { 
        type: Boolean, 
        default: false 
    },
}, {
    timestamps: true,
    versionKey: false
})


const EmpModel = new mongoose.model('csvUpload-data', EmpSchema);

module.exports = EmpModel;


