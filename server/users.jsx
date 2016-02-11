Meteor.methods({
	 newUser: function(email, password){
     var id = Accounts.createUser({
			email: email,
      password: password
		});

    return id;
	}
});
