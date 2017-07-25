const mongoose = require('mongoose');
const Note = mongoose.model('Note');
var errors = [];

module.exports = {
  getAll: (req, res, next)=>{
    Note
      .find()
      .then((notes)=>{
        res.json(notes); 
      })
      .catch((err)=>{
        res.status(501).json(err);
      })
  },
  // getThis: (req, res, next)=>{
  //   Note
  //     .findById(req.params.id)
  //     .then((note)=>{
  //       res.json(note);
  //     })
  //     .catch((err)=>{
  //       res.status(502).json(err);
  //     })
  // },
  addThis: (req, res, next)=>{
    console.log('POST DATA', req.body);
    new Note({text: req.body.text})
      .save()
      .then(()=>{res.json(true);})
      .catch((err)=>{res.status(503).json(err);});
  }
  // deleteThis: (req, res, next)=>{
  //   // console.log('POST DATA', req.body);
  //   Note
  //     .findByIdAndRemove(req.params.id, (err)=>{
  //       res.status(504).json(err);
  //     })
  // },
  // updateThis: (req, res, next)=>{
  //   Note
  //     .findByIdAndUpdate(
  //       req.params.id,
  //       {$set: {
  //         name: req.body.name
  //       }}
  //     )
  //     .then((note)=>{  
  //       res.json(true)
  //     })
  //     .catch((err)=>{res.status(503).json(err);});
  // },
}

// Many to One Relationships: grab and then populate!
// OneThing.find().sort('createdAt').populate('_manythings').sort(-createdAt')
