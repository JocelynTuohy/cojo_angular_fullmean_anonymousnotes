const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    text: { type: String, required: true, minlength: 4 }
}, {timestamps: true});
const Note = mongoose.model('Note', NoteSchema);

// Many to One Relationships:
// Many side: _onething: {type: Schema.Types.ObjectId, ref: 'OneThing'},
// One side: _manythings: [{type: Schema.Types.ObjectId, red: 'ManyThing'},
