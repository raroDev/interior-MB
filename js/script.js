//TOGLUJ NAVBAR
$('.nav-navbar-toggler').click(function() {
  $('.nav-navbar-mobi').toggleClass('flexy');
});
//ZAMKNIJ MODAL NA X
$('.hider').click(function() {
  $('.modal').css('display', 'none');
});
//WYSWIETL KONKRETNY MODAL
$('#01').click(function() {
  $('#slider01').css('display', 'flex');
});
$('#02').click(function() {
  $('#slider02').css('display', 'flex');
});
$('#03').click(function() {
  $('#slider03').css('display', 'flex');
});
$('#04').click(function() {
  $('#slider04').css('display', 'flex');
});
$('#05').click(function() {
  $('#slider05').css('display', 'flex');
});
//ZAMKNIJ WYSWIETLANY MODAL NA ESC
$(document).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
        $('.modal').css('display', 'none');
    }
});
//slider

var s01Index = 1;
var s02Index = 1;
var s03Index = 1;
var s04Index = 1;
var s05Index = 1;
//zmien index slajdu/zmien slajd
function plusDivs01(n) {
  slider01(s01Index += n);
}
function plusDivs02(m) {
  slider02(s02Index += m);
}
function plusDivs03(m) {
  slider03(s03Index += m);
}
function plusDivs04(m) {
  slider04(s04Index += m);
}
function plusDivs05(m) {
  slider05(s05Index += m);
}
//schowaj wszystkie img, wyswietl slajd o aktualnym indeksie
function slider01(n) {

  var s01 = document.querySelectorAll('.slider01 img');

//wracaj na poczatek jezeli ostatni i idz na koniec jezeli < 1
  if (n > s01.length) {s01Index = 1};
  if (n < 1) {s01Index = s01.length};

  //licznik zdjec
  var counter01 = document.querySelector('#counter01');
  counter01.innerHTML = s01Index + "/" + s01.length;
//schowaj wszstkie imgs'y
  for (var i = 0; i < s01.length; i++) {
    s01[i].style.display = "none";
  }

  //wyswietl img o aktualnym indeksie
  s01[s01Index - 1].style.display = "block";
}

function slider02(n){
  var s02 = document.querySelectorAll('.slider02 img');

  if (n > s02.length) {s02Index = 1};
  if (n < 1) {s02Index = s02.length};

  //licznik
  var counter02 = document.querySelector('#counter02');
  counter02.innerHTML = s02Index + "/" + s02.length;

  for (var j = 0; j < s02.length; j++) {
    s02[j].style.display = "none";
  }
    s02[s02Index - 1].style.display = "block";
}
function slider03(n){
  var s03 = document.querySelectorAll('.slider03 img');

  if (n > s03.length) {s03Index = 1};
  if (n < 1) {s03Index = s03.length};

  //licznik
  var counter03 = document.querySelector('#counter03');
  counter03.innerHTML = s03Index + "/" + s03.length;

  for (var j = 0; j < s03.length; j++) {
    s03[j].style.display = "none";
  }
    s03[s03Index - 1].style.display = "block";
}
function slider04(n){
  var s04 = document.querySelectorAll('.slider04 img');

  if (n > s04.length) {s04Index = 1};
  if (n < 1) {s04Index = s04.length};

  //licznik
  var counter04 = document.querySelector('#counter04');
  counter04.innerHTML = s04Index + "/" + s04.length;

  for (var j = 0; j < s04.length; j++) {
    s04[j].style.display = "none";
  }
    s04[s04Index - 1].style.display = "block";
}
function slider05(n){
  var s05 = document.querySelectorAll('.slider05 img');

  if (n > s05.length) {s05Index = 1};
  if (n < 1) {s05Index = s05.length};

  //licznik
  var counter05 = document.querySelector('#counter05');
  counter05.innerHTML = s05Index + "/" + s05.length;

  for (var j = 0; j < s05.length; j++) {
    s05[j].style.display = "none";
  }
    s05[s05Index - 1].style.display = "block";
}
slider01(s01Index);
slider02(s02Index);
slider03(s03Index);
slider04(s04Index);
slider05(s05Index);



const current = document.querySelector('.main01 img');
const current02 = document.querySelector('.main02 img');
const current03 = document.querySelector('.main03 img');
const current04 = document.querySelector('.main04 img');
const current05 = document.querySelector('.main05 img');
const imgs = document.querySelector('#photos01').querySelectorAll('img');
const imgs02 = document.querySelector('#photos02').querySelectorAll('img');
const imgs03 = document.querySelector('#photos03').querySelectorAll('img');
const imgs04 = document.querySelector('#photos04').querySelectorAll('img');
const imgs05 = document.querySelector('#photos05').querySelectorAll('img');

const opacity = 0.6;

imgs[0].style.opacity = opacity;
imgs02[0].style.opacity = opacity;
imgs03[0].style.opacity = opacity;
imgs04[0].style.opacity = opacity;
imgs05[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));
imgs02.forEach(img => img.addEventListener('click', imgClick02));
imgs03.forEach(img => img.addEventListener('click', imgClick03));
imgs04.forEach(img => img.addEventListener('click', imgClick04));
imgs05.forEach(img => img.addEventListener('click', imgClick05));

function imgClick(e){
  imgs.forEach(img => (img.style.opacity = 1));
  current.src = e.target.src;
  current.classList.add('fade-in');
  setTimeout(()=> current.classList.remove('fade-in'), 500);
  e.target.style.opacity = opacity;
}
function imgClick02(e){
  imgs02.forEach(img => (img.style.opacity = 1));
  current02.src = e.target.src;
  current02.classList.add('fade-in');
  setTimeout(()=> current02.classList.remove('fade-in'), 500);
  e.target.style.opacity = opacity;
}
function imgClick03(e){
  imgs03.forEach(img => (img.style.opacity = 1));
  current03.src = e.target.src;
  current03.classList.add('fade-in');
  setTimeout(()=> current03.classList.remove('fade-in'), 500);
  e.target.style.opacity = opacity;
}
function imgClick04(e){
  imgs04.forEach(img => (img.style.opacity = 1));
  current04.src = e.target.src;
  current04.classList.add('fade-in');
  setTimeout(()=> current04.classList.remove('fade-in'), 500);
  e.target.style.opacity = opacity;
}
function imgClick05(e){
  imgs05.forEach(img => (img.style.opacity = 1));
  current05.src = e.target.src;
  current05.classList.add('fade-in');
  setTimeout(()=> current05.classList.remove('fade-in'), 500);
  e.target.style.opacity = opacity;
}
