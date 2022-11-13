const Students = require('../model/studentModel');
const bycrpt = require('bcrypt');

module.exports.register = async (req, res, next) => {
    try {
        //RECIEVE DATA FROM FRONTEND
        const { studentName, email, branch, semester, rollNumber, password } = req.body; 
        // CREDENTIALS CHECK 
        const emailCheck = await Students.findOne({email});
        if(emailCheck){
            return res.json({msg: "Student having this email already exists!", status: false});
        }
        const rollNoCheck = await Students.findOne({rollNumber});
        if(rollNoCheck){
            return res.json({msg: "Student already registered!", status: false});
        }

        // CREATING HASH OF PASSWORD USING BYCRPT LIBRARY
        const hashedPassword = await bycrpt.hash(password, 10);

        // CREATE USER IN DATABASE WITH PROCESSED CREDENTAILS
        const student = await Students.create({
            userType:"student",
            studentName,
            email,
            branch,
            semester,
            rollNumber,
            password: hashedPassword,
        });

        delete student.password;   // Delete original password for security from backend
        return res.json({status: true, student});
    } 
    catch (error) {
        next(error);
    }
};


module.exports.login = async (req, res, next) => {
    try {
        //RECIEVE DATA FROM FRONTEND
        const { email, password } = req.body; 
        // CREDENTIALS CHECK 
        const student = await Students.findOne({email});
        if(!student){
            return res.json({msg: "Incorrect email or password!", status: false});
        }

        const passwordCheck = await bycrpt.compare(password, student.password); // Varify ENTERED PASSWORD WITH ACTUAL STORED PASSWORD, USING BYCRPT LIBRARY
        if(!passwordCheck){
            return res.json({msg: "Incorrect email or password!", status: false});
        }
        delete student.password;   // Delete original password for security from backend

        return res.json({status: true, student});
    } 
    catch (ex) {
        next(ex);
    }
};

