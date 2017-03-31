var url, data, usernames = [];

$(document).ready(function(){
	url = "https://wind-bow.gomix.me/twitch-api/streams/";
	usernames = ["ESL_SC2", 
							"OgamingSC2", 
							"cretetion", 
							"freecodecamp", 
							"storbeck", 
							"habathcx", 
							"RobotCaleb", 
							"noobs2ninjas"];
	
  $.ajax({
		url: url + usernames[0],
		method: 'GET',
		dataType: 'jsonp',
		data: data,
		success: function (response) {
			console.log(response);
		},
		error: function(err) {
			alert(err);
		}
	});
});

//1. forEach loop trough usernames
//2. render when online Object.stream.channel.links.
// - pic = logo
// - description = status
// - href = url