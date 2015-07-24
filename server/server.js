Meteor.publish("posts", function() {
	//publish messages just for logged in users
	if (this.userId) {
		return Posts.find({
			
		});
	}
	this.ready();
});

Meteor.publish("likes", function() {
	return Likes.find({});
});

Meteor.publish("gigs", function() {
	return Gigs.find({});
});

Meteor.publish("favoriteGigs", function() {
	return FavoriteGigs.find({});
});

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'tagline': 1, 'description': 1}});
  } else {
    this.ready();
  }
})

Meteor.methods({
	// {text:'', owner:'', date:'', parent:''}
	'addPost' : function(options) {
		var post = {
			text: options.text,
			ownerId: Meteor.userId(),
			username: Meteor.user().username,
			date: new Date(),
			parent: options.parent
		}
		Posts.insert(post);
	},
	'removePost' : function(id) {
		Posts.remove({_id:id});
	},
	'removeAllPosts' : function() {
		Posts.remove({});
	},

	'addLike' : function(options) {
		var like = {
			postId: options.postId,
			likerId: options.likerId,
			username: Meteor.user().username,
			date: new Date(),
		}
		Likes.insert(like);
	},
	'removeLike' : function(options) {
		var like = {
			postId: options.postId,
			likerId: options.likerId,
		}
		Likes.remove(like);
	},


	'addGig' : function(options) {
		var gig = {
			submittedById: Meteor.userId(),
			submitteedByUsername: Meteor.user().username,
			submittedDate: new Date(),
			name: options.name,
			date: options.date,
			displayDate: options.displayDate,
			formattedDate: options.formattedDate,
			location: options.location,
			organizer: options.organizer,
			description: options.description,
		}
		Gigs.insert(gig);
	},
	'removeGig' : function(id) {
		Gigs.remove({_id:id});
	},
	'removeAllGigs' : function() {
		Gigs.remove({});
	},


	'addFavoriteGig' : function(options) {
		var favoriteGig = {
			gigName: options.gigName, 
			favoriteeId: Meteor.userId(), 
			theFavoritedGigId: options.theFavoritedGigId, 
			date: options.date, 
			displayDate: options.displayDate, 
			formattedDate: options.formattedDate, 
			location: options.location, 
			organizer: options.organizer, 
			description: options.description
		}
		FavoriteGigs.insert(favoriteGig);
	},
	'removeFavoriteGig' : function(options) {
		var favoriteGig = {
			theFavoritedGigId: options.theFavoritedGigId,
		}
		FavoriteGigs.remove(favoriteGig);
	},

	'updateProfile' : function(userId, tagline, description) {
		Meteor.users.update({_id:userId}, {$set: { tagline: tagline, description:description}});
	},

});


