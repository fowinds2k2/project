jQuery(function($){
    var $navbar = $('.nav_bar');
    var $gotop = $('.gotop');
    $(window).scroll(function(event){
        var $current = $(this).scrollTop();
        if ($current > 100){
            $navbar.addClass('navbar-color');
            $gotop.show();
        } else {
            $navbar.removeClass('navbar-color');
            $gotop.hide();
        }
    });
});