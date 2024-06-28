const hoursNiddle = document.getElementById("hours");
const minuteNiddle = document.getElementById("minute");
const seceondNiddle = document.getElementById("seceond");


function clockTick(){
    const date = new Date();
    const seceond1 = date.getSeconds() /60;
    const minute1 = (seceond1 + date.getMinutes()) /60;
    const hours1 = (minute1 + date.getHours()) /12;
    rotateClockHand( seceondNiddle , seceond1)
    rotateClockHand(minuteNiddle, minute1)
    rotateClockHand(hoursNiddle, hours1 )
    
}
clockTick()
function rotateClockHand( element, rotation){
    element.style.setProperty('--rotate', rotation * 360);
}
setInterval( clockTick,1000);

// Digital Clock



const digitalHr= document.getElementById('digitalHours');
const digitalMin= document.getElementById('digitalMinutes');
const digitalSec= document.getElementById('digitalSeceond');
const digitalAM= document.getElementById('digitalAmPm');

function digital(){
    
    let digiDate = new Date();
    let digiHour = digiDate.getHours();
    let digiMinute = digiDate.getMinutes();
    let digiSeceond = digiDate.getSeconds();
   
    
   if(digiHour > 12){
    digiHour = digiHour - 12;
}

    digiHour = (digiHour < 10) ? "0" + digiHour :digiHour;
    digiMinute = (digiMinute < 10) ? "0" + digiMinute : digiMinute;
    digiSeceond = (digiSeceond < 10) ? "0" + digiSeceond : digiSeceond;


digitalHr.innerHTML = digiHour;
digitalMin.innerHTML = digiMinute;
digitalSec.innerHTML = digiSeceond


}
digital()
setInterval(digital, 1000)
