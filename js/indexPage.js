$(document).on('ready', function() {
	Parse.initialize("Lw0kdb5nOpnVv0LgkMonOYbChoc9RAsiv1oOOaOE", "dJV1Bj0ZQeZ1lAxaQ4nKx40vrU90818dUKfTLU9m");
	TipObject = Parse.Object.extend("TipObject");

var query = new Parse.Query(TipObject);
query.find({
	success: function(alarms) {
		console.log(alarms);

		alarms.forEach(function(alarm) {
	/*What should I add after "add.html?"*/
		$("#placeToPutAlarm").append('<h1><a href="edit.html?id=' + alarm.id + '">'  + alarm.attributes.alarmName + '</a></h1>' + 
			'<p>' + '<h2>' + alarm.attributes.alarmTime  + '</h2>' +
					'<br>' + alarm.attributes.alarmRepeat + 
					'<br><h1>' + 'Subway Routes ' + alarm.attributes.subwayRoute + 
					'<br></h1>' + alarm.attributes.timeAdjustment + '<br>---------' +
					'</p>');
		console.log(alarm.attributes.subwayRoute)

		});
	},
	error: function(error) {
		alert("Error: " + error.code + " " + error.message);
	}

/*What was the function & if/else statement do I need here? 
	var query = new Parse.Query(TipObject);
	query.get({
  	success: function(alarms) {

		var alarmName = $("#alarmName").val(alarm.attributes.alarmName);
		var alarmTime = $("#alarmTime").val(alarm.attributes.alarmTime);
		var alarmRepeat = $("#alarmRepeat").valalarm.attributes.alarmRepeat();
		var subwayRoute = $("#subwayRoute").val(alarm.attributes.subwayRoute);
		var timeAdjustment = $("#timeAdjustment").val(alarm.attributes.timeAdjustment);
		var button = $("#addTipBtn").val("Save")


	function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' ')); 
} */
	

}); 
    
});