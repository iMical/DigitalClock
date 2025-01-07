$(document).ready(function(){
	function displayTime(){
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
	}
});

var clockDiv = document.getElementById('clock');
clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;

setInterval(displayTime, 1000);

if (seconds < 10) {
	seconds = "0" + seconds;
}

var meridiem = "AM";

if (hours > 12) {
	hours = hours - 12;
	merdiem = "PM";
}

if (hours === 0) {
	hours = 12;
}

displayTime();