$(function(){
    var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);
    $('.navbar a').each(function(){
        if ($(this).attr('href') == pathname){
        $(this).addClass('active');
        }
    });
   });