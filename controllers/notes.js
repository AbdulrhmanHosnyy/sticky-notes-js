const Note = require('../models/Note');

exports.getAllNotes = async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.render('all-notes', { notes });
};

exports.renderAddNoteForm = (req, res) => {
  res.render('add-note');
};

exports.addNote = async (req, res) => {
  const { title, content } = req.body;
  await Note.create({ title, content });
  res.redirect('/');
};
