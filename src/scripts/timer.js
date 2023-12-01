"use strict";
//import chalk from '../../node_modules/chalk';
console.log("Welcome to Zeya Time ^_^");
let hours = 0;
let minutes = 0;
let seconds = 0;
let totalSeconds = 0;
let counterSeconds = 0;
let lblTimeComplete = document.getElementById("lblTimeComplete");
let lbleTimeCountdown = document.getElementById("lbleTimeCountdown");
let countDownInterval;
const arrTimingButtons = Array.from(document.querySelectorAll('.btnTiming'));
console.log(arrTimingButtons);
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
    startCountDown(totalSeconds);
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
    makeButtonVisible("close", "pause");
    makeButtonInvisible("resume", "start", "reset");
    clearInterval(countDownInterval);
    clearTimeout(countDownInterval);
    totalSeconds = hours * 3600 + minutes * 60 + seconds;
    console.log("Hours ", hours, " Minutes ", minutes, " Seconds ", seconds);
    console.log("Total  ", totalSeconds);
    console.log("End Time", getEndTime(new Date()));
    console.log("totalSeconds", totalSeconds);
}
//COUNT DOWN FUNCTIONS
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')} : ${minutes.toString()
        .padStart(2, '0')} : ${remainingSeconds.toString().padStart(2, '0')}`;
}
function startCountDown(total) {
    //every second, decrease value 
    //counter = total;
    counterSeconds = total; // Example: 1 hour (3600 seconds)
    function updateTime() {
        const lblTimeComplete = document.getElementById("lbleTimeCountdown");
        if (counterSeconds >= 0) {
            lblTimeComplete.textContent = formatTime(counterSeconds);
            counterSeconds--;
            countDownInterval = setTimeout(updateTime, 1000); // Update time every second
            console.log("countDownInterval:", countDownInterval);
        }
        else {
            lblTimeComplete.textContent = "Time's up!";
        }
    }
    // Start updating time
    updateTime();
}
function timerResume() {
    //counterSeconds kept getting decreased; you have access to it
    startCountDown(counterSeconds);
    makeButtonVisible("close", "pause");
    makeButtonInvisible("resume", "start", "reset");
}
function timerPause() {
    //counterSeconds keeps getting decreased; you have access to it
    clearInterval(countDownInterval);
    clearTimeout(countDownInterval);
    makeButtonVisible("close", "resume", "reset");
    makeButtonInvisible("pause", "start");
}
function timerClose() {
    clearTimeout(countDownInterval);
    if (lblTimeComplete)
        lblTimeComplete.textContent = formatTime(0);
    makeButtonVisible("start");
    makeButtonInvisible("resume", "close", "reset", "pause");
}
function timerReset() {
    timerStart();
}
function makeButtonInvisible(...buttons) {
    arrTimingButtons.forEach(button => {
        if (buttons.includes(button.name)) {
            button.style.display = "none";
            button.disabled = true;
            console.log(button);
        }
        else {
            //console.log("The button does not exist");
        }
    });
}
function makeButtonVisible(...buttons) {
    arrTimingButtons.forEach(button => {
        if (buttons.includes(button.name)) {
            button.style.display = "block";
            //button.style.display = "inline";
            button.disabled = false;
            console.log(button);
        }
        else {
            //console.log("The button does not exist");
        }
    });
}
