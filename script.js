var launch = new Date("Sept 9, 2021 16:30:00 EST").getTime();

var x = setInterval(function() {
  var today = new Date().getTime();
  var distance = launch - today;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countdownDays").innerHTML = days;
  document.getElementById("countdownHours").innerHTML = hours;
  document.getElementById("countdownMin").innerHTML = minutes;
  document.getElementById("countdownSec").innerHTML = seconds;
    
  if (distance < 0) {
    document.getElementById("countdownDays").innerHTML = 0;
    document.getElementById("countdownHours").innerHTML = 0;
    document.getElementById("countdownMin").innerHTML = 0;
    document.getElementById("countdownSec").innerHTML = 0;
  }
}, 1000);
