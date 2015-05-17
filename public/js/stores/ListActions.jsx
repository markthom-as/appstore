var Reflux = require('reflux');

var data = [{
    "App Name": "Clash of Clans",
    "Updated Date": "2015-05-05",
    "App ID": "529479190",
    "Number of SDKs": "11",
    "Rating Count (All Versions)": "1422019",
    "Developer iTunes Link": "https://itunes.apple.com/us/artist/supercell/id488106216?mt=8",
    "Bundle ID": "com.supercell.magic",
    "Best Rank": "1",
    "Company URL": "",
    "Company Location": "Finland",
    "Version": "7.65.2",
    "Rank": "1",
    "Release Date": "2012-06-14",
    "Genre": "Games",
    "Seller": "Supercell Oy",
    "Report": "https://mixrank.com/appstore/apps/529479190",
    "Price": "0.0",
    "Company Name": "Supercell",
    "Developer": "Supercell"
}, {
    "App Name": "CSR Racing",
    "Updated Date": "2015-04-27",
    "App ID": "469369175",
    "Number of SDKs": "36",
    "Rating Count (All Versions)": "656116",
    "Developer iTunes Link": "https://itunes.apple.com/us/artist/naturalmotion/id330281898?uo=4",
    "Bundle ID": "com.naturalmotion.csr4c3",
    "Best Rank": "1",
    "Company URL": "http://www.naturalmotiongames.com/",
    "Company Location": "United Kingdom",
    "Version": "2.7.2",
    "Rank": "2",
    "Release Date": "2012-06-28",
    "Genre": "Games",
    "Seller": "NaturalMotion Games Limited",
    "Report": "https://mixrank.com/appstore/apps/469369175",
    "Price": "0.0",
    "Company Name": "NaturalMotion",
    "Developer": "NaturalMotion"
}, {
    "App Name": "Smurfs' Village",
    "Updated Date": "2015-05-12",
    "App ID": "399648212",
    "Number of SDKs": "11",
    "Rating Count (All Versions)": "523525",
    "Developer iTunes Link": "https://itunes.apple.com/us/artist/beeline-interactive-inc./id289070562?mt=8",
    "Bundle ID": "com.capcommobile.smurfs",
    "Best Rank": "1",
    "Company URL": "http://beeline-i.com/product.php?id=59",
    "Company Location": "California, United States",
    "Version": "1.16.1",
    "Rank": "3",
    "Release Date": "2010-11-07",
    "Genre": "Games",
    "Seller": "Beeline Interactive, Inc.",
    "Report": "https://mixrank.com/appstore/apps/399648212",
    "Price": "0.0",
    "Company Name": "Beeline Interactive, Inc.",
    "Developer": "Beeline Interactive, Inc."
}, {
    "App Name": "Zynga Poker - Texas Holdem",
    "Updated Date": "2015-05-04",
    "App ID": "354902315",
    "Number of SDKs": "24",
    "Rating Count (All Versions)": "344252",
    "Developer iTunes Link": "https://itunes.apple.com/us/artist/zynga-inc./id295913422?mt=8",
    "Bundle ID": "com.zynga.livepoker.700",
    "Best Rank": "1",
    "Company URL": "http://forums.zynga.com/forumdisplay.php?60-Zynga-Poker",
    "Company Location": "California, United States",
    "Version": "20.88",
    "Rank": "4",
    "Release Date": "2010-05-14",
    "Genre": "Games",
    "Seller": "Zynga Inc.",
    "Report": "https://mixrank.com/appstore/apps/354902315",
    "Price": "0.0",
    "Company Name": "Zynga",
    "Developer": "Zynga Inc."
}, {
    "App Name": "Calorie Counter & Diet Tracker by MyFitnessPal",
    "Updated Date": "2015-05-15",
    "App ID": "341232718",
    "Number of SDKs": "22",
    "Rating Count (All Versions)": "450620",
    "Developer iTunes Link": "https://itunes.apple.com/us/artist/myfitnesspal.com/id341232721?mt=8",
    "Bundle ID": "com.myfitnesspal.mfp",
    "Best Rank": "1",
    "Company URL": "http://www.myfitnesspal.com/iphone",
    "Company Location": "California, United States",
    "Version": "6.0.1",
    "Rank": "5",
    "Release Date": "2009-12-08",
    "Genre": "Health & Fitness",
    "Seller": "MyFitnessPal LLc",
    "Report": "https://mixrank.com/appstore/apps/341232718",
    "Price": "0.0",
    "Company Name": "MyFitnessPal",
    "Developer": "MyFitnessPal.com"
}, {
    "App Name": "Tumblr",
    "Updated Date": "2015-04-30",
    "App ID": "305343404",
    "Number of SDKs": "15",
    "Rating Count (All Versions)": "268875",
    "Developer iTunes Link": "https://itunes.apple.com/us/artist/tumblr/id305343407?mt=8",
    "Bundle ID": "com.tumblr.tumblr",
    "Best Rank": "2",
    "Company URL": "https://tumblr.com/",
    "Company Location": "New York, United States",
    "Version": "4.0.2",
    "Rank": "6",
    "Release Date": "2009-02-25",
    "Genre": "Social Networking",
    "Seller": "Tumblr, Inc.",
    "Report": "https://mixrank.com/appstore/apps/305343404",
    "Price": "0.0",
    "Company Name": "Tumblr",
    "Developer": "Tumblr"
}, {
    "App Name": "Hay Day",
    "Updated Date": "2015-05-01",
    "App ID": "506627515",
    "Number of SDKs": "12",
    "Rating Count (All Versions)": "436481",
    "Developer iTunes Link": "https://itunes.apple.com/us/artist/supercell/id488106216?mt=8",
    "Bundle ID": "com.supercell.soil",
    "Best Rank": "1",
    "Company URL": "",
    "Company Location": "Finland",
    "Version": "1.24.92",
    "Rank": "7",
    "Release Date": "2012-05-04",
    "Genre": "Games",
    "Seller": "Supercell Oy",
    "Report": "https://mixrank.com/appstore/apps/506627515",
    "Price": "0.0",
    "Company Name": "Supercell",
    "Developer": "Supercell"
}, {
    "App Name": "Pinterest",
    "Updated Date": "2015-05-14",
    "App ID": "429047995",
    "Number of SDKs": "27",
    "Rating Count (All Versions)": "920187",
    "Developer iTunes Link": "https://itunes.apple.com/us/artist/pinterest-inc./id328135727?mt=8",
    "Bundle ID": "pinterest",
    "Best Rank": "1",
    "Company URL": "http://www.pinterest.com",
    "Company Location": "United States",
    "Version": "4.7.2",
    "Rank": "8",
    "Release Date": "2011-04-28",
    "Genre": "Social Networking",
    "Seller": "Pinterest, Inc.",
    "Report": "https://mixrank.com/appstore/apps/429047995",
    "Price": "0.0",
    "Company Name": "Pinterest",
    "Developer": "Pinterest, Inc."
}, {
    "App Name": "Groupon - Deals, Coupons & Shopping: Local Restaurants, Hotels, Yoga & Spas",
    "Updated Date": "2015-05-05",
    "App ID": "352683833",
    "Number of SDKs": "24",
    "Rating Count (All Versions)": "376095",
    "Developer iTunes Link": "https://itunes.apple.com/us/artist/groupon-inc./id350020099?mt=8",
    "Bundle ID": "com.groupon.grouponapp",
    "Best Rank": "1",
    "Company URL": "http://www.groupon.com/app/iphone",
    "Company Location": "Illinois, United States",
    "Version": "3.11",
    "Rank": "9",
    "Release Date": "2010-02-27",
    "Genre": "Lifestyle",
    "Seller": "Groupon, Inc.",
    "Report": "https://mixrank.com/appstore/apps/352683833",
    "Price": "0.0",
    "Company Name": "Groupon",
    "Developer": "Groupon, Inc."
}, {
    "App Name": "Google",
    "Updated Date": "2015-05-14",
    "App ID": "284815942",
    "Number of SDKs": "10",
    "Rating Count (All Versions)": "467977",
    "Developer iTunes Link": "https://itunes.apple.com/us/artist/google-inc./id281956209?mt=8",
    "Bundle ID": "com.google.GoogleMobile",
    "Best Rank": "1",
    "Company URL": "http://www.google.com/mobile/iphone/",
    "Company Location": "California, United States",
    "Version": "5.4.0",
    "Rank": "10",
    "Release Date": "2008-07-11",
    "Genre": "Utilities",
    "Seller": "Google, Inc.",
    "Report": "https://mixrank.com/appstore/apps/284815942",
    "Price": "0.0",
    "Company Name": "Google, Inc",
    "Developer": "Google, Inc."
}];

var ListActions = Reflux.createActions([
  'loadItems',
  'loadComplete'
]);

//generates filters based on current set of items
var makeFilters = function(data){
  var itemList = data;
  var filterList = {};

  // Manually set filter categories
  filterList.genre = [];
  itemList.forEach(function(item){
    if(filterList.genre.indexOf(item['Genre']) === -1){
      filterList.genre.push(item['Genre']);
    }
  });

  return {
    itemList: itemList,
    filterList: filterList
  };

};

ListActions.loadItems.preEmit = function() {
  // #### Disabling AJAX Call due to CORS issue ####
  // $.ajax({
  //   type: 'GET',
  //   url: 'https://mixrank.com/appstore/apps?render=json'
  // }).done(function(data) {
  //   data = JSON.parse(data);
  //   ListActions.loadComplete(data);
  // });

  ListActions.loadComplete(makeFilters(data));
}

module.exports = ListActions;
