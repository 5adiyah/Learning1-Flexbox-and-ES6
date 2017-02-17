'use strict';

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

// var slide1 = document.querySelector('.slide1');
// var slide1Top = slide1.getBoundingClientRect().top;
// var slide1Bottom = slide1.getBoundingClientRect().bottom;
// var slide1Visible = (slide1Top >=0) && (slide1Bottom <= window.innerHeight);
//
// var slide2 = document.querySelector('.slide2');
// var slide2Top = slide2.getBoundingClientRect().top;
// var slide2Bottom = slide2.getBoundingClientRect().bottom;
// var slide2Visible = (slide2Top >=0) && (slide2Bottom <= window.innerHeight);
//
// var slide3 = document.querySelector('.slide3');
// var slide3Top = slide3.getBoundingClientRect().top;
// var slide3Bottom = slide3.getBoundingClientRect().bottom;
// var slide3Visible = (slide3Top >=0) && (slide3Bottom <= window.innerHeight);

scrollDiv.addEventListener('click', function (e) {
  window.scrollBy(0, window.innerHeight);
});

function isScrolledIntoView(el) {
  var elemTop = el.getBoundingClientRect().top;
  var elemBottom = el.getBoundingClientRect().bottom;

  var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  return isVisible;
}

//slide2.scrollIntoView()