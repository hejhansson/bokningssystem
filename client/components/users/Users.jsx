Users = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.users.find({'profile.org_id': Meteor.user().profile.org_id}).fetch(),
      currentUser: Meteor.userId(),
    }
  },
  removeUser(e) {
    let id = $(e.currentTarget).parent().attr( 'data-id' );
    if (window.confirm("Vill du ta bort användaren?")) {
      Meteor.users.remove(id);
    }
  },
  handleEdit(e) {
    e.preventDefault();
    var params = {userId: $(e.currentTarget).parent().attr('data-id')};
    FlowRouter.go('UserEdit', params);
  },
  handleNewUser(e) {
    e.preventDefault();
    var email = e.target.email.value;

    // här ska vi enrolla á la we/run
    console.log(email);

  },
  handleNewTrainer(e) {
    e.preventDefault();
    var email = e.target.email.value;

    // här ska vi enrolla á la we/run
    console.log(email);

  },
  renderUsers() {
    let displayname;
    return this.data.user.map((user) => {
      if(user.emails) {
        displayname = user.emails[0].address;
      }
      else {
        displayname = user.username;
      }
      let org_id;
      if(user.profile && user.profile.org_id) {
        org_id = Org.findOne(user.profile.org_id).name;
      }
      return <li className="mt2 mb2 col col-12 border rounded flex flex-center" data-id={user._id} key={user._id}>

          <span className="py2 px2 col-3">
            <span className="bold">{displayname}</span>
          </span>
          <span className="py2 px2 flex-auto">
            <small className=""><b>Företag</b><br/>{org_id}</small>
          </span>
          <a href="" onClick={ this.handleEdit } className="btn btn-primary right mr2">Redigera</a>
          <a href="" onClick={ this.removeUser } className="btn btn-primary right mr2">Ta bort</a>
        </li>;
    });
  },
  render() {
    let { currentUser } = this.data;

    if(currentUser) {
      return (
        <div className="text-center container">

          <div className="col-8 col bg-white">
            <div className="p2 border rounded col col-12">
              <h1 className="mt1">Användare</h1>
                <ul className="list-reset mb3">
                  {this.renderUsers()}
                </ul>
            </div>
          </div>

          <div className="right col-3">
            <div className="col col-12 p2 border rounded  bg-white">
              <h3 className="mt1">Lägg till användare</h3>
                <p className="gray">Användaren du lägger till kommer få ett mail!</p>

                <form onSubmit={ this.handleNewUser } className="col col-12">
                  <label htmlFor="">E-mail</label>
                  <input type="email" name="email" className="block col-12 field"/>
                  <div className="col-12 col">
                    <input type="submit" className="btn btn-primary right mt2" value="Lägg till"/>
                  </div>
                </form>
            </div>

            <div className="col col-12 p2 border rounded  bg-white mt2">
              <h3 className="mt1">Lägg till tränare</h3>
              <p className="gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <form onSubmit={ this.handleNewTrainer } className="col col-12">
                  <label htmlFor="">E-mail</label>
                  <input type="email" name="email" className="block col-12 field"/>
                  <div className="col-12 col">
                    <input type="submit" className="btn btn-primary right mt2" value="Lägg till"/>
                  </div>
                </form>
            </div>
          </div>


        </div>
      )
    }
    else {
      return (
        <div className="text-center container">
          Eooyyy, detta kommer du inte åt om du inte är inloggad.
        </div>
      )
    }
  }
});
