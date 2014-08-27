	//shows current time
	function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
	}

	var currentTime = new Date();
	var hours = addZero(currentTime.getHours());
	var minutes = addZero(currentTime.getMinutes());
	var currentTime = hours + ":" + minutes;		
	console.log(currentTime);
	
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

//UserInput = Current Time
	Parse.initialize("Lw0kdb5nOpnVv0LgkMonOYbChoc9RAsiv1oOOaOE", "dJV1Bj0ZQeZ1lAxaQ4nKx40vrU90818dUKfTLU9m");
	TipObject = Parse.Object.extend("TipObject");
	var query = new Parse.Query(TipObject);
	query.find({
		success: function(alarms) {
			console.log(alarms);
			alarms.forEach(function(alarm) {
			 
			var alarmTime = alarm.attributes.alarmTime;
			
			var subwayRoute = alarm.attributes.subwayRoute;
			 for (var i = 0; i < alarm.attributes.subwayRoute.length; i++) {	
				var subwayRoute = alarm.attributes.subwayRoute[i]
				console.log(subwayRoute);
			}

			  for (var i = 0; i < alarm.attributes.alarmRepeat.length; i++) {	
				var alarmRepeat = alarm.attributes.alarmRepeat[i]
				console.log(alarmRepeat)} 

			if (alarmRepeat == currentDay && alarmTime == currentTime) {
						console.log("Hello");
					} else {
						console.log("Turn alarm off");
					}

			//if (subwayRoute == )	
					
			//array 
			//var alarmRepeat = alarm.attributes.alarmRepeat;
			//var name = alarmRepeat[2];

		//if current time = alarmTime minus 1 hour

		//if 7th ave == delayed, then minus whatever minutes from Parse from alarmTime, ring alarm
		//if MTA == service change OR delay , then change alarm || else 
		// if alarmTIme == Time and day of the week, then 
		// if there is a delay that happens after set back time, just ring - as long as it is before 
			
			var MTAUrl = "http://web.mta.info/status/serviceStatus.txt";
			var url    = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'" + encodeURIComponent(MTAUrl) + "'%3B&format=json&callback=?";
			$.getJSON(url, function(data) {
			 console.log(data);
			 var seventhAve = data.query.results.service.subway.line[0].status;
			 var lexington = data.query.results.service.subway.line[1].status;
			 var flushing = data.query.results.service.subway.line[2].status;
			 var eigthAve = data.query.results.service.subway.line[3].status;
			 var sixthAve = data.query.results.service.subway.line[4].status;
			 var bklynQueensCrosstown = data.query.results.service.subway.line[5].status;
			 var nassau = data.query.results.service.subway.line[6].status;
			 var canarsie = data.query.results.service.subway.line[7].status;
			 var broadway = data.query.results.service.subway.line[8].status;
			 var shuttle = data.query.results.service.subway.line[9].status;
			 
			 // Relevant data is in data.query.results.service
			})

/* 
			if (alarmTime == currentTime) {
				console.log("You coded a working alarm!");
				alert("Wake up!");

			} else {
				console.log("Don't wake up yet!");
				//alert("Yay");
			}	*/

			}

			);

		},


		}); 




