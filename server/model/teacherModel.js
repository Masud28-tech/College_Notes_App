const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    userType: {
        type:String,
        required: true,
    },
    
    teacherName: {
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

    subject: {
        type: Array,
        required: false,
        min:2
    }
});

module.exports = mongoose.model('Teachers', teacherSchema);