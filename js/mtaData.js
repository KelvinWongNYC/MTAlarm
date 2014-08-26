var MTAUrl = "http://web.mta.info/status/serviceStatus.txt";
var url    = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'" + encodeURIComponent(MTAUrl) + "'%3B&format=json&callback=?";

$.getJSON(url, function(data) {
 console.log(data);
 console.log(data.query.results.service.subway.line[0].status);
 // Relevant data is in data.query.results.service
});
