(function($) {
    $.fn.invisible = function() {
        return this.css("visibility", "hidden");
    };
    $.fn.visible = function() {
        return this.css("visibility", "visible");
    };
})(jQuery);

(function($) {
    var postActive = false;
    $('#postlink').click(function(){
        if (postActive) {
            $("html, body").animate({ scrollTop: $("#readhere").offset().top * 1.1}, 600);
        }
        return false;
    });
    $('.upfooter').click(function(){
        $("html, body").animate({ scrollTop: $(window).height()*1.15}, 600);
        return false;
    })
    $('.downfooter').click(function(){
        $('html,body').animate({scrollTop: $("#starthere").offset().top}, 600);
        return false;
    });
    $('.upheader').click(function(){
        $("html, body").animate({ scrollTop: 0}, 600);
        return false;
    });
    function resetIntellectual() {
        $('.notintellectual').show();
        $('.intellectual2').hide();
        postActive = false;
    }
    function intellectualText() {
        $('.intellectual2').show();
        $('.notintellectual').hide();
        postActive = true;
    }
    function resetResponsibility() {
        $('.notresponsibility').show();
        $('.responsibility2').hide();
        postActive = false;
    }
    function responsibilityText() {
        $('.notresponsibility').hide();
        $('.responsibility2').show();        
        postActive = true;
    }
    function resetComplex() {
        $('.notcomplex').show();
        $('.complex2').hide();
        postActive = false;
    }
    function complexText() {
        $('.notcomplex').hide();
        $('.complex2').show();        
        postActive = true;
    }
    function resetWorld() {
        $('.notworld').show();
        $('.world2').hide();
        postActive = false;
    }
    function worldText() {
        $('.notworld').hide();
        $('.world2').show();        
        postActive = false;
    }
    $('#intellectual').hover(intellectualText, resetIntellectual);
    $('#responsibility').hover(responsibilityText, resetResponsibility);
    $('#complex').hover(complexText, resetComplex);
    $('#world').hover(worldText, resetWorld);
    
    $('#intellectual').click(function() {
        $('#postiframe').attr("src", "intellectualpost.html");
    });
    $('#responsibility').click(function() { 
        $('#postiframe').attr("src", "responsibilitypost.html");
    });
    $('#complex').click(function() {   
        $('#postiframe').attr("src", "complexpost.html");
    });
    $('#world').click(function() {   
        window.open('http://usr-honour-systems.github.io');
       // $('#postiframe').attr("src", "http://usr-honour-systems.github.io/index.html");
    });

})(jQuery); // End of use strict
