const mongoose = require('mongoose');
const Note = mongoose.model('Note');
const notes = require('../controllers/notes.js');
const path = require('path');

module.exports = (app)=>{
  app.get('/notes', (req, res, next) => notes.getAll(req, res, next));
  app.post('/notes/add', (req, res, next) => notes.addThis(req, res, next));

  app.get('*', (req, res, next)=>{
    res.sendFile(path.resolve('./public/dist/index.html'));
  });
}
