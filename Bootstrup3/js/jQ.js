$(function(){

'use strict';

//Navbar fixed but transparent
  $(window).scroll(function(){
      var navbar =$('.navbar');
  $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled'): navbar.removeClass('scrolled');
  });

// Tabs Section
  $('.tabs-section .list-switch li').click(function(){
  // Add Class selected To List Items in tabs section:
    $(this).addClass('selected').siblings().removeClass('selected');
    // Hide tabs Divs:
      $('.tabs-section .tabs-content > div').hide();
    // Show the clicked Tab 
      $('.' + $(this).data('class')).show();
  });

});
