$('.hamburger').click(function() {
    $(this).toggleClass('is-active')

    if ($(this).hasClass('is-active')) {
        $('.menuBlock').addClass('menuBlockVisible')
    } else {
        $('.menuBlock').removeClass('menuBlockVisible')
    }
})

const homepageSlider = new Swiper('.homepageSlider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000
    },
    spaceBetween: 0,
    centeredSlides: true,
});

$.each($('.faqItem'), function() {
    var hiddenHeight = $(this).find('.faqItemVisible').height();
    var visibleHeight = $(this).find('.faqItemAnswer').height();

    $(this).height(40);
})

$('.faqItem').click(function() {
    var H = $(this).height();
    var hVisible = $(this).find('.faqItemAnswer').height() + 10;

    if ($(this).hasClass('faqOpen')) {
        $(this).height(40);
        $(this).removeClass('faqOpen')

    } else {
        $(this).height(H + hVisible);
        $(this).addClass('faqOpen')
    }
})