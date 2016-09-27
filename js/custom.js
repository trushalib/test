jQuery(document).ready(function(){

    /*** select box***/    
    jQuery('select.select').each(function(){
      var title = jQuery(this).attr('title');
      if( jQuery('option:selected', this).val() != ''  ) title = jQuery('option:selected',this).text();
      jQuery(this)
      .css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
      .after('<span class="select">' + title + '</span>')
      .change(function(){
      val = jQuery('option:selected',this).text();
         jQuery(this).next().text(val);
      })
     });   
/*** FAQ Accordin ***/
      jQuery(".one h5").addClass("active-acc");
      jQuery(".one h5").siblings("div").css("display","block");
      
      jQuery(".accordion h5 a").click(function(){
        jQuery(".accordion h5").removeClass("active-acc");
        jQuery(this).parent("h5").addClass("active-acc");
        
        jQuery(".accordion section div").stop().slideUp(500);
        jQuery(this).parent().siblings("div").stop().slideDown(500);
      });
   
    

    /*** home slider ***/
    jQuery('.bxslider').bxSlider({controls: false, auto: true});


    jQuery('#recenetviewslider').bxSlider({
            auto: false,
            pager: false,
            minSlides:1,
            maxSlides:4,
            slideWidth: 234,
            slideMargin:8,
            controls: true,
            infiniteLoop:false                                  
          });

  jQuery('#showinterest').bxSlider({
            auto: false,
            pager: false,
            minSlides:1,
            maxSlides:4,
            slideWidth: 234,
            slideMargin:8,
            controls: true,
            infiniteLoop:false                                  
          });
                                
    jQuery('#carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 86,
                itemMargin: 5,
                asNavFor: '#product-slider'
              });

              jQuery('#product-slider').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: false,
                animationLoop: false,
                slideshow: false,
                sync: "#carousel",
                start: function(slider){
                  jQuery('body').removeClass('loading');
                }
              });

   

});

