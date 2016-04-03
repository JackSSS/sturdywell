var mongoose = require('mongoose');
var express = require('express');
var app = express();
var contactRouter = require(__dirname + '/routes/contact_router');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/contact');

app.use(express.static(__dirname + '/build'));

app.use('/api', contactRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('server up');
});
