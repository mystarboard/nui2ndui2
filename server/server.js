Meteor.publish("posts", function(userid) {
	return Posts.find({});
});

Meteor.publish("likes", function(postid) {
	return Likes.find({});
});

Meteor.publish("gigs", function(postid) {
	return Gigs.find({});
});


Meteor.methods({
	// {text:'', owner:'', date:'', parent:''}
	'addPost' : function(options) {
		var post = {
			text:options.text,
			owner:Meteor.userId(),
			date:new Date(),
			parent:options.parent
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
			submittedBy: Meteor.userId(),
			name: options.name,
			date: new Date(),
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

});