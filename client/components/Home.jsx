Home = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      pass: Pass.find({}, { sort: {createdAt: -1}}).fetch(),
      currentUser: Meteor.userId(),
    }
  },
  fixDate(date, e) {
    if(typeof date != undefined) {
      return date
    }
    return ''
  },
  handleBokning(e) {
    e.preventDefault()

    console.log('pass_id: ' + $(e.currentTarget).parent().attr('data-id'))
  },
  renderTasks() {
    return this.data.pass.map((pass) => {
      let date;
      if(pass.createdAt) {
        // ????????
        date = '' + pass.createdAt
      }
      else {
        date = ''
      }

      return <li className="mt3 mb2 relative col col-12 border rounded flex flex-center pass" data-id={ pass._id } key={ pass._id }>
          <span className="absolute pass-time">{ DateHelpers.isToday(date) }</span>
          <span className="py2 border-right px3 center">
            <h2 className="m0 inline-block">
              19:00
              <small className="block time">60 min</small>
            </h2>
          </span>
          <span className="py2 px2 col-3">
            <span className="blue bold">{pass.text}</span> <br/><small className=""><b>Instruktör</b><br/>Kalle Karlsson</small>
          </span>
          <span className="py2 px2 flex-auto">
            <br/><small className=""><b>Lediga platser</b><br/>21</small>
          </span>

          <span className="py2 px2 flex-auto">
            <br/><small className=""><b>Plats</b><br/>Sal C</small>
          </span>
          <a onClick={ this.handleBokning } className="btn btn-primary right mr2">Boka</a>
        </li>;
    });
  },
  renderBokningar() {
    return <div>
      <li className="flex border-bottom col-12 flex-center py2">
        <div className="flex-auto">
          <small className="block">Idag 19:00</small>
          <h4 className="m0">Body pump</h4>
        </div>
        <small className="btn bg-red white rounded h6">Avboka</small>
      </li>

      <li className="flex col-12 flex-center py2">
        <div className="flex-auto">
          <small className="block">12/02 19:00</small>
          <h4 className="m0">Crossfit</h4>
        </div>
        <small className="btn bg-red white rounded h6">Avboka</small>
      </li>
    </div>
  },
  renderVantlista() {
    return <div>
      <li className="flex border-bottom col-12 flex-center py2">
        <div className="flex-auto">
          <small className="block">12/02 19:00</small>
          <h4 className="m0">Crossfit</h4>
        </div>
        <small className="btn bg-darken-2 black rounded h6">Sluta vänta</small>
      </li>

      <li className="flex col-12 flex-center py2">
        <div className="flex-auto">
          <small className="block">Idag 19:00</small>
          <h4 className="m0">Body pump</h4>
        </div>
        <small className="btn bg-darken-2 black rounded h6">Sluta vänta</small>
      </li>
    </div>
  },
  render() {
    let { currentUser } = this.data

    if(currentUser) {
      return (
        <div className="text-center container">

          <div className="col col-3">
            <div className="p2 border rounded bg-white">
              <h3 className="mt1">Dina bokningar</h3>
              { this.renderBokningar() }
            </div>
            <div className="p2 border rounded mt3 bg-white">
              <h3 className="mt1">Din väntlista</h3>
              { this.renderVantlista() }
            </div>
          </div>

          <div className="col-8 right bg-white  mb4">
            <div className="p2 border rounded col col-12">
              <h1 className="mt1">Alla pass</h1>
                <ul className="list-reset">
                  { this.renderTasks() }
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
