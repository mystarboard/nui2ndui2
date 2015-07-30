Template.gigs.rendered = function() {
	Deps.autorun( function() {
		Meteor.subscribe("gigs");
		Meteor.subscribe("favoriteGigs");
	});
}

Session.setDefault('favorited', true)

Template.gigs.helpers({
	gigs: function () {
		return Gigs.find({}, { sort: {formattedDate: 1} });
	},
});


Template.showGig.helpers({
	addToFavorites: function(){
		if (Session.get('favorited') == true) {
			return "Add To Favorites"
		}
	},
});

Template.gigs.events({
	'click #addToFavoriteGigs' : function(event, tmpl) {
		var isFavorited, theFavoritedGigId = this._id, theFavoritees = FavoriteGigs.find({theFavoritedGigId: theFavoritedGigId});
		var options = {
			gigName: this.name, 
			favoriteeId: Meteor.userId(),
			theFavoritedGigId: this._id, 
			date: this.date, 
			displayDate: this.displayDate, 
			formattedDate: this.formattedDate, 
			location: this.location, 
			organizer: this.organizer, 
			description: this.description

		};

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
			alert("Added to favorites");
			Session.set('favorited', true);

		} else {
			Meteor.call('removeFavoriteGig', options);
			Session.set('favorited', false);
			alert("Removed from favorites");
		}
	},
});
