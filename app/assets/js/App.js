
let boxes = document.querySelectorAll('.site-wrap');

for(i=0; i < boxes.length; i++){
  boxes[i].addEventListener('mouseover', (event) => {
    console.log(event);
  });
}
