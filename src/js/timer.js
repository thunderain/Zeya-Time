console.log("Welcome to Zeya Time ^_^");
var hours = 0;
var minutes =0;
var seconds =0;

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
var endMinute = 0;
var endHour=0;

  if (seconds > 30) {
    endMinute += 1;
  }
endMinute+= minutes;

  if (endMinute === 60) {

  } else if (endMinute > 60) {
    endHour+= 1;
    endMinute = endMinute - 60;
  }
console.log("endMinutes : ",endMinute);


  endHour += hours;
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

    var nowDate = new Date();
    var nowHours = nowDate.getHours();
    var nowMinutes = nowDate.getMinutes();
    var nowSeconds = nowDate.getSeconds();

    console.log("nowHours" , nowHours);
    console.log("nowMinutes" , nowMinutes);
    console.log("nowSeconds" , nowSeconds);
    console.log("Total  " , totalSeconds);

    console.log("End Time" , getEndTime(new Date()));
    


    
    // Start the timer logic here...
  }