(function ($) {
 "use strict";


    // Fires whenever a player has finished loading
    function onPlayerReady(event) {
        event.target.playVideo();
    }

// Fires when the player's state changes.
    function onPlayerStateChange(event) {
        // Go to the next video after the current one is finished playing
        if (event.data === 0) {
            $.fancybox.next();
        }
    }

    $(".various").fancybox({
        maxWidth	: 800,
        maxHeight	: 600,
        fitToView	: false,
        width		: '70%',
        height		: '70%',
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none'
    });




    <!-- Welcome Tabs -->
    /* jQuery activation and setting options for the tabs*/

    var tabbedNav = $("#tabbed-nav").zozoTabs({
        orientation: "horizontal",
        theme: "silver",
        position: "top-left",
        size: "medium",
        animation: {
            duration: 600,
            easing: "easeOutQuint",
            effects: "fade"
        },
        defaultTab: "tab1"
    });

    /* Changing animation effects*/
    $("#config input.effects").change(function () {
        var effects = $('input[type=radio]:checked').attr("id");
        tabbedNav.data("zozoTabs").setOptions({ "animation": { "effects": effects } });
    });





/*---------------------
 TOP Menu Stick
--------------------- */
var windows = $(window);

windows.on('scroll', function() {
    var $topG = $('.finance-navbar').offset().top;
    if ( $(window).scrollTop() > $topG + 66 ) {
        $('.finance-navbar').addClass('affix-coming')
    }
    else {
        $('.finance-navbar').removeClass('affix-coming')
    }
    $('.finance-navbar').affix({
        offset: {
            top: $topG + 150
        }
    })
});



/*----------------------------
 jQuery MeanMenu
------------------------------ */
    var navigation = $('.main-navigation-wrapper');
        if ($('#main-navigation-wrapper .navbar-nav li .dropdown-submenu').length) {
            $('#main-navigation-wrapper .navbar-nav li .dropdown-submenu').parent('li').children('a').append(function() {
                return '<button class="dopdown-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
            });
            $('#main-navigation-wrapper .navbar-nav .dopdown-nav-toggler').on('click', function() {
                if($(this).hasClass("dopdown-nav-toggler-active"))
                {
                    $(this).removeClass("dopdown-nav-toggler-active");
                    $('#main-navigation-wrapper .navbar-nav li ul.dropdown-submenu').fadeOut();
                }
                else
                {
                    $('#main-navigation-wrapper .navbar-nav .dopdown-nav-toggler').removeClass("dopdown-nav-toggler-active");
                    $('#main-navigation-wrapper .navbar-nav li ul.dropdown-submenu').hide();
                    var Self = $(this);
                    Self.addClass("dopdown-nav-toggler-active");
                    Self.parent().parent().children('.dropdown-submenu').slideToggle();
                }

                return false;
            });


        }



    $( "#speed" ).selectmenu();



/*--------------------------
 scrollUp
---------------------------- */
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});


    $('.dk-select').click(function(){
        $(this).find('.dk-select-options').toggle();
    });


    /*----------------------------
     Counter js active
    ------------------------------ */
    var count = $('.counter');
    count.counterUp({
		delay: 40,
		time: 3000
	});

/*--------------------------
 collapse
---------------------------- */
	var panel_test = $('.panel-heading a');
	panel_test.on('click', function(){
		panel_test.removeClass('active');
		$(this).addClass('active');
	});
/*--------------------------
 Parallax
---------------------------- */
    var parallaxeffect = $(window);
    parallaxeffect.stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });
/*--------------------------
 MagnificPopup
---------------------------- */
    $('.video-play').magnificPopup({
        type: 'iframe'
    });
    /*--------------------------
             Toggle
        ---------------------------- */

    $('.toggle-heading').on('click',function(){
        $(this).find(".fa-plus").toggle();
    });

    /*--------------------------
             slider carousel
        ---------------------------- */
    $("#owl-demo").owlCarousel({
        items :3,
        lazyLoad : true,
        nav:true,
        dots:false,
        margin: 15,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        navigation : true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });


    /*--------------------------
         slider carousel
    ---------------------------- */
    $("#owl-demo-4").owlCarousel({
        items :3,
        lazyLoad : true,
        nav:true,
        dots:true,
        navigation : true
    });

    /*--------------------------
         slider carousel
    ---------------------------- */
    var intro_carousel = $('.intro-carousel');
    intro_carousel.owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        dots:false,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    /*--------------------------
             services-4 carousel
        ---------------------------- */
    var intro_carousel = $('.our-services-4');
    intro_carousel.owlCarousel({
        loop:true,

        autoplay:true,
        margin: 20,
        dots:true,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

/*--------------------------
     Project carousel
---------------------------- */
	var Project_carousel = $('.project-carousel');
	Project_carousel.owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        dots:true,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


    /*--------------------------
     Project carousel
---------------------------- */
    var Project_carousel_about = $('.about-us');
    Project_carousel_about.owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });





/*----------------------------
 isotope active
------------------------------ */
	// project start
    $(window).on("load",function() {
        var $container = $('.project-content');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.project-menu li a').on("click", function() {
            $('.project-menu li a.active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
    //portfolio end


/*---------------------
 Testimonial carousel
---------------------*/

    var testimonial_carousel = $('.testimonial-carousel');
    testimonial_carousel.owlCarousel({
        loop:true,
        autoplay:true,
        nav:true,
        dots:false,
        margin:20,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    /*---------------------
 Testimonial carousel
---------------------*/

    var testimonial_carousel = $('.testimonial-carousel-4');
    testimonial_carousel.owlCarousel({
        loop:true,
        autoplay:true,
        nav:false,
        dots:true,
        margin:20,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    /*---------------------
 Testimonial carousel
---------------------*/

    var testimonial_carousel = $('.projects-wrapper');
    testimonial_carousel.owlCarousel({
        loop:true,
        autoplay:true,
        nav:true,
        dots:false,
        margin:20,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2
            },
            700:{
                items:4
            },
            1000:{
                items:4
            }
        }
    });

    /*---------------------
Testimonial-2 carousel
---------------------*/

    var testimonial2_carousel = $('.testimonials-wrap');
    testimonial2_carousel.owlCarousel({
        loop:true,
        autoplay:true,
        nav:false,
        dots:false,
        margin:20,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });


    /*---------------------
Project carousel
---------------------*/

    var projects_carousel = $('#our-projects');
    projects_carousel.owlCarousel({
        loop:true,
        autoplay:true,
        nav:true,
        dots:false,
        margin:0,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        responsive:{
            0: {
                items: 1
            },
            481: {
                items: 2
            },
            700: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });



    /*---------------------
  Blog carousel
 ---------------------*/

    var blog_carousel = $('.blog-carousel');
  blog_carousel.owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        margin:20,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
    /*---------------------
         News carousel
        ---------------------*/

    var News_carousel = $('.news-carousel');
    News_carousel.owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        margin:20,
        navText: ["<i class='icon icon-chevron-left'></i>","<i class='icon icon-chevron-right'></i>"],
        responsive:{
            0:{
                items:1
            },
            700:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });


/*----------------------------
    Contact form
------------------------------ */
	$("#contactForm").on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			formError();
			submitMSG(false, "Did you fill in the form properly?");
		} else {
			event.preventDefault();
			submitForm();
		}
	});
	function submitForm(){
		var name = $("#name").val();
		var email = $("#email").val();
		var msg_subject = $("#msg_subject").val();
		var message = $("#message").val();


		$.ajax({
			type: "POST",
			url: "assets/contact.php",
			data: "name=" + name + "&email=" + email + "&msg_subject=" + msg_subject + "&message=" + message,
			success : function(text){
				if (text === "success"){
					formSuccess();
				} else {
					formError();
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		$("#contactForm")[0].reset();
		submitMSG(true, "Message Submitted!")
	}

	function formError(){
		$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass();
		});
	}

	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h3 text-center tada animated text-success";
		} else {
			var msgClasses = "h3 text-center text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}

})(jQuery);