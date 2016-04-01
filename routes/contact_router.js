var express = require('express');
var bodyParser = require('body-parser');
var Contact = require(__dirname + '/../models/contact');
var handleError = require(__dirname + '/../lib/handleServerError');

var contactRouter = module.exports = exports = express.Router();

contactRouter.get('/contact', function(req, res) {
  Contact.find({}, function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

contactRouter.post('/contact', bodyParser.json(), function(req, res) {
  var newcontact = new contact(req.body);
  newContact.save(function(err, data) {
    if (err) return handleError(err, res);

    res.json(data);
  });
});

contactRouter.put('/contact/:id', bodyParser.json(), function(req, res) {
  var contactData = req.body;
  delete contactData._id;
  Contact.update({_id: req.params.id}, contactData, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'contact out!'});
  });
});

contactRouter.delete('/contact/:id', function(req, res) {
  Contact.remove({_id: req.params.id}, function(err) {
    if (err) return handleError(err, res);

    res.json({msg: 'success!'});
  });
});