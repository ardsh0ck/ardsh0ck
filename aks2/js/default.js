/**
 * Created by atkachev on 4/9/16.
 */

$(function(){

    // Callback
    $(".js-callback-input").mask("(999) 999-99-99");


    // Top slider
    $('.js-promo-slider').bxSlider({
        controls: false,
        auto: true
    });


    // Goods slider
    var goodsSlider = $('.js-goods').bxSlider({
        slideWidth: 165,
        minSlides: 3,
        maxSlides: 5,
        slideMargin: 30,
        pager: false,
        controls: false,
        auto: true
    });

    $('.js-slider-next').click(function(){
        goodsSlider.goToNextSlide();
        return false;
    });

    $('.js-slider-prev').click(function(){
        goodsSlider.goToPrevSlide();
        return false;
    });


    // Tabs
    $('.js-tabs-item').hide();
    $('.js-tabs-item:first-of-type').show();
    $('.js-tab').click(function(e){
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#'+$this.parents('.js-tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('.js-tab'),
            target = $this.attr('href');
        others.removeClass('tabs__link_state_active');
        $this.addClass('tabs__link_state_active');
        $(tabgroup).children('div').hide();
        $(target).show();

    });


    // Modal cart
    $('.js-cart-button').click(function () {
        $('.js-modal-cart').fadeIn(300);
        $('body').addClass('overflow-hidden');
    });

    $('.js-cart-close').click(function () {
        $('.js-modal-cart').fadeOut(300);
        $('body').removeClass('overflow-hidden');
    });


    // Hidden catalog
    $(".js-catalog-button").click(function () {
        $(".js-inside-catalog").toggle();
    });

    /*$(document).mouseup(function(e){
        var catalogContainer = $(".js-inside-catalog");

        if (!catalogContainer.is(e.target) // if the target of the click isn't the container...
            && catalogContainer.has(e.target).length === 0) // ... nor a descendant of the container
        {
            catalogContainer.hide();
        }
    });*/

    var innerWidth = $(".inner").width();
    $(".js-catalog-subwrapper").css('width', innerWidth).css('width', '-=270px');


    // Custom scroll
    $(window).on("load",function(){
        $(".js-filters-list").mCustomScrollbar({
            axis:"y",
            theme: "dark"
        });
    });

    // Category slider
    $('.js-category-slider').bxSlider({
        controls: false,
        auto: true,
        speed: 1000
    });

    // Category compare
    $('.js-compare-checkbox').click(function() {
        if( $(this).is(':checked')) {
            $(".js-compare-link").show();
        } else {
            $(".js-compare-link").hide();
        }
    });
});
