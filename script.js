var today = new Date();
var day = today.getDay();
var daylist = ["Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday", "Sunday"];
var month = today.getMonth();
var year = today.getFullYear();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();

var showDate = document.getElementById("current-date").innerHTML = "Current date is: "+ day + "/" + month + "/" + year + "." + "Today is: " + daylist[day];
var showTime = document.getElementById("current-time").innerHTML = "Current time is: " + hours + ":" + minutes + ":" + seconds;
var showDateTime = document.getElementById("current-date-time").innerHTML =showDate + " / " + showTime;

function displayDate() {
    var x = document.getElementById("current-date");
    if ( x.style.display === "none") {
        x.style.display = "block";
    } else {
     x.style.display = "none"
    }
 }

 function displayTime() {
    var y = document.getElementById("current-time");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none"
    }
}

function displayDateTime() {
    var z = document.getElementById("current-date-time");
    if (z.style.display === "none") {
        z.style.display = "block";
    } else {
        z.style.display = "none";
    }
}