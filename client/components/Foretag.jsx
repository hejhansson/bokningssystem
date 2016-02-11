Foretag = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      org: Org.find({}).fetch(),
      currentUser: Meteor.userId(),
    }
  },
  removeUser(e) {
    let id = $(e.currentTarget).parent().attr('data-id');

    let users =  Meteor.users.find({'profile.org_id': id}).count();

    if(users != 0) alert('Företaget har användare och går därför inte att ta bort.');
    else {
      if (window.confirm("Vill du ta bort företaget?")) {
        Org.remove(id);
      }
    }
  },
  renderUsers() {
    let displayname;
    return this.data.org.map((org) => {

      var numberInOrg = Meteor.users.find({'profile.org_id': org._id}).count();

      return <li className="p2 mt1 border-bottom rounded" data-id={org._id} key={org._id}>{ org.name } <small className="gray p2">Antal i företaget: { numberInOrg }</small> <a href="" onClick={ this.removeUser } className="btn btn-outline right black">Ta bort</a></li>;
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
                <ul className="list-reset">
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
