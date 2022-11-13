const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    userType: {
        type:String,
        required: true,
    },
    adminName: {
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
});

module.exports = mongoose.model('Admins', adminSchema);