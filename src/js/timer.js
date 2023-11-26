console.log("Welcome to Zeya Time ^_^");
var hours = 0;
var minutes = 0;
var seconds = 0;

var totalEndSeconds = 0;

/*
hours = document.getElementById("hours").value;
minutes = document.getElementById("minutes").value;
seconds = document.getElementById("seconds").value;
*/

//Beginning of application functionality

function setTimeVariable(type,val) {
if ( type==null || val==null) 
return;

if (type === "hours") {
  hours = val;
  console.log("Hours has been set : " , hours);
}
else if (type === "minutes") {
  minutes = val;
  console.log("Minutes has been set : ",minutes);
}
else if (type === "seconds") {
  seconds = val;
  console.log("Seconds has been set : ",seconds);
}

}

function getEndTime(currTime) {
if (currTime == null) 
return;

var endHour = 0;
var endMinute = 0;
var endSeconds = 0;

var currHours = currTime.getHours();
var currMinutes = currTime.getMinutes();
var currSeconds = currTime.getSeconds();

console.log("currHours" , currHours, "currMinutes" , currMinutes, "currSeconds" , currSeconds);

endSeconds = currSeconds + seconds;
totalEndSeconds += seconds;
 console.assert(endSeconds>60)
  if (endSeconds > 60) {
    endSeconds = endSeconds - 60;
    endMinute += 1;
   
  }

endMinute = endMinute + minutes + currMinutes;
totalEndSeconds += minutes*60;

  if (endMinute === 60) {

  } else if (endMinute > 60) {
    endHour+= 1;
    endMinute = endMinute - 60;
  }
console.log("endMinutes : ",endMinute);


endHour = endHour + hours + currHours;
totalEndSeconds += hours*3600;

  if (endHour > 23) {
    endHour = endHour - 24;
  }
  console.log("endHour : ",endHour);

  endTime = endHour+":"+endMinute;

  return endTime;
}


function timerStart() {

  
    var totalSeconds = hours * 3600 + minutes * 60 + seconds;

    console.log("Hours " , hours," Minutes " , minutes, " Seconds " , seconds);
    console.log("Total  " , totalSeconds);



    console.log("End Time" , getEndTime(new Date()));
    console.log("totalEndSeconds" , totalEndSeconds);


    
    // Start the timer logic here...
  }