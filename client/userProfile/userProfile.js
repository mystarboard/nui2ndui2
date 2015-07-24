Template.userProfile.rendered = function() {
	Deps.autorun( function() {
		Meteor.subscribe("userData");
	});
}


Template.userProfile.events ({
	'click #updateProfileBtn' : function(event, tmpl) {
		event.preventDefault();
		var tagline = tmpl.find('.taglineInput').value;
		var description = tmpl.find('.descriptionInput').value;
		var userId = Meteor.userId();
		var options = {
			userId: Meteor.userId(),
			tagline: tagline, 
			description: description
		};

		Meteor.call('updateProfile', userId, tagline, description);
		$('.taglineInput').val("");
		$('.descriptionInput').val("");
	}
});