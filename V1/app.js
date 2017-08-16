var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/04/28/15/49/airstream-1359135_960_720.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2015/09/14/13/57/campground-939588_960_720.jpg"},
    {name: "Goat Pass", image: "https://cdn.pixabay.com/photo/2016/08/28/17/05/camping-1626412_960_720.jpg"},
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2016/04/28/15/49/airstream-1359135_960_720.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2015/09/14/13/57/campground-939588_960_720.jpg"},
    {name: "Goat Pass", image: "https://cdn.pixabay.com/photo/2016/08/28/17/05/camping-1626412_960_720.jpg"}
];

app.get('/', function(req, res) {
    res.render('landing');
});

app.get('/campgrounds', function(req, res) {
    res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', function(req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res) {
  res.render('new.ejs');
});

app.listen(3000, function() {
    console.log('YelpCamp server has started');
});
