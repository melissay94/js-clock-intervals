let timeInterval = null;
let second = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let zeroBtn = document.getElementById("zero-time");
let currentBtn = document.getElementById("current-time");
let randomBtn = document.getElementById("random-clock");

count = 0;

const setClock = function() {

    count++;
    let secondFormula = count/60 * 360;
    let minuteFormula = count/(60 * 60) * 360;
    let hourFormula = count/(60 * 60 * 12) * 360;

    second.style.transform = "rotate("+secondFormula+"deg)";
    minute.style.transform = "rotate("+minuteFormula+"deg)";
    hour.style.transform = "rotate("+hourFormula+"deg)";

}

const zeroTime = function() {
    
    clearInterval(timeInterval);

    count = 0;
    timeInterval = setInterval(setClock, 1000);
}

const getDate = function() {

    clearInterval(timeInterval);

    let currentTime = new Date();
    count = currentTime.getSeconds() + (currentTime.getMinutes() * 60) + (currentTime.getHours() * 3600);

    timeInterval = setInterval(setClock, 1000);
}

const randomizeClock = function() {
    clearInterval(timeInterval);
    let randomSeconds = Math.floor(Math.random() * 60);
    let randomMinutes = Math.floor(Math.random() * 60) * 60;
    let randomHours = Math.floor(Math.random() * 60) * 3600;

    count = randomHours + randomMinutes + randomSeconds;

    let randomInterval = Math.floor(Math.random() * 100);

    timeInterval = setInterval(setClock, randomInterval);
}

timeInterval = setInterval(setClock, 1000);
zeroBtn.addEventListener("click", zeroTime);
currentBtn.addEventListener("click", getDate);
randomBtn.addEventListener("click", randomizeClock);