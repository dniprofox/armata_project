$(function(){
    

  $(".accordion-items h3").click(function() {
    $(this).parent().find("div.accordion-text").slideToggle('slow');
    $(this).find('i.fa-chevron-down').toggleClass('active');
  }); 
  
  
$('.menu__btn').on("click", function(){
    $(this).toggleClass('open');
    $('.menu__list').slideToggle();
  });
  
  
  AOS.init({    
    disable: 'phone',
    offset: 100, // offset (in px) from the original trigger point
 });

  $('.users-slider__wrapper').slick({
    prevArrow: '<div class="prev"><i class="fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="next"><i class="fas fa-chevron-right"></i></div>',    
    
  });
  ///якорные ссылки///////////
    $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
      
  });

  /* Кнопка вверх */
  $(window).scroll(function () {
      
    if ($(this).scrollTop() != 0)
       $('#toTop').fadeIn("slow");
    else
       $('#toTop').fadeOut("slow");
  });
  $('#toTop').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
  });


  
});