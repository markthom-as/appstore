var ListItem = React.createClass({
  render: function(){
    console.log(this.props.item);
    return (
        <div className="list-item">
          <img src="http://placehold.it/300/0bf/333&text=+" className="app-icon" />
          <span className="rank">{this.props.item["Rank"]}</span>
          <h3 className="app-title">{this.props.item["App Name"]}</h3>
        </div>
      )
  }
});

module.exports = ListItem;



// App ID: "469369175"
// App Name: "CSR Racing"
// Best Rank: "1"
// Bundle ID: "com.naturalmotion.csr4c3"
// Company Location: "United Kingdom"
// Company Name: "NaturalMotion"
// Company URL: "http://www.naturalmotiongames.com/"
// Developer: "NaturalMotion"
// Developer iTunes Link: "https://itunes.apple.com/us/artist/naturalmotion/id330281898?uo=4"
// Genre: "Games"
// Number of SDKs: "36"
// Price: "0.0"
// Rank: "2"
// Rating Count (All Versions): "656116"
// Release Date: "2012-06-28"
// Report: "https://mixrank.com/appstore/apps/469369175"
// Seller: "NaturalMotion Games Limited"
// Updated Date: "2015-04-27"
// Version: "2.7.2"
