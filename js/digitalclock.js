function currentTime() {
    let theTime = new Date();
    
    let theDayNum = theTime.getDay();
    let theHour = theTime.getHours();
    let theMinutes = theTime.getMinutes();
    let theSeconds = theTime.getSeconds();

    let theDay = ['SUN', 'MON', 'TUE' , 'WED', 'THU' , 'FRI', 'SAT'];

    let AmPm = "AM";

    if(theHour >= 12) {
        AmPm = "PM";
    }
    if (theHour > 12) {
        theHour = theHour % 12;
    }


    if(theHour < 10) {
        theHour = "0" + theHour;
    }
    if (theMinutes < 10) {
        theMinutes = "0" + theMinutes;
    }
    if (theSeconds < 10) {
        theSeconds = "0" + theSeconds;
    }
    document.getElementById('day').innerHTML = theDay[theDayNum];
    document.getElementById('hour').innerHTML = theHour;
    document.getElementById('minute').innerHTML = theMinutes;
    document.getElementById('seconds').innerHTML = theSeconds;
    document.getElementById('ampm').innerHTML = AmPm;

    let evenSeconds = theSeconds % 2;

    if(evenSeconds == 0) {
        document.getElementById('colon1').style.color = "red";
        document.getElementById('colon2').style.color = "red";
    }
    else {
        document.getElementById('colon1').style.color = "white";
        document.getElementById('colon2').style.color = "white";
    } // Assigning a value must be in Double Quotes
    //console.log(theTime); All Time Information
    //console.log(theTime.toLocaleTimeString()); Only time time XX:XX;XX
    
}

setInterval(() => {
    currentTime();
}, 1000);


