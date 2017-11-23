$(function() {
    var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);
    $('.navbaritem a').each(function() {
        if ($(this).attr('href') == pathname) {
            $(this).addClass('active');
        }
    });
});


(function() {
 var nav = document.getElementsByClassName('navbar'),
     anchor = nav.getElementsByTagName('a'),
     current = window.location.pathname.split('/')[1];
     for (var i = 0; i < anchor.length; i++) {
     if(anchor[i].href == current) {
         anchor[i].className = "active";
     }
 }
})();
