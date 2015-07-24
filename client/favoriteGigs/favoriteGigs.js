Template.favoriteGigs.rendered = function() {
	Deps.autorun( function() {
		Meteor.subscribe("favoriteGigs");
	});
}



Template.favoriteGigs.helpers({
	favoriteGigs: function () {
		return FavoriteGigs.find( { favoriteeId: Meteor.userId() });
	},
});

Template.showFavoriteGig.events({
	'click #removeFromFavoriteGigs' : function (event, tmpl) {
		event.preventDefault();
		var theFavoritedGigId = this._id;
		var options = {theFavoritedGigId: theFavoritedGigId};
		Meteor.call('removeFavoriteGig', options);
		console.log('im removing the favorited gig because you clicked the button');
	}
});
