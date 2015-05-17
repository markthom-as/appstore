var React = require('react');
window.React = React;
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var RouteHandler = Router.RouteHandler;

// Include view + static components
var NavBar = require('./NavBar.jsx');
var AppStoreView = require('./AppStoreView.jsx');
var Footer = require('./Footer.jsx');

/* Main App */
var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function(){
    var name = this.context.router.getCurrentPath();
    return (
      <div>
        <NavBar />
        <div className="app-inner">
          <TransitionGroup component="div" transitionName="fade">
            <RouteHandler key={name} />
          </TransitionGroup>
        </div>
        <Footer />
      </div>
      );
  }
});

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={AppStoreView}/>
    <NotFoundRoute handler={AppStoreView}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});

