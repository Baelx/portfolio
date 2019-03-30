let newSiteNotice = document.getElementsByClassName('new');
let siteTitleHeading = document.getElementsByClassName('heading');

let siteDescArray = [...document.getElementsByClassName('description')];
let page = document.querySelector('body');

// Fire function each time window is loaded or resized
['load','resize'].forEach(event =>
  window.addEventListener(event, () => {
    tabletViewCheck();
    titleAnimation();
  })
);

// Shows little title animation about new site
function titleAnimation() {
  this.setTimeout(() => { // Refers to the window object where it's invoked
    newSiteNotice[0].id = 'visible';
    siteTitleHeading[0].id = 'move-up';
  }, 2000);
}

// Event delegation pattern
function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement;
}

// Show description if clicked elm is site-img. Otherwise, hide all descriptions
function showDesc(e) {
  let target = getEventTarget(e);
  if(target.classList.contains('site-img')) {
    target.previousSibling.previousSibling.id = 'show-description';
  } else {
    for (let elm of siteDescArray){
      elm.id = '';
    };
  }
}

// If the screen size is smaller than a tablet media query on load then we apply click listener
function tabletViewCheck() {
  if (this.innerWidth <= 776) page.addEventListener('click', showDesc);
}
