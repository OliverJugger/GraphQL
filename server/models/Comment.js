var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var CommentSchema = new mongoose.Schema({
  body: String,
  article: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
  author: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, {timestamps: true});

export default mongoose.model('Comment', CommentSchema);
