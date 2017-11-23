$(function() {
    var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);
    $('.current-item a').each(function() {
        if ($(this).attr('href') == pathname) {
            $(this).addClass('active');
        }
    });
});

jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');
 
        e.preventDefault();
    });
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("navbar").classList.toggle("show");
}


var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';