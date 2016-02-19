var mongoose = require('mongoose');
var express = require('express');
var app = express();
var appRouter = require(__dirname + '/routes/contact_routes');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/sturdywell');

app.use(express.static('build'));

app.use('/api', appRouter);

app.listen(process.env.PORT || 3000, function() {
  console.log('server up');
});
