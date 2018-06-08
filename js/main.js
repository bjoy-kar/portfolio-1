jQuery(document).ready(function() {

    /*=============================================
        Template Name   : Consult | HTML5 Template
        Template URL    : http://template.helloxpart.com/consult
        Author          : helloxpart
        Version         : 1.0
        Tags            : Consultancy, Consult
    ===============================================*/
    /*=========== TABLE OF CONTENTS ===========
        01. Hamburger Menu Icon
        02. Hamburger Menu Icon
        03. Scroll To Top
        04. Video Active Js 
        05. Home page 1 Masonery Active
        06. Our serviecasousel Active
        07. home blog section casousel Active
        08. home blog section casousel Active
        09. home blog section casousel Active
        10. Digital Client Active
        11. Home 01 Slider Active
        12. Home 01 Slider Active
        13. Gmaps active js
        14. MixItUp JS Active
        15. Wow JS Active
        16. Counter Up
        17. Textillate
        18. Preloader


    ======================================*/



    jQuery(".blog_slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        customPaging : function(slider, i) {
                var thumb = $(slider.$slides[i]).data();
                return '<a>'+(i+1)+'</a>';
            },
        responsive: [
            {
                breakpoint: 1024,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: true,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: true,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });





    jQuery(".testimonial_slider").slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        customPaging : function(slider, i) {
                var thumb = $(slider.$slides[i]).data();
                return '<a>'+(i+1)+'</a>';
            },
        responsive: [
            {
                breakpoint: 1024,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                } 
            },
        ]
    });





    /* COUNTUP JQUERY */
    jQuery('.counting_number').countUp({
        'time': 2000,
        'delay': 10,
    });





    jQuery(function () {
        "use strict";
        jQuery('.mix .item').slice(0, 6).show();
        jQuery('#loadmore').on('click', function (e) {
            e.preventDefault();
            jQuery('.mix .item:hidden').slice(0, 8).slideDown();
            if (jQuery('.mix .item:hidden').length === 0) {
                jQuery('#loadmore').fadeOut('slow/400/fast');
            }
        });
    });
    
    
    /*----------------------------
        01. MIXITUP JQUERY
    ------------------------------ */
    var mixer = mixitup('.portfolio_items');
    var mixer = mixitup(containerEl);
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item',
        },
        animation: {
            duration: 300,
        }
    });
    
});