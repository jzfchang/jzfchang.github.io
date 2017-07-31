$(document).ready(function(){

  //----------------------------------------------------------

  $('.content').mouseover(function(event){
    event.stopPropagation();
    $(this).children("img").addClass("img-hover");
    $(this).children(".description").addClass("description-hover");
  });

  $('.content').mouseout(function(event){
    event.stopPropagation();
    $(this).children("img").removeClass("img-hover");
    $(this).children(".description").removeClass("description-hover");

  });

  $('.content').click(function(event) {
    event.stopImmediatePropagation();
    var id = parseInt($(this).attr('content-id'));
    $('.wmuSlider').removeClass('hide-slider');

    $('.wmuSlider').wmuSlider({
      animation: 'fade',
      animationDuration: 600,
      slideshow: false,
      slideshowSpeed: 7000,
      slideToStart: id,
      navigationControl: true,
      paginationControl: false,
      previousText: '<',
      nextText: '>',
      touch: true,
      slide: 'article',
      items: 1
    });

  });

  $(document).mouseup(function(event) {
    var container = $('.wmuSlider');

    if (!container.is(event.target) && container.has(event.target).length === 0) {
      if(! $('.wmuSlider').hasClass('hide-slider')) {
        $('.wmuSlider').addClass('hide-slider');
      }
    }

  });

});
