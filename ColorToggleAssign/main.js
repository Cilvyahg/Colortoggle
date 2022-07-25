'use strict';

const enterHamburger = document.querySelector('.main-nav__hamburger');
const sideNavToggle = document.querySelector('.side-nav__list');
const colorDisplay = document.querySelector('.colordisplay');
const colorPicker = document.querySelector('.colordisplay__text');
const navbar = document.querySelector('.navbar');

enterHamburger.addEventListener('mouseenter', () => {
  // sideNavToggle.style.marginLeft = '0px';
  sideNavToggle.classList.remove('close-margin-left');
  sideNavToggle.classList.add('open-margin-left');
});



navbar.addEventListener('mouseleave', () => {
  // sideNavToggle.style.marginLeft = '-200px';
  sideNavToggle.classList.remove('open-margin-left')
  sideNavToggle.classList.add('close-margin-left')

});

const colorHome = '#cdcdcd';
const colorPink = '#e389d3';
const colorYellow = '#ecef60';
const colorGreen = '#6efd6d';
const colorBlue = '#90b1f3';
const colorOrange = '#f0a442';
const colorRed = '#ff0000';

const colorToggler = function (
  selector,
  backgroundColor,
  innertext,
  displayclr
) {

  const colorItem = document.querySelector(selector);
  colorItem.addEventListener('click', () => {
    document.body.style.backgroundColor = backgroundColor;
    colorDisplay.style.backgroundColor = displayclr;
    colorPicker.innerText = innertext;
    colorItem.checked = true;
    sideNavToggle.classList.add('close-margin-left');
    // sideNavToggle.style.marginLeft = '-250px';


  });
};

colorToggler('.home', colorHome, 'grey', '#8e9594');
colorToggler('#pink', colorPink, 'pink', '#e48db5');
colorToggler('#yellow', colorYellow, 'yellow', '#d0ca13');
colorToggler('#green', colorGreen, 'green', '#298020');
colorToggler('#blue', colorBlue, 'blue', '#74cfd6');
colorToggler('#orange', colorOrange, 'orange', '#e08a54');
colorToggler('#red', colorRed, 'red', '#f0594e');

// ===============
// KEYDOWN Event
// ===============

const KeyDownToggle = function (key, backgroundColor, innerText) {
  window.addEventListener('keydown', (event) => {
    if (event.key === key) {
      event.preventDefault();
      document.body.style.backgroundColor = backgroundColor;
      colorDisplay.style.backgroundColor = '#fff';
      colorPicker.innerText = innerText;
      console.log(`The key ${key} was pressed down`);
    }
  });
};

KeyDownToggle('1', colorHome, '🪨');
KeyDownToggle('2', colorPink, '💓');
KeyDownToggle('3', colorYellow, '🌞');
KeyDownToggle('4', colorGreen, '🍀');
KeyDownToggle('5', colorBlue, '🦋');
KeyDownToggle('6', colorOrange, '🍊');
KeyDownToggle('7', colorRed, '🟥');

