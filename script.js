'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///// 

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// // creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies to improve analytics.';
// message.innerHTML =
//   'We use cookies to improve analytics. <button class="btn btn--close-cookie">Got it!</button>';
// // header.prepend(message); // places as first child
// header.append(message); // places as last child

// how to add at multiple places at once

// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message.cloneNode(true));

// delete element
// document
// .querySelector('.btn--close-cookie')
// .addEventListener('click', function () {
//   message.remove(); // Es6 method
// message.parentElement.removeChild(message); // pre ES6 method
// });

// Style attributes and classes
// styles

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(getComputedStyle(message).height);

// css set property

// document.documentElement.style.setProperty('--color-primary', 'orangered');
// document.body.style.setProperty('background-color', 'yellow'); // expirimented by myself

// attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo);
// console.log(logo.getAttribute("designer"))// to get the non standarized attrb
// logo.setAttribute("Company", "Bankist") // use setAttribute to add attrb
// console.log(logo.getAttribute("src"));

// logo.alt = 'beautiful minimalist logo';

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// // data attribute
// console.log(logo.dataset.versionNumber);

// classes
// logo.classList.add('c', 'j');
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

//////

// smooth scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1Coords = section1.getBoundingClientRect();
  console.log(s1Coords);
});
