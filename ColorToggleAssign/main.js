console.log('hello');

const enterHamburger = document.querySelector('.main-nav__hamburger');
const sideNavToggle = document.querySelector('.side-nav__list');
const homeToggle = document.querySelector('.home');
const pinkToggle = document.querySelector('#pink');
const yellowToggle = document.querySelector('#yellow');
const greenToggle = document.querySelector('#green');
const blueToggle = document.querySelector('#blue');
const orangeToggle = document.querySelector('#orange');
const redToggle = document.querySelector('#red');
const colorPicker = document.querySelector('.colordisplay__text');


enterHamburger.addEventListener('mouseenter', () => {
  sideNavToggle.style.visibility = 'visible';
});


const colorToggler = function (colorItem, bgc, innertext) {
  colorItem.addEventListener('click', () => {
    document.body.style.backgroundColor = bgc;
    colorPicker.innerText = innertext;
    colorItem.checked = true;
    sideNavToggle.style.visibility = 'hidden';
  });
};

colorToggler(redToggle, '#ff0000', 'red');
colorToggler(orangeToggle, '#f0a442', 'orange');
colorToggler(blueToggle, '#90b1f3', 'blue');
colorToggler(greenToggle, '#6efd6d', 'green');
colorToggler(yellowToggle, '#ecef60', 'yellow');
colorToggler(pinkToggle, '#e389d3', 'pink');
colorPicker(homeToggle, '#cdcdcd', 'grey');
