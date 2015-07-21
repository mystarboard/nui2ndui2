Template.post.helpers({
	likeCount: function () {
		return Likes.find({postId:this._id}).count();
	},
});

Template.post.helpers({
	postComments: function () {
		return Posts.find({parent:this._id});
	},
});

Template.postComment.helpers({
	likeCount: function () {
		return Likes.find({postId:this._id}).count();
	},
});

Template.post.events({
	'keyup .comment' : function(evt, tmpl) {
		if(evt.which === 13) {
			var commentText = tmpl.find('.comment').value;
			var options = {text:commentText, parent:this._id};
			Meteor.call('addPost', options);
			$('.comment').val("");
		}
	}
});

Template.post.events({
	'click .likebtn' : function(event, template) {
		var isLiked, theLikedPostId = this._id, theLikers = Likes.find({postId: theLikedPostId});
		var options = {postId: this._id, likerId: Meteor.userId()};

		theLikers.forEach(function(theLiker) {
			if (theLiker.likerId === Meteor.userId()) {
				isLiked = true;
				console.log("this user is in the record of likes");
			} else {
				isLiked = false;
				console.log("this user is not in the record of likes ");

			}
		});

		if (!isLiked) {
			Meteor.call('addLike', options);
			console.log("it's not liked yet, i'm savin it");

		} else {
			Meteor.call('removeLike', options);
			console.log("it's liked already, ima delete it");
		}
	},
});