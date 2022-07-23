const enterHamburger = document.querySelector('.main-nav__hamburger');
const sideNavToggle = document.querySelector('.side-nav__list');
const colorDisplay = document.querySelector('.colordisplay');
const colorPicker = document.querySelector('.colordisplay__text');
const navbar = document.querySelector('.navbar');

enterHamburger.addEventListener('mouseenter', () => {
  sideNavToggle.style.marginLeft = '0px';
});

navbar.addEventListener('mouseleave', () => {
  sideNavToggle.style.marginLeft = '-200px';
});



let colorHome = '#cdcdcd';
let colorPink = '#e389d3';
let colorYellow = '#ecef60';
let colorGreen = '#6efd6d';
let colorBlue = '#90b1f3';
let colorOrange = '#f0a442';
let colorRed = '#ff0000';


const colorToggler = function (
  selector,
  backgroundColor,
  innertext,
  displayclr
) {
  let colorItem = document.querySelector(selector);
  colorItem.addEventListener('click', () => {
    document.body.style.backgroundColor = backgroundColor;
    colorDisplay.style.backgroundColor = displayclr;
    colorPicker.innerText = innertext;
    colorItem.checked = true;
    sideNavToggle.style.marginLeft = '-250px';
  });
};

colorToggler('.home', colorHome, 'grey', '#8e9594');
colorToggler('#pink', colorPink, 'pink', '#e48db5');
colorToggler('#yellow', colorYellow, 'yellow', '#d0ca13');
colorToggler('#green', colorGreen, 'green', '#298020');
colorToggler('#blue', colorBlue, 'blue', '#74cfd6');
colorToggler('#orange', colorOrange, 'orange', '#e08a54');
colorToggler('#red', colorRed, 'red', '#f0594e');



// KEYDOWN EVENT 1-7

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
