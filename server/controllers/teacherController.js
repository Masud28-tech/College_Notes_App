const Teachers = require('../model/teacherModel');
const bycrpt = require('bcrypt');

module.exports.register = async (req, res, next) => {
    try {
        //RECIEVE DATA FROM FRONTEND
        const { teacherName, email, branch, password } = req.body; 
        
        // CREDENTIALS CHECK 
        const emailCheck = await Teachers.findOne({email});
        if(emailCheck){
            return res.json({msg: "Teacher having this email already exists!", status: false});
        }

        // CREATING HASH OF PASSWORD USING BYCRPT LIBRARY
        const hashedPassword = await bycrpt.hash(password, 10);

        // CREATE USER IN DATABASE WITH PROCESSED CREDENTAILS
        const teacher = await Teachers.create({
            userType:"teacher",
            teacherName,
            email,
            branch,
            password: hashedPassword,
        });

        delete teacher.password;   // Delete original password for security from backend

        return res.json({status: true, teacher});
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
        const teacher = await Teachers.findOne({email});
        if(!teacher){
            return res.json({msg: "Incorrect email or password!", status: false});
        }

        const passwordCheck = await bycrpt.compare(password, teacher.password); // Varify ENTERED PASSWORD WITH ACTUAL STORED PASSWORD, USING BYCRPT LIBRARY
        if(!passwordCheck){
            return res.json({msg: "Incorrect email or password!", status: false});
        }

        delete teacher.password;   // Delete original password for security from backend

        return res.json({status: true, teacher});
    } 
    catch (ex) {
        next(ex);
    }
};

