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
            $("html, body").animate({ scrollTop: $(window).height()*2}, 600);
        }
        return false;
    });
    $('.upfooter').click(function(){
        $("html, body").animate({ scrollTop: $(window).height()*1.1}, 600);
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
    $('#intellectual').hover(intellectualText, resetIntellectual);
    $('#responsibility').hover(responsibilityText, resetResponsibility);
    $('#complex').hover(complexText, resetComplex);
    
    $('#intellectual').click(function() {
        $('#postiframe').attr("src", "intellectualpost.html");
    });
    $('#responsibility').click(function() { 
        $('#postiframe').attr("src", "responsibilitypost.html");
    });
    $('#complex').click(function() {   
        $('#postiframe').attr("src", "complexpost.html");
    });

})(jQuery); // End of use strict
