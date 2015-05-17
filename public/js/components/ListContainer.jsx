var ListStore = require('../stores/ListStore.jsx');
var ListActions = require('../stores/ListActions.jsx');
var SideBar = require('./SideBar.jsx');
var List = require('./List.jsx');

var ListContainer = React.createClass({
  getInitialState: function() {
    return {
      itemList: [],
      filterList: [],
    }
  },
  componentWillMount: function() {
    this.unsubscribe = ListStore.listen(this.onListChange);
    ListActions.loadItems();
  },
  onListChange: function(data) {
    this.setState({
      itemList: data.itemList,
      filterList: data.filterList
    });
  },
  render: function(){
    return (
        <div className="list-container">
          <SideBar filters={this.state.filterList}/>
          <List items={this.state.itemList}/>
        </div>
      )
  }
});

module.exports = ListContainer;
