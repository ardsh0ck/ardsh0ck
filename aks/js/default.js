/**
 * Created by atkachev on 4/9/16.
 */

$(function() {
    $(".js-phones-button").click(function(){
        $(".js-phones").toggleClass("phones-modal_animate_show");
        $("body").toggleClass("overflow-hidden");
    });
});

$(function () {
    $(".js-chosen").chosen({
        width: "100%",
        disable_search: true
    });
});

$(function () {
    if (window.matchMedia('(max-width: 767px)').matches) {
        $(".js-chosen option:first-child").remove();
    }
});

$(function($){
    $(".js-phone-input").mask("+38 (999) 999-99-99");
});