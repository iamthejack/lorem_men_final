// Isotope
$(document).ready(function(){
    // init Isotope
    var $grid = $('.grid').isotope({
      // options
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
      // Ows Carousel
      // $('.testimonial-carousel').owlCarousel({
      //   items: 2,
      //   nav: false,
      //   dots: true,
      //   margin: 30,
      //   responsive {
      //     0:{
      //       items: 1,
      //     },
      //     767:{
      //       items: 2
      //     }
      //   }
      // })
      $(document).ready(function(){
        $(".owl-carousel").owlCarousel()
      });
  });