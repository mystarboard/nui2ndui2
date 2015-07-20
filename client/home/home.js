Template.home.rendered = function() {
	Deps.autorun( function() {
		Meteor.subscribe("posts", Meteor.userId());
		Meteor.subscribe("likes");
	});
}

Template.home.posts = function() {
	return Posts.find({}, { sort: {date: -1} });
}

Template.home.events({
	'keyup .posttext' : function(evt, tmpl){
		if(evt.which === 13) {
			var posttext = tmpl.find('.posttext').value;
			Posts.insert({text:posttext, owner:Meteor.userId(), date:new Date(), parent:null});
			$('.posttext').val("").select().focus();
		}
	}
})