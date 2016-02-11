var collection = Org = new Mongo.Collection('Org', {});

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
	Meteor.publish('Org', function() {
		if(this.userId) {
			return collection.find({});
		}
	});
}

if(Meteor.isClient) {
	Tracker.autorun(function() {
		Meteor.subscribe('Org');
	});
}
