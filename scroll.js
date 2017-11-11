function goToAnchor(id) {
    $('html,body').animate({scrollTop: $("#"+id).offset().top},0);
}
goToAnchor("starthere");