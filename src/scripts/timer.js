"use strict";
//import chalk from '../../node_modules/chalk';
console.log("Welcome to Zeya Time ^_^");
let hours = 0;
let minutes = 0;
let seconds = 0;
let totalSeconds = 0;
let lblTimeComplete = document.getElementById("lblTimeComplete");
//Applications functions
function setTimeVariable(type, val) {
    if (!type || !val)
        return;
    switch (type) {
        case "hours": {
            hours = parseInt(val, 10);
            console.log("Hours has been set : ", hours);
            break;
        }
        case "minutes": {
            minutes = parseInt(val, 10);
            console.log("Minutes has been set : ", minutes);
            break;
        }
        case "seconds": {
            seconds = parseInt(val, 10);
            console.log("Seconds has been set : ", seconds);
            break;
        }
        default: {
            break;
        }
    }
}
function getEndTime(currTime) {
    console.clear();
    let endHour = 0;
    let endMinute = 0;
    let endSeconds = 0;
    let currHours = currTime.getHours();
    let currMinutes = currTime.getMinutes();
    let currSeconds = currTime.getSeconds();
    console.log("currHours : ", currHours, "currMinutes : ", currMinutes, "currSeconds : ", currSeconds);
    endSeconds = currSeconds + seconds;
    console.log("endSeconds : ", endSeconds);
    console.log("endSeconds>60 ?", endSeconds > 60);
    if (endSeconds >= 60) {
        /*endMinute += ( endSeconds - (endSeconds % 60) ) / 60;*/
        endSeconds = endSeconds % 60;
        endMinute += 1;
        //console.log("endSeconds > 59, added a minute",endMinute);
    }
    endMinute += minutes + currMinutes;
    // totalEndSeconds += minutes*60;
    if (endMinute >= 60) {
        endHour += 1;
        endMinute = endMinute % 60;
        console.log("endMinute > 60, added an hour", endHour);
    }
    console.log("endMinutes : ", endMinute);
    endHour += hours + currHours;
    // totalEndSeconds += hours*3600;
    if (endHour > 23) {
        endHour = endHour % 24;
    }
    console.log("endHour : ", endHour);
    //endTime = endHour+":"+endMinute;
    let sEndTime = endHour.toString() + " : " + endMinute.toString();
    setLabelEndTime(endHour, endMinute);
    startCountDown();
    totalSeconds = hours * 3600 + minutes * 60 + seconds;
    console.log("Total  ", totalSeconds);
    return sEndTime;
    //return currTime.toISOString();
}
function setLabelEndTime(hours, minutes) {
    //get the labelID;
    // var label = document.getElementById("lblTimeComplete");
    if (lblTimeComplete != undefined) {
        // lblTimeComplete.
        console.log("Setting Timer Label");
        let sEndTime = "";
        sEndTime += hours + " : ";
        if (minutes < 10) {
            sEndTime += "0" + minutes;
        }
        else
            sEndTime += minutes;
        lblTimeComplete.innerHTML = sEndTime;
        lblTimeComplete.innerText = sEndTime;
    }
}
function timerStart() {
    totalSeconds = hours * 3600 + minutes * 60 + seconds;
    console.log("Hours ", hours, " Minutes ", minutes, " Seconds ", seconds);
    console.log("Total  ", totalSeconds);
    console.log("End Time", getEndTime(new Date()));
    console.log("totalSeconds", totalSeconds);
}
function startCountDown() {
    //every second, decrease value 
    let counter = totalSeconds;
    const intervalId = setInterval(() => {
        counter--;
        console.log("Time -- ", counter);
        // Check if the condition is met
        if (counter === 0) {
            // Condition met, stop the interval
            clearInterval(intervalId);
            console.log("Condition met, stopping the interval.");
        }
    }, 1000);
}
