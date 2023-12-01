console.log("Welcome to Zeya Time ^_^");

let hours : number = 0;
let minutes : number = 0;
let seconds : number = 0;
let totalEndSeconds : number = 0;

//Applications functions
function setTimeVariable(type : string, val : number){

    if (!type || !val)
        return;

    switch (type) {
        case "hours": {
            hours = val;
            console.log("Hours has been set : " , hours);
            break;
        }
        case "minutes": {
            minutes = val;
            console.log("Minutes has been set : ",minutes);
            break;
        }
        case "seconds": {
            seconds = val;
            console.log("Seconds has been set : ",seconds);
            break;
        }
        default: {
            break;
        }
        }
          
}

function getEndTime(currTime : Date) : string {
    return currTime.toISOString();
}

