var NavBar = React.createClass({
  render: function(){
    return (
        <div className="navbar">
          <img src="https://mixrank.com/static/images/logo.png?159" className="logo pull-left" />
          <div className=" navbar-right pull-right">
            <a href="#">Browse <b className="caret"></b></a>
            <a href="#"> <i className="fa fa-gear"></i></a>
          </div>


        </div>
      )
  }
});

module.exports = NavBar;
