$(document).on('ready', function() {
	Parse.initialize("Lw0kdb5nOpnVv0LgkMonOYbChoc9RAsiv1oOOaOE", "dJV1Bj0ZQeZ1lAxaQ4nKx40vrU90818dUKfTLU9m");
	TipObject = Parse.Object.extend("TipObject");

var query = new Parse.Query(TipObject);
query.find({
	success: function(alarms) {
		console.log(alarms);

		alarms.forEach(function(alarm) {
	
			/*for (var i = 0; i < alarm.attributes.subwayRoute.length; i++) {
    		console.log(alarm.attributes.subwayRoute.length);*/
    		
		$("#placeToPutAlarm").append('<h1><a href="edit.html?id=' + alarm.id + '">'  + alarm.attributes.alarmName + '</a></h1>' + 
			'<p>' + '<h2>' + alarm.attributes.alarmTime  + '</h2>' +
					'<br>' + alarm.attributes.alarmRepeat + 
					'<br><h1>' + 'Subway Routes ' + alarm.attributes.subwayRoute + 

					'<img src="subway/' + alarm.attributes.subwayRoute + '.png">' + 

					'<br></h1>' + alarm.attributes.timeAdjustment + ' minutes' +'<br>__________________________________________________________' +
					'</p>');
	/*}*/
		
		});
	},
	error: function(error) {
		alert("Error: " + error.code + " " + error.message);
	}

	

}); 
    
});