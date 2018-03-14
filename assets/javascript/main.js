// Carousel Controller
$(function(){
    $(".carousel").carousel({
      interval: 3000,
      wrap: true,
      pause: false,
      cycle: true
    });
  });
  function updateCarouselSizes(){
    jQuery(".carousel").each(function(){
      // I wanted an absolute minimum of 10 pixels
      var maxheight=10; 
      if(jQuery(this).find('.item,.carousel-item').length) {
        // We've found one or more item within the Carousel...
        jQuery(this).carousel(); // Initialise the carousel (include options as appropriate)
        // Now we iterate through each item within the carousel...
        jQuery(this).find('.item,.carousel-item').each(function(k,v){ 
          if(jQuery(this).outerHeight()>maxheight) {
            // This item is the tallest we've found so far, so store the result...
            maxheight=jQuery(this).outerHeight();
          }
        });
        // Finally we set the carousel's min-height to the value we've found to be the tallest...
        jQuery(this).css("min-height",maxheight+"px");
      }
    });
  }
  
  jQuery(function(){
    jQuery(window).on("resize",updateCarouselSizes);
    updateCarouselSizes();
  }