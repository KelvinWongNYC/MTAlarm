$(document).on('ready', function() {
	Parse.initialize("Lw0kdb5nOpnVv0LgkMonOYbChoc9RAsiv1oOOaOE", "dJV1Bj0ZQeZ1lAxaQ4nKx40vrU90818dUKfTLU9m");
	TipObject = Parse.Object.extend("TipObject");

	function getParameterByName(name) {
		    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
		    return match && decodeURIComponent(match[1].replace(/\+/g, ' ')); 
			};	
	function getAlarm() {
			var query = new Parse.Query(TipObject);
			query.get(alarmId , {
		  	success: function(alarm) {
				var alarmName = $("#alarmName").val(alarm.attributes.alarmName);
				var alarmTime = $("#alarmTime").val(alarm.attributes.alarmTime);
				var alarmRepeat = $("#alarmRepeat").val(alarm.attributes.alarmRepeat);
				var subwayRoute = $("#subwayRoute").val(alarm.attributes.subwayRoute);
				var timeAdjustment = $("#timeAdjustment").val(alarm.attributes.timeAdjustment);
				var addTipBtn = $("#addTipBtn").val("Save")
			}
			});
};		
			var alarmId = getParameterByName('id');
				// Editing an existing alarm
				if (alarmId) {
				  getAlarm(alarmId);
				}
				// Just adding a new alarm
				else {
				  document.location.href='add.html';
				}
});

  $("#addAlarmform").on("submit", function(e) {
			e.preventDefault();
			//get values
			var alarmId = getParameterByName('id');
			if (alarmId) {
				var query = new Parse.Query(TipObject);
				query.save(
							alarmId , {
		  								success: function(alarm) {

		  									alarm.set("alarmName",$("#alarmName").val(alarm.attributes.alarmName));
		  									alarm.set("alarmTime", $("#alarmTime").val(alarm.attributes.alarmTime));
											alarm.set("alarmRepeat", $("#alarmRepeat").val(alarm.attributes.alarmRepeat));
											alarm.set("subwayRoute", $("#subwayRoute").val(alarm.attributes.subwayRoute));
											alarm.set("timeAdjustment", $("#timeAdjustment").val(alarm.attributes.timeAdjustment));
				/* var alarmName.set = $("#alarmName").val(alarm.attributes.alarmName);
				var alarmTime.set = $("#alarmTime").val(alarm.attributes.alarmTime);
				var alarmRepeat.set = $("#alarmRepeat").val(alarm.attributes.alarmRepeat);
				var subwayRoute.set = $("#subwayRoute").val(alarm.attributes.subwayRoute);
				var timeAdjustment.set = $("#timeAdjustment").val(alarm.attributes.timeAdjustment); */
											alarm.save();
											}
										}
							);
			}
			else {
			document.write("reaching????");
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
						}, {
							success:function(object) {
								document.location.href='index.html';
								/*doAlert("Tip Saved!", function() {
									document.location.href='index.html';
								});*/
							},
							error:function(model, error) {
								console.log("Error saving");
							}
					})			
			}};
};
//});
//});

