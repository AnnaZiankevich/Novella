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
      let $button = $(this).find('.services-block__slider-button--green');
                                                               
      $(".services-block__slider-item").not($(this)).removeClass("active");
      $button.not($button).removeClass("btn-active");
      $(this).toggleClass("active");
      $button.toggleClass("btn-active");
    });
  });
  function HideButton({ value }) {
    let button = document.getElementById('services-block__slider-button--green');
    button.hidden = value;
  };