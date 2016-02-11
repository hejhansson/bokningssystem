FlowRouter.route('/', {
  name: 'Home',
  action(params) {
    renderMainLayoutWith(<Home />);
  }
});
FlowRouter.route("/login", {
  name: 'Login',
  action(params) {
    if(!Meteor.userId()) {
      renderMainLayoutWith(<UserLogin />);
    }
    else {
      FlowRouter.go('/');
    }
  }
});

FlowRouter.route("/profil", {
  name: 'Profile',
  action(params) {
    if(Meteor.userId()) {
      renderMainLayoutWith(<Profile />);
    }
    else {
      renderMainLayoutWith(<NotLoggedIn />);
    }
  }
});

FlowRouter.route("/foretag", {
  name: 'Foretag',
  action(params) {
    if(Meteor.userId()) {
      renderMainLayoutWith(<Foretag />);
    }
    else {
      renderMainLayoutWith(<NotLoggedIn />);
    }
  }
});

FlowRouter.route("/nytt-pass", {
  name: 'AddPass',
  action(params) {
    if(Meteor.userId()) {
      renderMainLayoutWith(<AddPass />);
    }
    else {
      renderMainLayoutWith(<NotLoggedIn />);
    }
  }
});


FlowRouter.route("/sign-up", {
  name: 'SignUp',
  action(params) {
    renderMainLayoutWith(<SignUp />);
  }
});

FlowRouter.route("/anvandare", {
  name: 'Users',
  action(params) {
    renderMainLayoutWith(<Users />);
  }
});

FlowRouter.route("/anvandare/all", {
  name: 'UsersAll',
  action(params) {
    renderMainLayoutWith(<UsersAll />);
  }
});


FlowRouter.route('/anvandare/:userId', {
    name: 'UserEdit',
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);

        ReactLayout.render(MainLayout, {
          header: <Header />,
          content: <UserEdit userId={params.userId} />,
          //footer: <Footer />
        });
    },
});

function renderMainLayoutWith(component) {
  ReactLayout.render(MainLayout, {
    header: <Header />,
    content: component,
    //footer: <Footer />
  });
}
