(function($) {
    $.fn.invisible = function() {
        return this.css("visibility", "hidden");
    };
    $.fn.visible = function() {
        return this.css("visibility", "visible");
    };
})(jQuery);

(function($) {
    function resetIntellectual() {
        $('.notintellectual').show();
        $('.intellectual2').hide();
        $('#postlink').removeAttr("href");
    }
    function intellectualText() {
        $('.intellectual2').show();
        $('.notintellectual').hide();
        $('#postlink').attr('href', "#body");
    }
    function resetResponsibility() {
        $('.notresponsibility').show();
        $('.responsibility2').hide();
        $('#postlink').removeAttr("href");
    }
    function responsibilityText() {
        $('.notresponsibility').hide();
        $('.responsibility2').show();        
        $('#postlink').attr('href', "#body");
    }
    function resetComplex() {
        $('.notcomplex').show();
        $('.complex2').hide();
        $('#postlink').removeAttr("href");
    }
    function complexText() {
        $('.notcomplex').hide();
        $('.complex2').show();        
        $('#postlink').attr('href', "#body");
    }
    $('#intellectual').hover(intellectualText, resetIntellectual);
    $('#responsibility').hover(responsibilityText, resetResponsibility);
    $('#complex').hover(complexText, resetComplex);

})(jQuery); // End of use strict
