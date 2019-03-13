let newSiteNotice = document.getElementsByClassName('new');
let siteTitleHeading = document.getElementsByClassName('heading');
let siteDescArray = [...document.getElementsByClassName('description')];
let siteImgArray = [...document.getElementsByClassName('site-img')];
let page = document.querySelector('body');

console.log(page);

// Shows little title animation about new site
window.setTimeout(() => {
  newSiteNotice[0].id = 'visible';
  siteTitleHeading[0].id = 'move-up';
}, 2000);


//click anywhere else and the description fades
// page.addEventListener('click', () => {
//   for (let elm of siteDescArray){
//     elm.id = '';
//   }
// });

// loops through elements and gives them all a click event
function addClick(arr) {
  for (let elm of arr) {
    elm.addEventListener('click', addClass);
  };
};

// Adds opacity to the description div on click
function addClass(){
  this.id = 'show-description';
}




// If the screen size is smaller than a tablet media query on load then we
let tabletView = window.innerWidth <= 776 ? addClick(siteDescArray) : console.log("lol");
