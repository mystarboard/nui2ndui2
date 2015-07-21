

Template.addGig.events({
	'click #postGigButton' : function(event, tmpl) {
		event.preventDefault();
		var name = tmpl.find('input[name=name]').value;
		var date = tmpl.find('.date').value;
		var location = tmpl.find('.location').value;
		var organizer = tmpl.find('.organizer').value;
		var description = tmpl.find('.description').value;
		var options = {name:name, date:date, location:location, organizer:organizer, description:description};
		Meteor.call('addGig', options);
		Router.go('/gigs');
	}
});