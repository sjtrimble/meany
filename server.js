var express         =   require('express');
var path            =   require('path');
var app             =   express();
var bp              =   require('body-parser');
var root            =   __dirname;
var mongoose        =   require('mongoose');

app.use(express.static(path.join(root, './client')));
app.use(express.static(path.join(root, './bower_components')));
app.use(bp.json());
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.listen(8000, function() {
    console.log("Server listening on port 8000");
})