Template.favoriteGigs.rendered = function() {
	Deps.autorun( function() {
		Meteor.subscribe("favoriteGigs", {favoriteeId: Meteor.userId()});
	});
}
//Todo: security - control subscribe to users only.


Template.favoriteGigs.helpers({
	favoriteGigs: function () {
		return FavoriteGigs.find( { favoriteeId: Meteor.userId() }, {sort: {formattedDate:1}});
	},
});

Template.showFavoriteGig.events({
	'click #removeFromFavoriteGigs' : function (event, tmpl) {
		event.preventDefault();
		var theFavoritedGigId = this.theFavoritedGigId;
		var options = {theFavoritedGigId: theFavoritedGigId};
		Meteor.call('removeFavoriteGig', options);
		alert('Removed from favorites');
	}
});
