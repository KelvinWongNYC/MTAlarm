//shows current time
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    } return i;
	}
	var currentTime = new Date();
	var hours = addZero(currentTime.getHours());
	var minutes = addZero(currentTime.getMinutes());
	var currentTime = hours + ":" + minutes
	console.log(currentTime)

//shows current day
	var d = new Date();
	var weekday = new Array(7);
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	var currentDay = weekday[d.getDay()];
	console.log(currentDay);

//Parse - finding all the alarms

Parse.initialize("Lw0kdb5nOpnVv0LgkMonOYbChoc9RAsiv1oOOaOE", "dJV1Bj0ZQeZ1lAxaQ4nKx40vrU90818dUKfTLU9m");
	TipObject = Parse.Object.extend("TipObject");
	var query = new Parse.Query(TipObject);
	query.find({
		success: function(alarms) {
			console.log(alarms);

	alarms.forEach(function(alarm) {
		
	//separating the days if alarm settings has more than repeat day (not sure if I am doing this part correctly)

			var alarmTime = alarm.attributes.alarmTime; 
			console.log(alarmTime);

			for (var i = 0; i < alarm.attributes.alarmRepeat.length; i++) {	
				var alarmRepeat = alarm.attributes.alarmRepeat[i]
				console.log(alarmRepeat);
			} 
			
			
			//The console should print the message if condition is true (this part does work)

			if (alarmRepeat == currentDay && alarmTime == currentTime) {
						console.log("Alarm should ring");
					} else {
						console.log("Do nothing");
					} 
			

