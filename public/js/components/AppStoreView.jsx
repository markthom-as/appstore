var ListContainer = require('./ListContainer.jsx');

var AppStoreView = React.createClass({
  render: function(){
    return (
        <div>
          <h1><i className="fa fa-apple"></i> AppStore / Apps <i className="fa fa-share-alt pull-right"></i></h1>
          <ListContainer />
        </div>
      )
  }
});

module.exports = AppStoreView;