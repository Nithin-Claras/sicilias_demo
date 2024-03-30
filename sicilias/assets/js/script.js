$(function () {
    
    $('body').on('click', '.header .burger_menu', function () {
        if ($('html').hasClass('open_menu')) {
            $('html').removeClass('open_menu');
        } else {
            $('html').addClass('open_menu');
        }
    });

    /** ONE TIME INIT **/
    root.setup(1);

    $(window).resize(function () {
        root.setup(0);
    });

    $(window).scroll(root.scrollEvent);
    
});

$(window).on('load', function () {
    root.scrollEvent();
});



    