const boxes = Array.from(document.querySelectorAll('.site-wrap'));

boxes.forEach(elm => {
  elm.addEventListener('mouseover', function(event) {
    // event.target.nextElementSibling.classList.add('see-more__reveal');
    // event.target.nextElementSibling.nextElementSibling.classList.add('see-more__reveal');
  })
})
