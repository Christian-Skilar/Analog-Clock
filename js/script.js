const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

const time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();

function moveTime(){
  if(seconds === 60){
    minutes += 1;
    seconds = 0;
  }
  if(minutes === 60){
    hours += 1;
    mins = 0;
  }
  seconds += 1;
  const hourDegree = hours * 30 + (minutes / 2);
hourHand.style.transform = `rotate(${hourDegree}deg)`;
const minuteDegree = minutes * 6;
minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
const secondDegree = seconds * 6;
secondHand.style.transform = `rotate(${secondDegree}deg)`;
}

setInterval(moveTime, 1000);