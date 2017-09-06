$(document).ready(function(){  
    (function($) {
        $.fn.clickToggle = function(func1, func2) {
            var funcs = [func1, func2];
            this.data('toggleclicked', 0);
            this.click(function() {
                var data = $(this).data();
                var tc = data.toggleclicked;
                $.proxy(funcs[tc], this)();
                data.toggleclicked = (tc + 1) % 2;
            });
            return this;
        };
    }(jQuery));
    $('.dropdown .click').clickToggle(function() {
        $('.dropdown ul').animate({left: "-150px"}, 200, function() {
            $('.dropdown button i').removeClass('fa-bars').addClass('fa-times');
            $('.dropdown ul').animate({left: "0px"}, 320);
            $('.dropdown .click').animate({left: "150px"}, 320);
        });
    }, function() {
        
        $('.dropdown .click').animate({left: "0px"}, 320);
        $('.dropdown ul').animate({left: "-150px"}, 320, function() {
            $('.dropdown button i').removeClass('fa-times').addClass('fa-bars');
            $('.dropdown ul').animate({left: "-215px"}, 200);
        });
    });
    $('.footer-2 button').on("click",function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow', function () {
        });
    });
});