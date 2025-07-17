const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, minlength: 5 },
  body: { type: String, required: true, trim: true, minlength: 20 },
  likes: { type: Number, default: 0 },
  comments: [
    {
      user: { type: String, required: true },
      text: { type: String, required: true },
      date: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
