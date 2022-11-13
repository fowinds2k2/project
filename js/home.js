jQuery(function($){
    var $navbar = $('.nav_bar');
    var $gotop = $('.gotop');
    $(window).scroll(function(event){
        var $current = $(this).scrollTop();
        // if ($current > 100){
        //     $navbar.addClass('navbar-color');
        //     $gotop.show();
        // } else {
        //     $navbar.removeClass('navbar-color');
        //     $gotop.hide();
        // }
        if ($current == 0){
            $navbar.removeClass('navbar-color1');
            $navbar.removeClass('navbar-color2');
            $navbar.removeClass('navbar-color3');
            $gotop.hide();
        } else{
            if ($current > 150 && $current < 500){
                $navbar.removeClass('navbar-color2');
                $navbar.removeClass('navbar-color3');
                $navbar.addClass('navbar-color1');
                $gotop.show();
            } else {
                if ($current > 500 && $current < 1000){
                    $navbar.removeClass('navbar-color1');
                    $navbar.removeClass('navbar-color3');
                    $navbar.addClass('navbar-color2');
                } else {
                    if ($current > 1000){
                        $navbar.removeClass('navbar-color1');
                        $navbar.removeClass('navbar-color2');
                        $navbar.addClass('navbar-color3');
                    }
                }
            }
        }
    });
});