Router.configure({
	layoutTemplate: 'jumpLayout'
});


Router.route('/', function () {
  this.render('splash')
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