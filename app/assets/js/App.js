let newSiteNotice = document.getElementsByClassName('new');
let siteTitleHeading = document.getElementsByClassName('heading');


window.setTimeout(() => {
  newSiteNotice[0].id = 'visible';
  siteTitleHeading[0].id = 'move-up';
}, 2000);
