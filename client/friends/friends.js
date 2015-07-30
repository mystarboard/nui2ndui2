Template.friends.rendered = function() {
	Deps.autorun( function() {
		Meteor.subscribe("allUserData");
		Meteor.subscribe('friends');
	});
}

Template.username.rendered = function() {
	Deps.autorun( function() {
		Meteor.subscribe('friends');
	});
}



Template.friends.helpers({
	users : function() {
		return Meteor.users.find();
	}
});

Template.myFriends.helpers({
	friends : function() {
		return Friends.find( { username: Meteor.userId()}).fetch();
	}
});

Template.username.events({
	'click #addFriend' : function(event, template) {
		event.preventDefault;
		var newFriend = this.username;
		var friender = Meteor.userId();
		var isFriended;
		var currentFriends = Friends.find( { username: friender, friend: newFriend});
		var options = {
			newFriend: this.username,
			friender: Meteor.userId(),
		};

		currentFriends.forEach(function(e) {
			if (e.friend === newFriend) {
				isFriended = true;
			} else {
				isFriended = false;
			}
		});

		if (!isFriended) {
			Meteor.call('addFriend', options);
			// alert("You are now following this user");
		} else {
			// alert("You are already following this user");
		}
	},
});

Template.myFriends.events({
	'click #unFollow' : function(event,tmpl) {
		event.preventDefault();
		var options = {
			usernameToUnfollow: this.friend,
			username: Meteor.userId()
		}
		Meteor.call('unFollow', options);

		console.log('You have unfollowed ' + this.friend);
	}
});