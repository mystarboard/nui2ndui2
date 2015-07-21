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