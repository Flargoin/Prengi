$(document).ready(function(){
  $('.slider__inner').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/right.png"></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                dots: true,
                arrows: false
            }
        }
    ]
});
  });

