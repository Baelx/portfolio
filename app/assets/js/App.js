
let boxes = document.querySelectorAll('.site-wrap');

for(i=0; i < boxes.length; i++){
  boxes[i].addEventListener('mouseover', function(event) {
    console.log(event);
    console.log(boxes[i].children);
  });
}
