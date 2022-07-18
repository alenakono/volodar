
$(document).ready(function () {
    $(".header-bottom__item").on("click", function (event){
        $(this).find( ".header__sublist" ).toggleClass("_active");
    });
});
$(document).ready(function () {
    $(".menu__mob").on("click", function (event) {
        $(".menu__mob, .header-bottom, .header-mob_top").toggleClass("_active");
        $("body").toggleClass("_lock");
    });
});

$(document).ready(function () {
    $(".footer-dropdown__title").on("click", function (event){
        $(this.nextElementSibling).toggleClass("_active");
        $(this).find(".footer-dropdown__icon").toggleClass("_active");
    });
});
//слайдер
$(document).ready(function (){
    $(".top-slider").slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
    });
});

