const { addNotesData, fetchNotesData } = require('../controllers/notesController');

const router = require('express').Router();

router.post('/addNotesData', addNotesData);
router.get('/fetchNotesData', fetchNotesData);

module.exports = router;