const Admins = require('../model/adminModel');
const bycrpt = require('bcrypt');

module.exports.register = async (req, res, next) => {
    try {
        //RECIEVE DATA FROM FRONTEND
        const { adminName, email, password } = req.body;

        // CREDENTIALS CHECK 
        const emailCheck = await Admins.findOne({ email });
        if (emailCheck) {
            return res.json({ msg: "Admin having this email already exists!", status: false });
        }

        // CREATING HASH OF PASSWORD USING BYCRPT LIBRARY
        const hashedPassword = await bycrpt.hash(password, 10);

        // CREATE USER IN DATABASE WITH PROCESSED CREDENTAILS
        const admin = await Admins.create({
            userType: "admin",
            adminName,
            email,
            password: hashedPassword,
        });

        delete admin.password;   // Delete original password for security from backend

        return res.json({ status: true, admin });
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
        const admin = await Admins.findOne({ email });
        if (!admin) {
            return res.json({ msg: "Incorrect email or password!", status: false });
        }

        const passwordCheck = await bycrpt.compare(password, admin.password); // Varify ENTERED PASSWORD WITH ACTUAL STORED PASSWORD, USING BYCRPT LIBRARY
        if (!passwordCheck) {
            return res.json({ msg: "Incorrect email or password!", status: false });
        }

        delete admin.password;   // Delete original password for security from backend

        return res.json({ status: true, admin });
    }
    catch (ex) {
        next(ex);
    }
};

