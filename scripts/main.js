//(function JStest() {
//    console.log("hello!");
//})();
//
//jQuery.noConflict();


jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('.menu ul').toggleClass('active');
    e.preventDefault();
    });
    });

jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('#logo').toggleClass('active');
    e.preventDefault();
    });
    });

jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('#logotag').toggleClass('active');
    e.preventDefault();
    });
    });      
  

//    $(".gallery").on('click',function(){
//        //removes enlarged class from all images
//        $(".gallery.enlarged").removeClass('enlarged');
//        //adds enlarged class to clicked image
//        $(this).addClass('enlarged');
//    });

//    $(function ()
//{
//    $('img').on('click', function ()
//    {
//        $(this).width(1000);
//    });
//});


