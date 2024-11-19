const express = require('express');
const router = express.Router();

const { getAllNotes, renderAddNoteForm, addNote } = require('../controllers/notes');

router.route('/').get(getAllNotes);
router.route('/add-note').get(renderAddNoteForm).post(addNote);

module.exports = router;
