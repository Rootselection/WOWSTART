var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
    relativeInput: true,
});

parallaxInstance.friction(0.3, 0.3);
parallaxInstance.scalar(10, 10);
parallaxInstance.origin(0, 0);
parallaxInstance.invert(true, true);


$('.registration__content-btn').on('click', function() {
    $('.registration__inner').toggleClass('registration__figure--active')
  });

  $('.steps__item').on('click', function() {
    $('.steps').toggleClass('steps--active')
  });

  var scrollBottom = $(window).scrollTop() + $(window).height();

  $(window).scroll(function(){
        if($(this).scrollTop() > 30) {
          $(".header__top-inner").css("height","80px");
          $(".header__top-wrapper").css("box-shadow","0 0 5px black");

  
         } else if (scrollBottom  > 30) {
          $(".header__top-inner").css("height","102px");
          $(".header__top-wrapper").css("box-shadow","0 0 0 black");
        }
      });
