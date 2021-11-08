/*global $, alert, console*/
$(function () {
    'use strict';
    
    //Trigger The Scroll
    
    $('html').niceScroll({
        
        cursorcolor:'#f7600e',
        cursorwidth:10,
        cursorborderradius:0,
        cursorborder:'1px solid #f7600e'
        
       
        
        
    
    
    });
    
    
    //Adjust The header Size 
    
    $('.header').height($(window).height());
    
    
    //Scroll To Features Section 
    
    $('.header .arrow i').click(function () {
        
        $('html,body').animate({
            scrollTop: $('.features').offset().top
            
        
        
        }, 1000);
        
        });
    
       //Scroll To Contact Section 
    
    $('.hire').click(function () {
        
        $('html,body').animate({
            scrollTop: $('.contact').offset().top
            
        
        
        }, 2000);
        
        });
    
    
       //Scroll To Our-work Section 
    
    $('.our-projects').click(function () {
        
        $('html,body').animate({
            scrollTop: $('.our-work').offset().top
            
        
        
        }, 2000);
        
        });
    
    
    
    
    
    
    
    
    
    //Show The hidde Items 
    
    $('.our-work .show-more button').click(function(){
        
        $('.our-work .items-box .hidden').fadeIn(2000);
        
    });
    
    
    
    //Navigation Between Clients 
    
      var leftArrow = $('.testmo .fa-chevron-left'),
        
        rightArrow = $('.testmo .fa-chevron-right');
    
    function checkClients() {
        
        if ($('.client:first').hasClass('active')) {
            
            leftArrow.fadeOut();
            
        } else {
            
            leftArrow.fadeIn();
        }
        
        if ($('.client:last').hasClass('active')) {
            
            rightArrow.fadeOut();
            
        } else {
            
            rightArrow.fadeIn();
        }
                
    }
    
    checkClients();
    
    $('.testmo i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testmo .active').fadeOut(100, function () {
               
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        } else {
            
            $('.testmo .active').fadeOut(100, function () {
               
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        }
        
    });
    
 
    
    
 
});
