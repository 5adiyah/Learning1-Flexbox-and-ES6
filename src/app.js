//------------SCROLLING--------------//

const scrollDiv = document.querySelector('.scroll');
const scrollImg = document.querySelector('.scrollImg');

scrollDiv.addEventListener('mouseenter', function(e){
  scrollDiv.classList.add('scrollHover');
  scrollImg.src = 'src/images/nextHover.png';
});

scrollDiv.addEventListener('mouseleave', function(e){
  scrollDiv.classList.remove('scrollHover');
  scrollImg.src = 'src/images/next.png';
});

scrollDiv.addEventListener('click', function(e){
  window.scrollBy(0, window.innerHeight);
});

//------------TIMER--------------//
let countdown;
let date = 'September 02 2017 18:59:59 GMT-0800';
initializeClock(date);

function getTimeLeft(date){
  const total = Date.parse(date) - Date.now();
  let seconds = Math.floor((total/1000) % 60);
  let minutes = Math.floor((total/1000/60) % 60);
  let hours = Math.floor((total/(1000*60*60)) % 24);
  var days = Math.floor(total/(1000*60*60*24));

  return {
    'total': total,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(date) {
  let clock = document.getElementById('clockdiv');
  let daysSpan = clock.querySelector('.daysH2');
  let hoursSpan = clock.querySelector('.hoursH2');
  let minutesSpan = clock.querySelector('.minutesH2');
  let secondsSpan = clock.querySelector('.secondsH2');
  let timeInterval = setInterval(function(){
    let total = getTimeLeft(date);
    daysSpan.innerHTML = total.days;
    hoursSpan.innerHTML = ('0' + total.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + total.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + total.seconds).slice(-2);
    if(total.hours <= 0){
      clearInterval(timeInterval);
    }
  }, 1000);
}
