let pathFor = ( path, params ) => {
  let query = params && params.query ? FlowRouter._qs.parse( params.query ) : {};
  return FlowRouter.path( path, params, query );
};

let urlFor = ( path, params ) => {
  return Meteor.absoluteUrl( pathFor( path, params ) );
};

let currentRoute = ( route ) => {
  FlowRouter.watchPathChange();
  return FlowRouter.current().route.name === route ? 'active' : '';
};

FlowHelpers = {
  pathFor: pathFor,
  urlFor: urlFor,
  currentRoute: currentRoute
};

let isToday = ( day ) => {
  var d1 = new Date(day)
  var d2 = new Date();
	if(d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate()) {
    return 'Idag'
  }
  else {
    return DateHelpers.niceDate(day);
  }
};

let niceDate = ( day ) => {
  return moment(new Date(day)).format('MMMM Do');
};

DateHelpers = {
  isToday: isToday,
  niceDate: niceDate,
}
