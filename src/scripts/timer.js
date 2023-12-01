"use strict";
console.log("Welcome to Zeya Time ^_^");
let hours = 0;
let minutes = 0;
let seconds = 0;
let totalEndSeconds = 0;
//Applications functions
function setTimeVariable(type, val) {
    if (!type || !val)
        return;
    switch (type) {
        case "hours": {
            hours = val;
            console.log("Hours has been set : ", hours);
            break;
        }
        case "minutes": {
            minutes = val;
            console.log("Minutes has been set : ", minutes);
            break;
        }
        case "seconds": {
            seconds = val;
            console.log("Seconds has been set : ", seconds);
            break;
        }
        default: {
            break;
        }
    }
}
function getEndTime(currTime) {
    let endHour = 0;
    let endMinute = 0;
    let endSeconds = 0;
    let currHours = currTime.getHours();
    let currMinutes = currTime.getMinutes();
    let currSeconds = currTime.getSeconds();
    console.log("currHours", currHours, "currMinutes", currMinutes, "currSeconds", currSeconds);
    endSeconds = currSeconds + seconds;
    console.log("endSeconds : ", endSeconds);
    return currTime.toISOString();
}
function timerStart() {
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    console.log("Hours ", hours, " Minutes ", minutes, " Seconds ", seconds);
    console.log("Total  ", totalSeconds);
    console.log("End Time", getEndTime(new Date()));
    console.log("totalEndSeconds", totalEndSeconds);
}
