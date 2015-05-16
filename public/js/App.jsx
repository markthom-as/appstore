var React = require('react');
window.React = React;
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;

// Include view components
var AppStoreView = require('./AppStoreView.jsx');

/* Main App */
var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function(){
    var name = this.context.router.getCurrentPath();
    return (
      <div>
        <div className="app-inner">
          <TransitionGroup component="div" transitionName="fade">
            <RouteHandler key={name} />
          </TransitionGroup>
        </div>
      </div>
      );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="home" handler={AppStoreView}/>
    <NotFoundRoute handler={AppStoreView}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});

