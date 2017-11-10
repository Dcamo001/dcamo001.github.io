var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/echeveria.jpg') {
      myImage.setAttribute ('src','images/IMG_2486.jpg');
    }
    if(mySrc === 'images/IMG_2486.jpg') {
      myImage.setAttribute ('src','images/IMG_2441.jpg');
    }
    if(mySrc === 'images/IMG_2441.jpg') {
      myImage.setAttribute ('src','images/IMG_2446.jpg');
    }
    if(mySrc === 'images/IMG_2446.jpg') {
      myImage.setAttribute ('src','images/IMG_2462.jpg');
    }
    if(mySrc === 'images/IMG_2462.jpg') {
      myImage.setAttribute ('src','images/echeveria.jpg');
    }
}
