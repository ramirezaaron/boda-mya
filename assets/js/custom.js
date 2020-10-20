
(function ($) {
    "use strict";

    /* ------------------  2. Menu Mobile ------------------ */
    var $menu_show = $('.mobile-toggle'),
        $menu = $('header #menu-main'),
        $menu_yoga = $('header .yoga-menu'),
        $list = $("ul.nav-menu li a"),
        $list_firo = $("ul.firo-nav-menu li a"),
        $fixed_header = $('#fixed-header'),
        $fixed_header_dark = $('#fixed-header-dark'),
        $fixed_header_light = $('#fixed-header-light');


    $menu_show.on("click", function (e) {
        $menu.slideToggle();
        $menu_yoga.slideToggle();
    });
    $list.on("click", function (e) {
        var submenu = this.parentNode.getElementsByTagName("ul").item(0);
        if (submenu != null) {
            event.preventDefault();
            $(submenu).slideToggle();
        }
    });

    $list_firo.on("click", function (e) {
        var submenu = this.parentNode.getElementsByTagName("ul").item(0);
        if (submenu != null) {
            event.preventDefault();
            $(submenu).slideToggle();
        }
    });

    /*==============================
    Loading
    ==============================*/
    $(window).on('load', function () {
        $('body').imagesLoaded(function () {
            $('.nile-preloader').fadeOut();
        });
    });

    /*==============================
    Animation
    ==============================*/
    $('.animate').scrolla({
        once: true, // only once animation play on scroll
        mobile: false, // disable animation on mobiles 
    });

    /*-------------------  Firo Menu  --------------- */
    var $firo_menu = $('#firo-menu'),
        $open_firo_menu = $('.sidebar-menu-toggle'),
        $close_firo_menu = $('.close-firo-menu');

    $close_firo_menu.on("click", function (e) {
        $firo_menu.slideUp();
    });
    $open_firo_menu.on("click", function (e) {
        $firo_menu.slideDown();
    });

    /* ------------------  5.Owl Slider ------------------ */
    var team_slider = $(".team-slider");
    team_slider.owlCarousel({
        slideSpeed: 1000,
        autoPlay: true,
        loop: true,
        nav: true,
        dots: true,
        navText: ["<span class='arrow_carrot-left box-shadow'></span>", "<span class='arrow_carrot-right box-shadow'></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });    

    /* ------------------  7. Fixed Header ------------------ */
    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 50) {
            $fixed_header.addClass('fixed-header');
            $fixed_header_dark.addClass('fixed-header-dark');
            $fixed_header_light.addClass('fixed-header-light');
        } else {
            $fixed_header.removeClass('fixed-header');
            $fixed_header_dark.removeClass('fixed-header-dark');
            $fixed_header_light.removeClass('fixed-header-light');
        }
    });

    /*==============================================================
    wow animation - on scroll
    ==============================================================*/
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    $(window).imagesLoaded(function () {
        wow.init();
    });

    /*==============================================================
    // Animate the scroll to top
    ==============================================================*/
    $(window).on('scroll', function (e) {

        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    $('.go-top').on("click", function (e) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    })


    /**************
     Sticky Sidebar 
    **************/
    if ($(".sticky-content")[0]) {
        var $sticky_content = $('.sticky-content'),
            $sticky_sidebar = $('.sticky-sidebar');

        $sticky_content.theiaStickySidebar({
            additionalMarginTop: 30
        });
        $sticky_sidebar.theiaStickySidebar({
            additionalMarginTop: 30
        });
    }
}(jQuery));
