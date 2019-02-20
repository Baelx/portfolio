let newSiteNotice = document.getElementsByClassName('new');
let siteTitleHeading = document.getElementsByClassName('heading');

// let imgs = document.getElementsByClassName('site-img');
// let desc = document.getElementsByClassName('description');
//
// for (let i of imgs) => {
//   desc[i].width = imgs[i].width;
//   desc[i].height =imgs[i].width;
// })

window.setTimeout(() => {
  newSiteNotice[0].id = 'visible';
  siteTitleHeading[0].id = 'move-up';
}, 2000);
