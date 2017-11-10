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
    }
    function intellectualText() {
        $('.intellectual2').show();
        $('.notintellectual').hide();
    }
    function resetResponsibility() {
        $('.notresponsibility').show();
        $('.responsibility2').hide();
    }
    function responsibilityText() {
        $('.notresponsibility').hide();
        $('.responsibility2').show();
    }
    function resetComplex() {
        $('.notcomplex').show();
        $('.complex2').hide();
    }
    function complexText() {
        $('.notcomplex').hide();
        $('.complex2').show();
    }
    $('#intellectual').hover(intellectualText, resetIntellectual);
    $('#responsibility').hover(responsibilityText, resetResponsibility);
    $('#complex').hover(complexText, resetComplex);

})(jQuery); // End of use strict
