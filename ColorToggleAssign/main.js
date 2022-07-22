

const enterHamburger = document.querySelector('.main-nav__hamburger');
const sideNavToggle = document.querySelector('.side-nav__list');

const homeToggle = document.querySelector('.home');

const pinkToggle = document.querySelector('.pink');
const pinkRadio = document.querySelector('#pink');


const yellowToggle = document.querySelector('.yellow');
const yellowRadio = document.querySelector('#yellow');


const greenToggle = document.querySelector('.green');
const greenRadio = document.querySelector('#green');


const blueToggle = document.querySelector('.blue');
const blueRadio = document.querySelector('#blue');

const orangeToggle = document.querySelector('.orange');
const orangeRadio = document.querySelector('#orange');

const redToggle = document.querySelector('.red');
const redRadio = document.querySelector('#red');


const colorPicker = document.querySelector('.colordisplay__text');


enterHamburger.addEventListener('mouseenter', () => {
  sideNavToggle.style.visibility = 'visible';
});


const colorToggler = function (colorItem, bgc, innertext, radioBtn) {
  colorItem.addEventListener('click', () => {
    document.body.style.backgroundColor = bgc;
    colorPicker.innerText = innertext;
    radioBtn.checked = true;
    sideNavToggle.style.visibility = 'hidden';
  });
};

colorToggler(homeToggle, '#cdcdcd', 'grey');
colorToggler(pinkToggle, '#e389d3', 'pink', pinkRadio);
colorToggler(yellowToggle, '#ecef60', 'yellow', yellowRadio);
colorToggler(greenToggle, '#6efd6d', 'green', greenRadio);
colorToggler(blueToggle, '#90b1f3', 'blue', blueRadio);
colorToggler(orangeToggle, '#f0a442', 'orange', orangeRadio);
colorToggler(redToggle, '#ff0000', 'red', redRadio);
