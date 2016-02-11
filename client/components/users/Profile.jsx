Profile = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user(),
    }
  },
  render() {
    let { currentUser } = this.data, org_name;
    if(currentUser && currentUser.profile.org_id) org_name = Org.findOne(currentUser.profile.org_id).name;
    else org_name = 'Du är inte associerad med något företag'

    return (
      <div className="container">
        <div className="col col-8 bg-white p2 border rounded">
          <h1 className="mt1">Profil</h1>
          <p>E-mail: { currentUser.emails[0].address }</p>
          <p>Företag: { org_name }</p>
        </div>
      </div>
    )
  }
});
