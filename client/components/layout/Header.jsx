Header = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currentUser: Meteor.user(),
    }
  },
  handleLogout() {
    Meteor.logout();
  },
  render() {
    let loginButton, menu, adminMenu, superAdminMenu;
    let { currentUser } = this.data;

    if(currentUser) {
      loginButton = (
        <span>
          <a href="/profil" className="btn py2">{ currentUser.emails[0].address }</a>
          <a className="btn py2" href="/" onClick={ this.handleLogout }>Logga ut</a>
        </span>
      )
      menu = (
        <span>
          <span className={FlowHelpers.currentRoute( 'Home' )}><a href="/" className="btn py2">Mina bokningar</a></span>
        </span>
      )
      adminMenu = (
        <span>
          <span className={FlowHelpers.currentRoute( 'AddPass' )}><a href="/nytt-pass" className="btn py2">Lägg till pass</a></span>
          <span className={FlowHelpers.currentRoute( '' )}><a href="/nytt-pass" className="btn py2">Passmallar</a></span>
          <span className={FlowHelpers.currentRoute( 'Users' )}><a href={FlowHelpers.pathFor( 'Users' )} className="btn py2">Användare</a></span>
        </span>
      )
      superAdminMenu = (
        <span className="">
          <span className={FlowHelpers.currentRoute( 'Foretag' )}><a href="/foretag" className="border-left btn py2">Företag</a></span>
          <span className={FlowHelpers.currentRoute( 'UsersAll' )}><a href="/anvandare/all" className="btn py2">Användare</a></span>
        </span>
      )
    }
    else {
      loginButton = (
        <a className="btn py2" href="/login">Logga in / Registrera</a>
      )
    }

    return (
      <nav className="clearfix mb4 border-bottom">
        <div className="sm-col">
          <a href="/" className="btn py2 bold">Librly</a>
          { menu }
          { adminMenu }
          { superAdminMenu }
        </div>
        <div className="sm-col-right">
          { loginButton }
        </div>
      </nav>
    )
  }
});
