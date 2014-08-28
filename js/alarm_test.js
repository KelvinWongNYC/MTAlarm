//shows current day and time
	//current time
	
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


	/* if (minutes < 10)
	minutes = "0" + minutes

	var suffix = "AM";
	if (hours >= 12) {
	suffix = "PM";
	hours = hours - 12;
	}
	if (hours == 0) {
	hours = 12;
	}*/
	/* var time = hours + ":" + minutes + " " + suffix
	var timeAndday = n + " " + time */

//UserInput = Current Time
	Parse.initialize("Lw0kdb5nOpnVv0LgkMonOYbChoc9RAsiv1oOOaOE", "dJV1Bj0ZQeZ1lAxaQ4nKx40vrU90818dUKfTLU9m");
	TipObject = Parse.Object.extend("TipObject");
	var query = new Parse.Query(TipObject);
	query.find({
		success: function(alarms) {
			//console.log(alarms);
			alarms.forEach(function(alarm) {

			var MTAUrl = "http://web.mta.info/status/serviceStatus.txt";
			var url    = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'" + encodeURIComponent(MTAUrl) + "'%3B&format=json&callback=?";
			$.getJSON(url, function(data) {
			//STATUS - GOOD SERVICE/DELAYS/SERVICE CHANGES/PLANNED WORK
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
			 //console.log(data.query.results.service.subway.line[0].text)
			 // Relevant data is in data.query.results.service

				// have an array of the trains, 
					var subwayLines = {
					seventhAve: ["1", "2", "3"],
					lexington: ["4", "5", "6"],
					flushing: ["7"],
					eigthAve: ["A", "C", "E"],
					sixthAve: ["B", "D", "F", "M"],
					bklynQueensCrosstown: ["G"],
					nassau: ["J", "Z"],
					canarsie: ["L"],
					broadway: ["N","Q","R"],
					shuttle: ["S"],
				}

				for (var i = 0; i < alarm.attributes.subwayRoute.length; i++) {	
				var subwayRoute = alarm.attributes.subwayRoute[i];
				console.log(subwayRoute);
		// probably an hour before the alarmTime, check the service status
		
					// 1,2,3 trains
							if (subwayRoute == subwayLines.seventhAve[0] || subwayRoute == subwayLines.seventhAve[1] ||subwayRoute == subwayLines.seventhAve[2]) {
								if (seventhAve == "DELAYS" || seventhAve == "SERVICE CHANGE") {
										//alert the user
										//change alarm time
										//change stuff in Parse!
										var query = new Parse.Query(TipObject);
										query.get(alarm.id, {
										  success: function(object) {


										  },

										  error: function(object, error) {
										    console.log("OPPS!");
										  }

										});

										query.find( {
										  	success: function(results) {
										    results[0].save({alarmTime: newAlarm});
										}
									});
								}		
									
								else {
									console.log("No delays 1 2 3");
								}
							}
					//4, 5, 6 trains		
								else if (subwayRoute == subwayLines.lexington[0] || subwayRoute == subwayLines.lexington[1] || subwayRoute == subwayLines.lexington[2]) {
									if (lexington == "DELAYS" || lexington == "SERVICE CHANGE") {
									console.log("Delays 4 5 6");
								}
								else {
									console.log("No delays 4 5 6");
								}
							}
					// 7		
								else if (subwayRoute == subwayLines.flushing[0]) {
										if (flushing == "DELAYS" || flushing == "SERVICE CHANGE") {
											console.log("Delays 7");
										}
										else {
											console.log("No delays 7");
									}
								}
					//A,C, E trains
								else if (subwayRoute == subwayLines.eigthAve[0] || subwayRoute == subwayLines.eigthAve[1] || subwayRoute == subwayLines.eigthAve[2]) {
									if (eigthAve == "DELAYS" || eigthAve == "SERVICE CHANGE") {
									console.log("Delays A C E");
								}
								else {
											console.log("No delays A C E");
									}
							}
					//BDFM trains 
							else if (subwayRoute == subwayLines.sixthAve[0] || subwayRoute == subwayLines.sixthAve[1] || subwayRoute == subwayLines.sixthAve[2] || subwayRoute == subwayLines.sixthAve[3]) {
									if (sixthAve == "DELAYS" || sixthAve == "SERVICE CHANGE") {
									console.log("Delays B D F M"); }
									else {
										console.log("No delays B D F M");
								}
							}
					//G TRAINS MAKE CHANGES!
							else if (subwayRoute == subwayLines.bklynQueensCrosstown[0]) {
										if (bklynQueensCrosstown == "DELAYS" || bklynQueensCrosstown == "SERVICE CHANGE") {
											console.log("Delays G");
										}
										else {
											console.log("No delays G");
									}
								}
					// J/Z TRAINS 
							else if (subwayRoute == subwayLines.nassau[0] || subwayRoute == subwayLines.nassau[1]) {
										if (nassau == "DELAYS" || nassau == "SERVICE CHANGE") {
											console.log("Delays J Z");
										}
										else {
											console.log("No delays J Z");
									}
								}			
					// L TRAINS
							else if (subwayRoute == subwayLines.canarsie[0]) {
										if (canarsie == "DELAYS" || canarsie == "SERVICE CHANGE") {
											console.log("Delays L");
										}
										else {
											console.log("No delays L");
									}
								}
					//N Q R		
							else if (subwayRoute == subwayLines.broadway[0] || subwayRoute == subwayLines.broadway[1] || subwayRoute == subwayLines.broadway[2]) {
									if (broadway == "DELAYS" || broadway == "SERVICE CHANGE") {
									console.log("Delays N Q R");
								}
								else {
											console.log("No delays N Q R");
									}
							}
					//shuttle
							else if (subwayRoute == subwayLines.shuttle[0]) {
									if (shuttle == "DELAYS" || shuttle == "SERVICE CHANGE") {
									console.log("Delays N Q R");
								}
								else {
											console.log("No delays N Q R");
									}
							}
						else {
							console.log("no trains found");
						}
					} 
					/*
			for (var i = 0; i < subwayLines.seven.length; i++) {
				var newSeven = subwayLines.seven[i];
				console.log(newSeven);
				}	*/

			
			//CHANGING ALARM AUTOMATICALLY
			var alarmTime = alarm.attributes.alarmTime; 
			var splitAlarmTime = alarmTime.split(":");
			var hourAlarm = splitAlarmTime[0];
			var minutesAlarm = splitAlarmTime[1];
			var timeAdjustment = alarm.attributes.timeAdjustment;	

			if (minutesAlarm <= 0 ) {
				var newHour = hourAlarm - 1;
				var newMinutes = minutesAlarm + 60 - timeAdjustment;
				var newAlarm = newHour + ":" + newMinutes;
				console.log(newAlarm);
				console.log("Working");
			}
			else 	{
				var newHour = hourAlarm;
				var newMinutes = minutesAlarm - timeAdjustment;
				var newAlarm = newHour + ":" + newMinutes;
				console.log("not working");
			}

			//EVERYTHING BELOW HERE -- DO NOT TOUCH
			for (var i = 0; i < alarm.attributes.alarmRepeat.length; i++) {	
				var alarmRepeat = alarm.attributes.alarmRepeat[i]
				console.log(alarmRepeat);
			} 
			if (alarmRepeat == currentDay && alarmTime == currentTime) {
						console.log("Hi?");
					} else {
						console.log("Turn alarm off");
					} 
			});

		}) //this closing tag is from the MTA alarm thing above

		},


	}); 




