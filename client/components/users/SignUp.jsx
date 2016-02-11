SignUp = React.createClass({
  handleSubmit(event) {
      event.preventDefault();

      let email = event.target.email.value;
      let password = event.target.password.value;
      let org = event.target.org.value;

      let user_id = Accounts.createUser({
        email: email,
        password: password,
        profile: {
          role: 'org_owner',
          org_id: '',
        }
      }, function(err) {

        if (err) { console.log(err); }

        else {
          console.log(user_id);

          let org_id = Org.insert({
            'name': org,
          });

          Meteor.users.update(Meteor.userId(), {$set: {'profile.org_id': org_id}});

          FlowRouter.go('Home');
        }

      });


  },
  render() {
    return (
      <div className="container">

        <form className="col-6 mx-auto clearfix" onSubmit={ this.handleSubmit }>
          <h1 className="px2 center block">Registrera företag</h1>
          <div className="col col-12 px2">
            <label htmlFor="">E-post</label>
            <input className="field col-12 block mb2" name="email" type="email" />
          </div>

          <div className="col col-12 px2 mt2">
            <label htmlFor="">Lösenord</label>
            <input className="field col-12 block mb2" name="password" type="password" />
          </div>

          <div className="col col-12 px2 mt2">
            <label htmlFor="">Företag/organisation</label>
            <input className="field col-12 block mb2" name="org"  type="text" />
          </div>

          <div className="col col-12 px2">
            <input className="btn btn-primary right mt2" type="submit" value="Registrera" />
          </div>
        </form>
      </div>
    )
  }
});
