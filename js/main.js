(function ($) {
    "use strict";
    var wWidth = $(window).width();

    jQuery(document).ready(function ($) {

        $('.venobox').venobox(); 

    });
    
    
    /*var $grid = $('.portfoilo-wrapper').isotope({
        itemSelector: '.single-portfolio',
        masonry: {}
    });
    
    var filterFns = {
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
    };
    $('.filters').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });
    $('.filters').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'li', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });*/


    

    //--------Scroll Top---------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll_top').fadeIn();
            $('.scroll_top').removeClass('not_visible');
        } else {
            $('.scroll_top').fadeOut();
        }
    });
    $('.scroll_top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });


}(jQuery));
