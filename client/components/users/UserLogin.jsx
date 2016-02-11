UserLogin = React.createClass({
  onSubmit(e) {
    e.preventDefault();

    var email = e.target.username.value;
    var password = e.target.password.value;

    Meteor.loginWithPassword(email, password, function(err) {
      if(err) {
        console.log(err.reason);
      }
      else {
        FlowRouter.go('Home');
      }
    })
  },
  render() {
    return (

      <div className="container">
        <h1>Login</h1>

        <form onSubmit={ this.onSubmit }>
          <input className="field block" type="text" name="username" placeholder="Username" />
          <input className="field block mb2" type="password" name="password" placeholder="Password" />
          <span className="mb1 block p">No account? <a href="/sign-up">Sign up</a></span>
          <input className="btn btn-primary" type="submit" value="Log in" />
        </form>
      </div>
    )
  }
});
