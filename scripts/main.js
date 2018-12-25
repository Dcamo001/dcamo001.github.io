//(function JStest() {
//    console.log("hello!");
//})();
//
//jQuery.noConflict();

jQuery(document).ready(function() {
  jQuery(".toggle-nav").click(function(e) {
    jQuery(this).toggleClass("active");
    jQuery(".mobileMenubar").toggleClass("active");
    e.preventDefault();
  });
});

$(document).ready(function() {
  $("[href]").each(function() {
    if (this.href == window.location.href) {
      $(this).addClass("active");
    }
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
