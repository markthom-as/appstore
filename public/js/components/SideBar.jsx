var SideBar = React.createClass({
  render: function(){
    return (
        <div className="sidebar">
          <input className="search">Search</input>
          <ul className="filters">
            {this.props.filters}
          </ul>
        </div>
      )
  }
});

module.exports = SideBar;
