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

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies to improve analytics.';
message.innerHTML =
  'We use cookies to improve analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message); // places as first child
header.append(message); // places as last child

// how to add at multiple places at once

// header.append(message.cloneNode(true));

header.before(message);
// header.after(message.cloneNode(true));

// delete element
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove(); // Es6 method
    // message.parentElement.removeChild(message); // pre ES6 method 
  });
