
Meteor.users.allow({
	insert: function(userId, doc) {
		if(userId) {
			return true;
		}
	},
	update: function (userId, doc, fields, modifier) {
		if(userId) {
			return true;
		}
	},
	remove: function(userId, doc) {
		if(userId) {
			return true;
		}
	},
});


if(Meteor.isServer) {
	Meteor.publish('Users', function() {
		if(this.userId) {
			return Meteor.users.find({});
		}
	});
}

if(Meteor.isClient) {
	Tracker.autorun(function() {
		Meteor.subscribe('Users');
	});
}
