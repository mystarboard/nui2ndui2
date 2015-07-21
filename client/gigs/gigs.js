Template.gigs.rendered = function() {
	Deps.autorun( function() {
		Meteor.subscribe("gigs");
	});
}

Template.gigs.helpers({
	gigs: function () {
		return Gigs.find({}, { sort: {date: -1} });
	},
});
