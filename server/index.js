const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const adminRoutes = require('./routes/adminRoutes');
const notesDataRoutes = require('./routes/notesRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', studentRoutes);
app.use('/api/auth', teacherRoutes);
app.use('/api/auth', adminRoutes);
app.use('/api/data', notesDataRoutes);

const mongoURI = "mongodb://localhost:27017/clg_notes_manager?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

mongoose.connect(mongoURI, () => {
    console.log("Connected to mongoDB");
})

let port = 5000 // process.env.PORT;
const server = app.listen(port || 5000, () => {
    console.log(`Server is started on Port ${port}`);
});
