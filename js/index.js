$('.main__top-burger').on('click', function(e){
  e.preventDefault();
  $('.main__top-burger').toggleClass('burger__btn-elem-active');
  $('.main__mobile-nav').toggleClass('main__mobile-nav_active');
});

$('.main__info-btn, .callback-btn').on('click', function(e){
  e.preventDefault();
  $('#modal, .overlay').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('#modal, .overlay').fadeOut('slow');
});


  
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
        },
        {
          breakpoint: 320,
          settings: {
            dots: true,
            arrows: false
          }
        },
    ]
});
});



