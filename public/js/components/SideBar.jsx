var SideBar = React.createClass({
  render: function(){
    return (
        <div className="sidebar">
          {this.props.filters}
        </div>
      )
  }
});

module.exports = SideBar;
