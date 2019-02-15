const boxes = Array.from(document.querySelectorAll('.site-wrap'));
const newSiteNotice = document.getElementsByClassName('new');
const siteTitleHeading = document.getElementsByClassName('heading');

boxes.forEach(elm => {
  elm.addEventListener('mouseover', function(event) {
    // event.target.nextElementSibling.classList.add('see-more__reveal');
    // event.target.nextElementSibling.nextElementSibling.classList.add('see-more__reveal');
  })
})

window.setTimeout(() => {
  newSiteNotice[0].id = 'visible';
  siteTitleHeading[0].id = 'move-up';
}, 2000);
