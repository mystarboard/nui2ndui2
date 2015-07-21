Template.gigs.rendered = function() {
	Deps.autorun( function() {
		Meteor.subscribe("gigs");
		Meteor.subscribe("favoriteGigs");
	});
}


Template.gigs.helpers({
	gigs: function () {
		return Gigs.find({}, { sort: {formattedDate: 1} });
	},
});

Template.gigs.events({
	'click #addToFavoriteGigs' : function(event, tmpl) {
		var isFavorited, theFavoritedGigId = this._id, theFavoritees = FavoriteGigs.find({gigName: theFavoritedGigId});
		var options = {gigName: this._id, favoriteeId: Meteor.userId()};

		theFavoritees.forEach(function(theFavoritee) {
			if (theFavoritee.favoriteeId === Meteor.userId()) {
			isFavorited = true;
			console.log("this user has favorited this gig before");
			} else {
				isFavorited = false;
				console.log("this user has NOT favorited this gig before ");
			}
		});

		if (!isFavorited) {
			Meteor.call('addFavoriteGig', options);
			console.log("it's not favorited yet, i'm savin it");
		} else {
			Meteor.call('removeFavoriteGig', options);
			console.log("it's already favorited, ima delete it");
		}
	},
});
