$(".services-block__slider-body").owlCarousel({
    autoWidth: true,
    loop: true,
    nav: true,
    margin: 15,
    responsive:{
        0:{
          items:1
        },
        768:{
          items:2
        },
        1180:{
          items:3
        }
      }
  });
  $(document).ready(function () {
    $(".services-block__slider-item").click(function () {
      $(".services-block__slider-item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });