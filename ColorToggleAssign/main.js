const enterHamburger = document.querySelector('.main-nav__hamburger');
const sideNavToggle = document.querySelector('.side-nav__list');
const colorDisplay = document.querySelector('.colordisplay');


// ============
// COLOR TOGGLES // uiteindelijk gezet in de functie zelf d.m.v variabele van te maken.
// ============

// const homeToggle = document.querySelector('.home');
// const pinkToggle = document.querySelector('#pink');
// const yellowToggle = document.querySelector('#yellow');
// const greenToggle = document.querySelector('#green');
// const blueToggle = document.querySelector('#blue');
// const orangeToggle = document.querySelector('#orange');
// const redToggle = document.querySelector('#red');


const colorPicker = document.querySelector('.colordisplay__text');
const navbar = document.querySelector('.navbar');

enterHamburger.addEventListener('mouseenter', () => {
  sideNavToggle.style.marginLeft = '0px';
  
});

navbar.addEventListener('mouseleave', () => {
  sideNavToggle.style.marginLeft = '-200px';
 
});


const colorToggler = function (selector, backgroundColor, innertext, displayclr) {

let colorItem = document.querySelector(selector)
  colorItem.addEventListener('click', () => {
    document.body.style.backgroundColor = backgroundColor;
    colorDisplay.style.backgroundColor = displayclr;
    colorPicker.innerText = innertext;
    colorItem.checked = true;
    sideNavToggle.style.marginLeft = '-250px';
   
  });
};

colorToggler('.home', '#cdcdcd', 'grey', '#8e9594');
colorToggler('#pink', '#e389d3', 'pink', '#e48db5');
colorToggler('#yellow', '#ecef60', 'yellow', '#d0ca13');
colorToggler('#green', '#6efd6d', 'green', '#298020');
colorToggler('#blue', '#90b1f3', 'blue', '#74cfd6');
colorToggler('#orange', '#f0a442', 'orange', '#e08a54');
colorToggler('#red', '#ff0000', 'red', '#f0594e');
