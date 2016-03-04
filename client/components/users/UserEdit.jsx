UserEdit = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      pass: Pass.find({}, { sort: {createdAt: -1}}).fetch(),
      currentUser: Meteor.users.findOne(this.props.userId),
    }
  },
  getUser(param) {
  },
  render() {
    let { profile } = this.data.currentUser
    return (
      <div className="container clearfix">
        <div className="col col-8 bg-white border rounded p3">
          OrgID: { profile.org_id }
          <br/>
          UserID: { this.props.userId }
        </div>
      </div>
    )
  }
});
