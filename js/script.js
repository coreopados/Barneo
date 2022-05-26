$(document).ready(function () {

    AOS.init();

    const swiper = new Swiper('.swiper-sections', {
        // Optional parameters
        loop: true,
      
        pagination: {
          el: '.swiper-pagination',
          clickable:true
        },
        navigation: {
            nextEl: '.next-section',
            prevEl: '.prev-section',
          },
      });


    const swiper2 = new Swiper('.guest-slider', {
        // Optional parameters
        slidesPerView:3,
        spaceBetween: 80,
        loop: true,
        navigation: {
          nextEl: '.next-guests',
          prevEl: '.prev-guests',
        },
        breakpoints:{
            960:{
                slidesPerView: 3,
                spaceBetween: 80,
            },
            768:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            400:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            320:{
                slidesPerView: 1,    
                spaceBetween: 20,
            }
        }
      

      });

$('.block-slider-wrap .img-slider').each(function(i, elem){
    const swiper3 = new Swiper(this, {
        slidesPerView:1,
        navigation: {
            nextEl: '.swiper-button-next-'+i+'',
            prevEl: '.swiper-button-prev-'+i+'',
          },
          pagination: {
            el: '.swiper-pagination-'+i+'',
            clickable:true
          },
    })
   
})


    $('.text-wrap__info').each(function(i, elem){
    if($(elem).height()>170){
        $(this).addClass('hidden')
        $('<button class="show-more-guest">more...</button>').insertAfter($(this))
    }
    })


   
        $('.show-more-guest').click(function(e){
            e.preventDefault();
            $(this).prev().removeClass('hidden');
            $(this).hide();
        })



    if($('select').length>0){
        $('select').select2({
            minimumResultsForSearch: Infinity
        });
    }


    $('.menu-mobile-button').click(function(){
        $('nav').addClass('active')
    })
    $('.close-menu').click(function(){
        $('nav').removeClass('active')
    })
});