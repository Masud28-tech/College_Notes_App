const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    userType: {
        type:String,
        required: true,
    },
    
    studentName: {
        type: String,
        required: true,
        min:1,
        max:30
    },

    email: {
        type: String,
        required: true,
        unique: true,
        max: 50
    },

    password: {
        type:String,
        required: true,
        min: 5
    },

    branch: {
        type: String,
        required: true,
        min:5
    },

    semester: {
        type:String,
        required: true,
        min:2,
    },

    rollNumber: {
        type: String,
        required: true,
        min:2
    }
});

module.exports = mongoose.model('Students', studentSchema);