const { addNotesData, fetchNotesData, deleteNotesData, pushIntoTopicsPDFNotes, pushIntoTopicsImagesNotes } = require('../controllers/notesController');

const router = require('express').Router();

router.post('/addNotesData', addNotesData);
router.get('/fetchNotesData', fetchNotesData);
router.put('/deleteNotesData', deleteNotesData);
router.put('/pushIntoTopicsPDFNotes', pushIntoTopicsPDFNotes);
router.put('/pushIntoTopicsImageNotes', pushIntoTopicsImagesNotes);


module.exports = router;