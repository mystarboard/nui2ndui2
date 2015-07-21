Template.favoriteGigs.rendered = function() {
	Deps.autorun( function() {
		Meteor.subscribe("gigs");
		Meteor.subscribe("favoriteGigs");
	});
}



Template.favoriteGigs.helpers({
	favoriteGigs: function () {
		return FavoriteGigs.find( { favoriteeId: Meteor.userId() });
	},
});
