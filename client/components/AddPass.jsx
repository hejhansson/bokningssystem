AddPass = React.createClass({

  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      pass: Pass.find({}, { sort: {createdAt: -1}}).fetch(),
      currentUser: Meteor.userId(),
    }
  },

  getInitialState() {
    return { date: this.getTodaysDate() }
  },

  getTodaysDate() {

    var d = new Date();

    var month = d.getMonth();
    if (month < 10) {
      month = "0" + month;
    }
    var date = d.getDate();
    if (date < 10) {
      date = "0" + date;
    }

    return d.getFullYear() + "-" + month + "-" + date;

  },

  handleDateChange(event) {
    this.setState({date: event.target.value})
  },

  handleSubmit(event) {
    event.preventDefault();
    var pass = event.target.add.value;

    Pass.insert({
      text: pass,
      createdAt: new Date(),
      user_id: this.data.currentUser
    });

    /*
    {
      org_id: org_id,
      author_id: Meteor.userId(),
      users: [],
      waiting: [],

      pass_namn: pass_namn,
      trainer: trainer_name,
      pass_date: pass_date
      pass_time: pass_time,
      pass_langd: pass_langd,
      pass_platser: pass_platser,

    }
    */
    FlowRouter.go('Home');
  },
  componentDidMount() {
  },
  render() {
    return (
      <div className="container">

          <form className="add-task col-6 mx-auto clearfix" onSubmit={ this.handleSubmit }>
            <h2 className="px2">Nytt pass</h2>
            <div className="col col-6 px2">
              <label>Passnamn</label>
              <input type="text" name="add" className="field col-12 block mb1" placeholder="" />
            </div>
            <div className="col col-6 px2">
              <label>Tränare</label>
              <input type="text" name="trainer" className="field col-12 block mb1" placeholder="" />
            </div>

            <div className="col col-6 px2 mt2">
              <label>Tid</label>
              <input type="text" name="start_time" className="field col-12 block mb1" placeholder="" />
            </div>

            <div className="col col-6 px2 mt2">
              <label>Längd <small className="gray">(i minuter)</small></label>
              <input type="text" name="length" className="field col-12 block mb1" placeholder="" />
            </div>

            <div className="col col-6 px2 mt2">
              <label>Platser</label>
              <input type="text" name="capacity" className="field col-12 block mb1" placeholder="" />
            </div>

            <div className="col col-6 px2 mt2">
              <label>Plats</label>
              <input type="text" name="capacity" className="field col-12 block mb1" placeholder="" />
            </div>

            <div className="col col-12 px2 mt2">
              <label>Datum</label>
              <input className="field block" onChange={ this.handleDateChange } value={ this.state.date } type="date"/>
            </div>

            <div className="col col-12 px2 mt2">
              <input className="btn right btn-primary" type="submit" value="Publicera"/>
            </div>

          </form>

          <div className="col-6 mx-auto mt4">
            <h2 className="px2">Hämta data från passmall</h2>
            <form className="px2">
              <select name="" id="" className="field col-6 block">
                <option value="">Välj pass</option>
                <option value="">Test</option>
                <option value="">Test</option>
                <option value="">Test</option>
                <option value="">Test</option>
              </select>
            </form>
          </div>
      </div>
    )
  }
});
