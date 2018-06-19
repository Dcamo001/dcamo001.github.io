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

    $('[data-fancybox="images"]').fancybox({
        afterLoad : function(instance, current) {
            var pixelRatio = window.devicePixelRatio || 1;
    
            if ( pixelRatio > 1.5 ) {
                current.width  = current.width  / pixelRatio;
                current.height = current.height / pixelRatio;
            }
        }
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


