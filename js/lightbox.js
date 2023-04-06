"use strict"; // Start of use strict
/*=====================*/
/* LIGHT-BOX */
/*=====================*/

/*activity indicator functions*/
var activityIndicatorOn = function(){
    $('<div id="imagelightbox-loading"><div></div></div>').appendTo('body');
};
var activityIndicatorOff = function(){
    $('#imagelightbox-loading').remove();
};

/*close button functions*/
var closeButtonOn = function(instance){
    $('<button type="button" id="imagelightbox-close" title="Close"></button>').appendTo('body').on('click touchend', function(){ $(this).remove(); instance.quitImageLightbox(); return false; });
};
var closeButtonOff = function(){
    $('#imagelightbox-close').remove();
};

/*overlay*/
var overlayOn = function(){$('<div id="imagelightbox-overlay"></div>').appendTo('body');};
var overlayOff = function(){$('#imagelightbox-overlay').remove();};

/*caption*/
var captionOff = function(){$('#imagelightbox-caption').remove();};
var captionOn = function(){
    var description = $('a[href="' + $('#imagelightbox').attr('src') + '"] img').attr('alt');
    if(description.length)
        $('<div id="imagelightbox-caption">' + description +'</div>').appendTo('body');
};

/*arrows*/
var arrowsOn = function(instance, selector) {
    var $arrows = $('<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"><i class="fa fa-chevron-left"></i></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"><i class="fa fa-chevron-right"></i></button>');
    $arrows.appendTo('body');
    $arrows.on('click touchend', function(e) {
        e.preventDefault();
        var $this = $(this);
        if( $this.hasClass('imagelightbox-arrow-left')) {
            instance.loadPreviousImage();
        } else {
            instance.loadNextImage();
        }
        return false;
    });
};
var arrowsOff = function(){$('.imagelightbox-arrow').remove();};

var selectorG = '.lightbox';
if($(selectorG).length){
    var instanceG = $(selectorG).imageLightbox({
        quitOnDocClick: false,
        onStart:        function() {arrowsOn(instanceG, selectorG);overlayOn(); closeButtonOn(instanceG);},
        onEnd:          function() {arrowsOff();captionOff(); overlayOff(); closeButtonOff(); activityIndicatorOff();},
        onLoadStart:    function() {captionOff(); activityIndicatorOn();},
        onLoadEnd:      function() {$('.imagelightbox-arrow').css('display', 'block');captionOn(); activityIndicatorOff();}
    });
}

$('.fancybox').fancybox();


$('.fancybox-media')
    .attr('rel', 'media-gallery')
    .fancybox({
        openEffect : 'none',
        closeEffect : 'none',
        prevEffect : 'none',
        nextEffect : 'none',

        arrows : false,
        helpers : {
            media : {},
            buttons : {}
        }
    });