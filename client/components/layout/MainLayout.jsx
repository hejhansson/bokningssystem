MainLayout = React.createClass({
  propTypes: {},
  mixins: [],
  getMeteorData() {

  },
  render() {
    return (
        <div>
          <header className="bg-white">{this.props.header}</header>  
          {this.props.content}
          {this.props.footer}
        </div>
    )
  }
});
