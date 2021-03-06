/*global $ */

$( function () {
  'use strict';
  //Adjus Slider Height

  var winH   = $(window).height(),
      upperH = $('.upper-bar').innerHeight(),
      navH   = $('.navbar').innerHeight();

    $('.slider , .carousel-item ').height(winH - (upperH + navH));

    // featured-work Shuffle

    $('.featured-work ul li').on('click',function(){
      $(this).addClass('active').siblings().removeClass('active');

      if( $(this).data('class') === 'all'){
        $('.featured-work .shuffle-images .col-md').css('opacity',1);
      }
      else {
        $('.featured-work .shuffle-images .col-md').css('opacity','0.08');
        $($(this).data('class')).parent().css('opacity',1);

      }
    });
});
