Router.configure({
	layoutTemplate: 'jumpLayout'
});


Router.route('/', function () {
  if (! Meteor.user()) {
  	this.render('splash');
    this.layout('splashLayout');
  	} else {
 			 this.render('home');
  	}
});

Router.route('/home', function () {
  this.render('home')
});

Router.route('/messages', function () {
  this.render('messages')
});

Router.route('/gigs', function () {
  this.render('gigs')
});

Router.route('/addGig', function () {
  this.render('addGig')
});

Router.route('/favoriteGigs', function () {
  this.render('favoriteGigs')
});

Router.route('/userProfile', function () {
  this.render('userProfile')
});

Router.route('/updateprofile', function () {
  this.render('updateProfile')
});

Router.route('/following', function () {
  this.render('friends')
});
