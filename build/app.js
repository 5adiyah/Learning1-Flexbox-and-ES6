'use strict';

//------------SCROLLING--------------//

var scrollDiv = document.querySelector('.scroll');
var scrollImg = document.querySelector('.scrollImg');

scrollDiv.addEventListener('mouseenter', function (e) {
  scrollDiv.classList.add('scrollHover');
  scrollImg.src = 'src/images/nextHover.png';
});

scrollDiv.addEventListener('mouseleave', function (e) {
  scrollDiv.classList.remove('scrollHover');
  scrollImg.src = 'src/images/next.png';
});

scrollDiv.addEventListener('click', function (e) {
  window.scrollBy(0, window.innerHeight);
});

//------------TIMER--------------//
var countdown = void 0;
var date = 'August 19 2017 18:59:59 GMT-0800';
initializeClock(date);

function getTimeLeft(date) {
  var total = Date.parse(date) - Date.now();
  var seconds = Math.floor(total / 1000 % 60);
  var minutes = Math.floor(total / 1000 / 60 % 60);
  var hours = Math.floor(total / (1000 * 60 * 60) % 24);
  var days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    'total': total,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(date) {
  var clock = document.getElementById('clockdiv');
  var daysSpan = clock.querySelector('.daysH2');
  var hoursSpan = clock.querySelector('.hoursH2');
  var minutesSpan = clock.querySelector('.minutesH2');
  var secondsSpan = clock.querySelector('.secondsH2');
  var timeInterval = setInterval(function () {
    var total = getTimeLeft(date);
    daysSpan.innerHTML = total.days;
    hoursSpan.innerHTML = ('0' + total.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + total.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + total.seconds).slice(-2);
    if (total.hours <= 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}