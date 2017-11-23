function setActive() { // defines function
    var pathname = (window.location.pathname.match(/[^/]+$/)[0]);
    $('.current-item a').each(function() {
        console.log("pathname ->", pathname)
        if ($(this).attr('href') == pathname) {
            $(this).addClass('active');
        }
    });
}

setActive(); // calls function



jQuery.noConflict();
jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');
 
        e.preventDefault();
    });
});

