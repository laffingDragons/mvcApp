var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(bodyParser.json({limit: '10mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb',extended: true}));

// fs module, by default module for file management in node js
var fs = require('fs');

//include all our model files
fs.readdirSync('./app/models').forEach(function (file) {
    //check if the file id js or not
    if (file.indexOf('.js'))
        //if it is then include the file from that folder into our express app 
        require('./app/models/' + file);
}) // end for each


//include contrllers
fs.readdirSync('./app/controller').forEach(function (file) {
    if (file.indexOf('.js')) {
        //include a file as a route variable
        var route = require('./app/controller/' + file);
        //call controller function of each file and pass your app instance to it
        route.controller(app)
    }
}); //end for each




app.listen(3000, function () {
    console.log("Example App is running on port 3000!");
});