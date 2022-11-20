const NotesData = require('../model/notesModel');

module.exports.addNotesData = async (req, res, next) => {
    try {
        const { branch, semester, subject, user } = req.body;

        const subjectAvailableCheck = await NotesData.findOne({ subject });
        if (subjectAvailableCheck) {
            return res.json({ msg: "Data having this subject already exists!", status: false });
        }

        const noteData = await NotesData.create({
            branch,
            semester,
            teacher: user,
            subject
        });

        return res.json({ status: true, noteData });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error while creating new notes data!");
    }
}

module.exports.fetchNotesData = async (req, res, next) => {
    try {
        const notesData = await NotesData.find();
        return res.json({ status: true, notesData });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error while fetching notes data!");
    }
}


module.exports.pushIntoTopicsPDFNotes = async (req, res, next) => {
    try {
        const { topicSelected, category, fileType, fileName, pdfFile } = req.body;

        let noteData = await NotesData.findById(topicSelected._id);
        if (!noteData) {
            return res.json({ msg: "Data Not Found", status: false });
        }

        noteData = await NotesData.findOneAndUpdate(
            { subject: topicSelected.subject },
            {
                $push: {
                    topics: {
                        category: category,
                        fileName: fileName,
                        fileType: fileType,
                        fileUrl: pdfFile
                    }
                }
            },
            { upsert: true }
        );

        return res.json({ status: true, noteData });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error while uploading notes pdf file/files!");
    }
}

module.exports.pushIntoTopicsImagesNotes = async (req, res, next) => {
    try {
        const { topicSelected, category, fileType, fileName, imageFile } = req.body;

        let noteData = await NotesData.findById(topicSelected._id);
        if (!noteData) {
            return res.json({ msg: "Data Not Found", status: false });
        }

        noteData = await NotesData.findOneAndUpdate(
            { subject: topicSelected.subject },
            {
                $push: {
                    topics: {
                        category: category,
                        fileName: fileName,
                        fileType: fileType,
                        fileUrl: imageFile
                    }
                }
            },
            { upsert: true }
        );

        return res.json({ status: true, noteData });

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error while uploading notes Image or Images!");
    }
}