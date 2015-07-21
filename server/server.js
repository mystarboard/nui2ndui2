Meteor.publish("posts", function(userid) {
	return Posts.find({});
});

Meteor.publish("likes", function(postid) {
	return Likes.find({});
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


});