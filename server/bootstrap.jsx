Meteor.startup(() => {
  if(Meteor.users.find().count() === 0) {

    var userObject = {
      email: "alexander@hnssn.se",
      password: "foodbars"
    };

    Accounts.createUser(userObject);
  }

  if(Pass.find().count() === 0) {
    Pass.insert({text: "This is task 1" });
    Pass.insert({text: "This is task 2" });
    Pass.insert({text: "This is task 3" });
  }
});
