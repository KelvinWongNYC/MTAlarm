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
			
			}});

/* Delete Alarm */

 $("button").on("click",function() {
	
query.get(alarmId, {
  success: function(myObj) {
    // The object was retrieved successfully.
    myObj.destroy({});
    alert("The alarm has been deleted!")

  },
  error: function(object, error) {
  	console.log("No!")
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and description.
  }
})
});	


/* EDIT ALARM */

 $("#editAlarmform").on("submit", function(e) {
e.preventDefault();

query.find( {
  	
  	success: function(results) {
    results[0].save({alarmName: $("#alarmName").val()});
    results[0].save({alarmTime: $("#alarmTime").val()});
    results[0].save({alarmRepeat: $("#alarmRepeat").val()});
    results[0].save({subwayRoute: $("#subwayRoute").val()});
    results[0].save({timeAdjustment: $("#timeAdjustment").val()});
    alert("Changes saved!")


  }, 

  error: function(error) {
    // error is an instance of Parse.Error.
   }
})
});


};		
			var alarmId = getParameterByName('id');
				// Editing an existing alarm
				if (alarmId) {
				  getAlarm(alarmId);
				}
				// Just adding a new alarm
				else {
				  
				}
});





