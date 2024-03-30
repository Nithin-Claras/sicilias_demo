// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (f) {
    setTimeout(f, 1000 / 60)
};

//Page functions
var root = {
    _width: 0,
    _height: 0,
    _header_height: 0,
    setup: function (init) {
        this._width = $(window).width();
        this._height = $(window).height();

        if (init === 1) {
            //Code that should be executed only once goes here
            //Add target blank for external links
            $("a[href^=http]").each(function () {
                if (this.href.indexOf(location.hostname) === -1)
                    $(this).attr('target', "_blank");
            });
            root.matchHeight();
            root.mobileMenu();
        }
        //Code that should execute on window resize goes here
        
    },
    scrollEvent: function (init) {
        requestAnimationFrame(function () {
            //Add layer behind sticky menu
            var st = $(window).scrollTop();
            if (st >= 200) {
                $('html').addClass('has-scrolled');
            } else {
                $('html').removeClass('has-scrolled');
            }
        });
    },
    matchHeight: function () {
        $('.art .title_60').matchHeight({});
        $('.blog .points').matchHeight({});
    },
    mobileMenu: function () {
        var menu_div = $('<div/>').attr('class', 'mobile-menu');
        menu_div.appendTo('body');
        var header = $('.header').clone();
        header.appendTo('.mobile-menu');
    },
};







