 var rightArrow = $('.testmo .fa-chevron-right'),
        leftArrow = $('.testmo .fa-chevron-left');
    
    $(function checkClients() {
        
        if ($('.client:first').hasClass('active')) {
            
            leftArrow.fadeOut();    }
        
        
        else{    leftArrow.fadeIn(); }        
        
        
         if ($('.client:last').hasClass('active')) {
            rightArrow.fadeOut();        
        }
        
        
        else{
            
               rightArrow.fadeIn();

        }
    
        checkClients();
        
  
        
     
    });
    