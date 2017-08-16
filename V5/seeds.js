var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
  { name: "Cloud's Rest",
    image: "https://cdn.pixabay.com/photo/2015/09/14/13/57/campground-939588_960_720.jpg",
    description: "Bacon ipsum dolor amet venison turducken ham hock tri-tip meatball pork loin t-bone tongue prosciutto ham pig shank fatback doner short loin. Tail doner pig chicken beef ribs brisket rump venison ground round. Alcatra ham hock pork corned beef beef ribs andouille pork belly. Ball tip brisket porchetta ham hock, alcatra sausage meatloaf beef frankfurter shoulder pastrami pancetta. Alcatra kevin drumstick pastrami salami brisket short ribs tail. Rump meatball strip steak burgdoggen ground round venison pancetta shoulder salami kielbasa doner hamburger tri-tip meatloaf."
  },
  { name: "Desert Mesa",
    image: "https://cdn.pixabay.com/photo/2016/12/08/17/45/lake-sara-1892494_960_720.jpg",
    description: "Bacon ipsum dolor amet venison turducken ham hock tri-tip meatball pork loin t-bone tongue prosciutto ham pig shank fatback doner short loin. Tail doner pig chicken beef ribs brisket rump venison ground round. Alcatra ham hock pork corned beef beef ribs andouille pork belly. Ball tip brisket porchetta ham hock, alcatra sausage meatloaf beef frankfurter shoulder pastrami pancetta. Alcatra kevin drumstick pastrami salami brisket short ribs tail. Rump meatball strip steak burgdoggen ground round venison pancetta shoulder salami kielbasa doner hamburger tri-tip meatloaf."
  },
  { name: "Canyon Floor",
    image: "https://cdn.pixabay.com/photo/2016/08/28/17/05/camping-1626412_960_720.jpg",
    description: "Bacon ipsum dolor amet venison turducken ham hock tri-tip meatball pork loin t-bone tongue prosciutto ham pig shank fatback doner short loin. Tail doner pig chicken beef ribs brisket rump venison ground round. Alcatra ham hock pork corned beef beef ribs andouille pork belly. Ball tip brisket porchetta ham hock, alcatra sausage meatloaf beef frankfurter shoulder pastrami pancetta. Alcatra kevin drumstick pastrami salami brisket short ribs tail. Rump meatball strip steak burgdoggen ground round venison pancetta shoulder salami kielbasa doner hamburger tri-tip meatloaf."
  }
]

function seedDB() {
  // remove all campgrounds
  Campground.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log('removed campgrounds');
    // add a few campgrounds
    data.forEach(function(seed) {
      Campground.create(seed, function(err, campground) {
        if(err) {
          console.log(err);
        } else {
          console.log('added a campground');
          // create a comment
          Comment.create(
            {
              text: "This place is great!!!!",
              author: "Homer"
            }, function(err, comment) {
              if(err) {
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log('created new comment');
              }
            });
        }
      });
    });
  });
  // add a few comments

}

module.exports = seedDB;
