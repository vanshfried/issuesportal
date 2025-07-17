const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: [
    {
      user: String,
      text: String,
      date: { type: Date, default: Date.now }
    }
  ],
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);