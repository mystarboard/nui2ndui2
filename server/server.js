Meteor.publish("posts", function(userid) {
	return Posts.find({});
});

Meteor.publish("likes", function(postid) {
	return Likes.find({post:postid});
});

