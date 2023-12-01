console.log("Welcome to Zeya Time ^_^");

let hours : number = 0;
let minutes : number = 0;
let seconds : number = 0;
let totalSeconds : number = 0;

//Applications functions
function setTimeVariable(type : string, val : string){

    if (!type || !val)
        return;

    switch (type) {
        case "hours": {
            hours = parseInt(val , 10);
            console.log("Hours has been set : " , hours);
            break;
        }
        case "minutes": {
            minutes = parseInt(val , 10);
            console.log("Minutes has been set : ",minutes);
            break;
        }
        case "seconds": {
            seconds = parseInt(val , 10);
            console.log("Seconds has been set : ",seconds);
            break;
        }
        default: {
            break;
        }
        }
          
}

function getEndTime(currTime : Date) : string {
    let endHour : number = 0;
    let endMinute : number = 0;
    let endSeconds : number = 0;

    let currHours : number = currTime.getHours();
    let currMinutes : number = currTime.getMinutes();
    let currSeconds : number = currTime.getSeconds();

    console.log("currHours : " , currHours, "currMinutes : " , currMinutes, "currSeconds : " , currSeconds);
    
    endSeconds = currSeconds + seconds;
    console.log("endSeconds : ", endSeconds);


    console.assert(endSeconds>60 , "endSeconds>60" , "endSeconds<60");
    if (endSeconds > 60) {
        endMinute += ( endSeconds - (endSeconds % 60) ) / 60;
        endSeconds = endSeconds % 60;
    }



    endMinute =  minutes + currMinutes;
   // totalEndSeconds += minutes*60;

    if (endMinute === 60) {

    } else if (endMinute > 60) {
        endHour+= 1;
        endMinute = endMinute % 60;
    }
    console.log("endMinutes : ",endMinute);



    endHour =  hours + currHours;
   // totalEndSeconds += hours*3600;

    if (endHour > 23) {
    endHour = endHour - 24;
    }
    console.log("endHour : ",endHour);

    //endTime = endHour+":"+endMinute;
    let sEndTime : string = endHour.toString() + " : " + endMinute.toString();


    return sEndTime;
    //return currTime.toISOString();
}

function timerStart() {
    let totalSeconds : number = hours*3600 + minutes*60 + seconds;
    console.log("Hours " , hours," Minutes " , minutes, " Seconds " , seconds);
    console.log("Total  " , totalSeconds);

    console.log("End Time" , getEndTime(new Date()));
    console.log("totalSeconds" , totalSeconds);
}