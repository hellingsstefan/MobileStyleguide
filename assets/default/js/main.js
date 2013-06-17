/*jslint vars: true, devel: true */
/*global $: false */

$(function(){

    // Modernizr
    var event_listener = Modernizr.touch ? 'touchstart' : 'click';

    /**
     * Open or close the content to reveal the 
     * off-canvas-menu. Closing is possible via 
     * the '.btn-menu' or by touching the '.content'.
     */
    $(document).on(event_listener, '.content', function(e){

        var isBtn = $(e.target).hasClass('btn-menu') || $(e.target).hasClass('btn-menu-bar');
        var canvasVisible = $('html').hasClass('off-canvas-visible');

        if( !isBtn && canvasVisible ) {
            e.preventDefault();
            $('html').removeClass( 'off-canvas-visible' );
            // Wait for '.content' to close before hiding the off-canvas-menu
            setTimeout(function(){
                $('.off-canvas-menu').removeClass('menu-visible');
            }, 400);
        }
    
    }).on(event_listener, '.btn-menu, .btn-menu-bar', function(e) {
        
        e.stopPropagation();
        e.preventDefault();
        
        if($('html').hasClass('off-canvas-visible')) {
            setTimeout(function(){
                $('.off-canvas-menu').removeClass('menu-visible');
            }, 400);
        } else {
            $('.off-canvas-menu').addClass('menu-visible');
        }
        $('html').toggleClass('off-canvas-visible');
    
    /**
     * Open or close the dropdowns inside the
     * off-canvas-menu.
     */
    }).on(event_listener, '.dropdown-toggle', function(e) {
       
        e.preventDefault();
        $(this).parent().toggleClass('visible-submenu');
    
    /**
     * Open or close the '.filter' via '.btn-filter'.
     */
    }).on(event_listener, '.btn-filter', function(e) {
        e.preventDefault();
        alert('clicked');
        $('html').toggleClass('filter-visible');

    });

    /**
     * Reposition the Filter inside the DOM tree
     */
    var filter = $('.filter');
    if ( $(window).width() < 690 ) {
        $('body').prepend(filter);
    }

    /**
     * Replace the image source with a -2x image source
     * on retina screens
     */
    $('.logo img').retina();

});

/**
 * Replace the image source with a -2x image source on
 * retina screens.
 * This plugin requires you to have an image with '-2x'
 * at the end of the image name inside your image/assets folder.
 */
(function( $ ){
    $.fn.retina = function(retinaImg) {
        // Set default retina file part to '-2x'
        // Eg. some_image.jpg will become some_image-2x.png
        var settings = {'retinaImg': '-2x'};
        if(retinaImg) jQuery.extend(settings, { 'retinaImg': retinaImg });

        if(window.devicePixelRatio >= 2) {
            this.each(function(index, element) {
                if(!$(element).attr('src')) return;

                var checkForRetina = new RegExp("(.+)("+settings['retinaImg']+"\\.\\w{3,4})");
                if(checkForRetina.test($(element).attr('src'))) return;

                var new_image_src = $(element).attr('src').replace(/(.+)(\.\w{3,4})$/, "$1"+ settings['retinaImg'] +"$2");
                $.ajax({url: new_image_src, type: "HEAD", success: function() {
                    $(element).attr('src', new_image_src);
                }});
            });
        }
        return this;
    }
})( jQuery );