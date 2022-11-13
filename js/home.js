jQuery(function($){
    var $navbar = $('.nav_bar');
    var $gotop = $('.gotop');
    var $belowct = $('.below_content');
    $(window).scroll(function(event){
        var $current = $(this).scrollTop();
        if ($current == 0){
            $navbar.removeClass('navbar-color1');
            $navbar.removeClass('navbar-color2');
            $navbar.removeClass('navbar-color3');
            $gotop.hide();
            $belowct.removeClass('movedown');
        } else{
            if ($current > 150 && $current < 500){
                $navbar.removeClass('navbar-color2');
                $navbar.removeClass('navbar-color3');
                $navbar.addClass('navbar-color1');
                $gotop.show();
                $belowct.removeClass('movedown');
            } else {
                if ($current > 500 && $current < 1000){
                    $navbar.removeClass('navbar-color1');
                    $navbar.removeClass('navbar-color3');
                    $navbar.addClass('navbar-color2');
                    $belowct.removeClass('movedown');
                } else {
                    if ($current > 1000){
                        $navbar.removeClass('navbar-color1');
                        $navbar.removeClass('navbar-color2');
                        $navbar.addClass('navbar-color3');
                        $belowct.addClass('movedown');
                    }
                }
            }
        }
    });
});