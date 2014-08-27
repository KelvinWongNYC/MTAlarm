

//shows current day and time
	//current time
	var currentTime = new Date()
	var hours = currentTime.getHours()
	var minutes = currentTime.getMinutes()

	if (minutes < 10)
	minutes = "0" + minutes

	var suffix = "AM";
	if (hours >= 12) {
	suffix = "PM";
	hours = hours - 12;
	}
	if (hours == 0) {
	hours = 12;
	}

	//24 hr time
	var hoursTwo = currentTime.getHours()
	var minutesTwo = currentTime.getMinutes()
	var Time = hoursTwo + ":" + minutesTwo

	//current day
	var d = new Date();
	var weekday = new Array(7);
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	var n = weekday[d.getDay()];

	var time = hours + ":" + minutes + " " + suffix
	var timeAndday = n + " " + time

	document.write(timeAndday)
	

//UserInput = Current Time
	Parse.initialize("Lw0kdb5nOpnVv0LgkMonOYbChoc9RAsiv1oOOaOE", "dJV1Bj0ZQeZ1lAxaQ4nKx40vrU90818dUKfTLU9m");
	TipObject = Parse.Object.extend("TipObject");
	var query = new Parse.Query(TipObject);
	query.find({
		success: function(alarms) {
			//console.log(alarms);
			/*var s = '';
			for(var i=0, len=alarms.length; i<len; i++) {
				var result = alarms[i];
				console.dir(result);
				s+= '<p>';
				s+= '<b>ID:</b> '+ result.id + '<br/>';
				s+= 'Created: ' + result.createdAt + '<br/>';
				s+= 'Number of Cows: ' + result.attributes.numcows + '<br/>';
				s+= 'How Dangerous?: ' + result.attributes.howdangerous + '<br/>';
				s+= 'Comments: ' + result.attributes.comments;
				s+= '</p>';
			}
			$("#tipdisplay").html(s); */
			alarms.forEach(function(alarm) {
			var alarmTime = alarm.attributes.alarmTime 
			if (alarmTime == Time) {
				console.log("You coded a working alarm!")
			}

			}

			);

		},


	}); 




