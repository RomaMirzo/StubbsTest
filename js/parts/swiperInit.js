function swiperInit() {// Initialize Swiper

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        width: 14,
        height: 14
    },
});}
module.exports = swiperInit;