UsersAll = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.users.find({}).fetch(),
      currentUser: Meteor.userId(),
    }
  },
  removeUser(e) {
    let id = $(e.currentTarget).parent().attr('data-id');


    if (window.confirm("Vill du ta bort användaren?")) {
      Meteor.users.remove(id);
    }
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
      return <li className="p2 mt1 border-bottom rounded" data-id={user._id} key={user._id}>{displayname} <small className="gray px2">{org_id}</small><a href="" className="btn btn-outline right">Redigera</a><a href="" onClick={ this.removeUser } className="btn btn-outline right mr2">Ta bort</a></li>;
    });
  },
  render() {
    let { currentUser } = this.data;

    if(currentUser) {
      return (
        <div className="text-center container">

          <div className="col-8 col bg-white">
            <div className="p2 border rounded">
              <h1 className="mt1">Användare</h1>
                <ul className="list-reset mb3">
                  {this.renderUsers()}
                </ul>
            </div>
          </div>

        </div>
      )
    }
    else {
      return (
        <div className="text-center container">
          Startsida för bokningssytemet
        </div>
      )
    }
  }
});
