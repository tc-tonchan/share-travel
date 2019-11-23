$(document).on('turbolinks:load', function(){
  $(function(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      // nav:true,
      items:1,
      autoplay: true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      smartSpeed:1000,
      // navText: [
      //   '<i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>',
      //   '<i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i>'
      // ]
    });
    $('.owl-carousel .owl-dot').hover(function() {
      $(this).click();
    }, function() {});
  });
});