var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  name      : {type: String, default: 'First and Last name'},
  email		: {type: String, default: 'example@email.com'},
  message   : {type: String, default: 'Type message here'}
});

module.exports = mongoose.model('Contact', contactSchema);