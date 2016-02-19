var express = require('express');
var bodyParser = require('body-parser');
var Contact = require (__dirname + '/../models/contact_form');
var handleError = require(__dirname + '/../lib/handleError');

var contactRouter = module.exports = exports = express.Router();

contactRouter.get('/contact', function(req, res) {
  Contact.find({}, function(err, data) {
    if (err) return handleServerError(err, res);

    res.json(data);
  });
});

contactRouter.post('/contact', bodyParser.json(), function(req, res) {
  var newContact = new Contact(req.body);
  newContact.save(function(err, data) {
    if (err) return handleServerError(err, res);

    res.json(data);
  });
});

contactRouter.put('/contact/:id', bodyParser.json(), function(req, res) {
  var contactData = req.body;
  delete contactData._id;
  Contact.update({_id: req.params.id}, contactData, function(err) {
    if (err) return handleServerError(err, res);

    res.json({msg: 'contact updated!'});
  });
});

contactRouter.delete('/contact/:id', function(req, res) {
  Contact.remove({_id: req.params.id}, function(err) {
    if (err) return handleServerError(err, res);

    res.json({msg: 'success!'});
  });
});