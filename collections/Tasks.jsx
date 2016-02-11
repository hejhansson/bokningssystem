var collection = Pass = new Mongo.Collection('Pass', {});

collection.allow({
	insert: function(userId, doc) {
		if(userId) {
			return true;
		}
	},
	update: function(userId, doc) {
		if(userId) {
			return true;
		}
	},
	remove: function(userId, doc) {
		if(userId) {
			return true;
		}
	},
})

if(Meteor.isServer) {
	Meteor.publish('Pass', function() {
		if(this.userId) {
			return collection.find({});
		}
	});
}

if(Meteor.isClient) {
	Tracker.autorun(function() {
		Meteor.subscribe('Pass');
	});
}
