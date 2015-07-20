Router.configure({
	layoutTemplate: 'jumpLayout'
});


Router.route('/', function () {
  this.render('home')
});

Router.route('/messages', function () {
  this.render('messages')
});