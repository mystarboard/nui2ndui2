Router.configure({
	layoutTemplate: 'jumpLayout'
});


Router.route('/', function () {
  if (! Meteor.user()) {
  	this.render('splash');
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
  this.render('gigs'),
  this.layout('gigsLayout')
});

Router.route('/addGig', function () {
  this.render('addGig'),
  this.layout('gigsLayout')
});

Router.route('/favoriteGigs', function () {
  this.render('favoriteGigs')
});


