var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Hawaii/echeveria.jpg') {
      myImage.setAttribute ('src','images/Hawaii/IMG_2486.jpg');
    }
    if(mySrc === 'images/Hawaii/IMG_2486.jpg') {
      myImage.setAttribute ('src','images/Hawaii/IMG_2441.jpg');
    }
    if(mySrc === 'images/Hawaii/IMG_2441.jpg') {
      myImage.setAttribute ('src','images/Hawaii/IMG_2446.jpg');
    }
    if(mySrc === 'images/Hawaii/IMG_2446.jpg') {
      myImage.setAttribute ('src','images/Hawaii/IMG_2462.jpg');
    }
    if(mySrc === 'images/Hawaii/IMG_2462.jpg') {
      myImage.setAttribute ('src','images/Hawaii/echeveria.jpg');
    }
}
