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
    return currTime.toISOString();
}
