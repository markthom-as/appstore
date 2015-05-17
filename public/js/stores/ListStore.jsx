var Reflux = require('reflux');
var ListActions = require('./ListActions.jsx');

var _listItems = [];

var ListStore = Reflux.createStore({
  init: function() {
    this.listenTo(ListActions.loadComplete, this.onLoadComplete);
  },

  onLoadComplete: function(data) {
    _listItems = data;
    this.trigger(_listItems);
  },

  getItems: function() {
    return _listItems;
  }
});

module.exports = ListStore;
