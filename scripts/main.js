var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Hawaii/echeveriaweb.jpg') {
      myImage.setAttribute ('src','images/Hawaii/IMG_2486web.jpg');
    }
    if(mySrc === 'images/Hawaii/IMG_2486web.jpg') {
      myImage.setAttribute ('src','images/Hawaii/IMG_2441web.jpg');
    }
    if(mySrc === 'images/Hawaii/IMG_2441web.jpg') {
      myImage.setAttribute ('src','images/Hawaii/IMG_2446web.jpg');
    }
    if(mySrc === 'images/Hawaii/IMG_2446web.jpg') {
      myImage.setAttribute ('src','images/Hawaii/IMG_2462web.jpg');
    }
    if(mySrc === 'images/Hawaii/IMG_2462web.jpg') {
      myImage.setAttribute ('src','images/Hawaii/echeveriaweb.jpg');
    }
}
