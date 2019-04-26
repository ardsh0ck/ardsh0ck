/**
 * Created by sergey-sla on 28.04.2015.
 */

window.log = function() {
    try {
        return console.log.apply(console, arguments);
    } catch (_error) {}
};


$(function () {


    $("li.catalog-menu__level-1 > span, li.catalog-menu__level-2 > a").click(function(e) {
        e.preventDefault();
        var $this = $(this);

        if($this[0].nodeName == 'SPAN')
        {
            $('.js-sub-menu').not($this.next()).hide().prev().removeClass('catalog-menu__title_active');

            $(this).addClass('catalog-menu__title_active').next().slideToggle(150, function () {

                if ($this.hasClass('catalog-menu__title_active') && $this.next().is(':hidden')) {
                    $this.removeClass('catalog-menu__title_active');
                }

                if ($this.next().hasClass('js-sly-product__accessories') && $this.next().is(':visible')) {
                    slyInit();
                }

                // сворачиваем все под-меню
                $('.js-sub-menu-2').hide().prev().removeClass('icon-down');
            });
        }
        else
        {
            $('.js-sub-menu-2').not($this.next()).hide().prev().removeClass('icon-down');
            $this.addClass('icon-down').next().slideToggle(150, function () {

                if ($this.hasClass('icon-down') && $this.next().is(':hidden')) {
                    $this.removeClass('icon-down');
                }
            });
        }
    });



    $('.js-nav-icon').click(function(e){
        e.preventDefault();
        $('.js-overlay').show();
    });

    $('.js-overlay').on('touchstart click', function(e) {
        if ($(e.target).find(".js-nav-menu").length) {
            $('.js-overlay').hide();
        }
    });



    $('.js-icon-search').click(function(e){
        e.preventDefault();
        var $selector = $(".js-catalog-search");

        if($selector.position().top < 0){
            $selector.animate({
                top: 40
            }, 300, function(){
                $(this).css('position', 'fixed');
            });
        }
        else {
            $selector.animate({
                top: '-100px'
            }, 300,function(){
                $(this).css('position', 'absolute');
            });
        }
    });


    $('.js-login').magnificPopup({
        modal: false,
        closeOnBgClick: true,
        closeOnContentClick: false,
        closeBtnInside: true,
        showCloseBtn: true,
        enableEscapeKey: true,
        type: 'ajax',
        fixedContentPos: true,
        callbacks: {
            ajaxContentAdded: function() {
                log(this);
                $('input:first', this.content[0]).focus();
            }
        }
    });



});