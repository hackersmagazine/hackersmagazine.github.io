let bannerHeight = document.documentElement.clientHeight * 0.7;

//$('.banner img').css('height', bannerHeight + 'px');

var countOffset = 0;
var countSlider = $('.slider .items .item').length;
var widthSlider = $('.slider .items').eq(0).innerWidth();
console.log(widthSlider);

$('.slider .items').css('width', countSlider * 100 + '%');

$('.sliderNext').click(function() {
    countOffset++;
    $('.slider .items').css('transform', 'translate(-' + countOffset * widthSlider + 'px)');
})

$('.sliderPrev').click(function() {
    countOffset--;
    $('.slider .items').css('transform', 'translate(-' + countOffset * widthSlider + 'px)');
})