const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
    
    branch: {
        type: String,
        required: true,
    },

    semester: {
        type: String,
        required: true
    },

    teacher: {
        type: mongoose.SchemaTypes.Mixed,
        required: true
    },

    subject: {
        type: String,
        required: true,
        unique : true
    },

    topics: {
        type: Array,
    }
});

module.exports = mongoose.model('NotesData', NotesSchema);