const { addNotesData, fetchNotesData, pushTopicsPDFNotes } = require('../controllers/notesController');

const router = require('express').Router();

router.post('/addNotesData', addNotesData);
router.get('/fetchNotesData', fetchNotesData);
router.put('/pushIntoTopicsPDFNotes', pushTopicsPDFNotes);

module.exports = router;