$(document).on('ready', function() {
	Parse.initialize("Lw0kdb5nOpnVv0LgkMonOYbChoc9RAsiv1oOOaOE", "dJV1Bj0ZQeZ1lAxaQ4nKx40vrU90818dUKfTLU9m");
	TipObject = Parse.Object.extend("TipObject");

    $("#addAlarmform").on("submit", function(e) {
		e.preventDefault();
		//get values
		var alarmName = $("#alarmName").val();
		var alarmTime = $("#alarmTime").val();
		var alarmRepeat = $("#alarmRepeat").val();
		var subwayRoute = $("#subwayRoute").val();
		var timeAdjustment = $("#timeAdjustment").val();
		//TBD: Validation
			var tip = new TipObject();
			tip.save(
					{
						alarmName:alarmName,
						alarmTime:alarmTime,
						alarmRepeat:alarmRepeat,
						subwayRoute:subwayRoute,
						timeAdjustment:timeAdjustment,
					},{
						success:function(object) {
							document.location.href='index.html';
							/*doAlert("Tip Saved!", function() {
								document.location.href='index.html';
							});*/
						},
						error:function(model, error) {
							console.log("Error saving");
						}
					});
		 
		});
});
	

	/*var alarmId = getParameterByName('id');
				// Editing an existing alarm
				if (alarmId) {
				  getAlarm(alarmId);
				  document.write("getalarmstuffz")
				}
				// Just adding a new alarm
				else {
				  // There's probably nothing that will go in here
				}*/

	   


//});


