!(function ($) {
    "use strict";


    $(window).on('load', function () {
        var portfolioIsotope = $('.products-container').isotope({
            itemSelector: '.products-item',
            layoutMode: 'fitRows'
        });

        $('#products-flters li').on('click', function () {
            $("#products-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
            aos_init();
        });
    });


    $(document).ready(function () {
        $('.venobox').venobox();
    });


    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            900: {
                items: 2
            }
        }
    });


    $(".products-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });


    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });
    }
    $(window).on('load', function () {
        aos_init();
    });

})(jQuery);