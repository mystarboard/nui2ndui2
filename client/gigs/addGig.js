Template.addGig.onRendered(function() {
    this.$('.datetimepicker4').datetimepicker({
    	sideBySide: true,
    	minDate: moment().subtract(1, 'days'),
    	viewMode: 'months',
    	format: 'YYYY-MM-DD HH:mm',
    });
});

Template.addGig.events({
	'click #postGigButton' : function(event, tmpl) {
		event.preventDefault();
		var name = tmpl.find('input[name=name]').value;
		var date = tmpl.find('.date').value;
		var displayDate = moment(date).format("dddd, Do MMMM YYYY, h:mm a");
		var formattedDate = moment(date).toISOString();
		var location = tmpl.find('.location').value;
		var organizer = tmpl.find('.organizer').value;
		var description = tmpl.find('.description').value;
		var options = {name:name, date:date, displayDate:displayDate, formattedDate:formattedDate, location:location, organizer:organizer, description:description};
		Meteor.call('addGig', options);
		Router.go('/gigs');
	}
});

