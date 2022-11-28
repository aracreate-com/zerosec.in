!(function($) {
  "use strict";
  var browserWindow = $(window);

      // :: 2.0 Nav Active Code
      if ($.fn.classyNav) {
          $('#vizewNav').classyNav();
      }

      // :: 4.0 Sticky Active Code
      if ($.fn.sticky) {
          $("#sticker").sticky({
              topSpacing: 0
          });
      }

      // :: 5.0 Sliders Active Code
      if ($.fn.owlCarousel) {
          $('.twitter-slides').owlCarousel({
              items: 1,
              margin: 0,
              loop: true,
              dots: false,
              autoplay: true,
              autoplayTimeout: 4000,
              smartSpeed: 1000
          });

          $('.featured-post-slides').owlCarousel({
              items: 1,
              margin: 0,
              loop: true,
              nav: true,
              navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
              dots: false,
              autoplay: true,
              autoplayTimeout: 4000,
              smartSpeed: 1000
          });

          $('.sport-video-slides').owlCarousel({
              items: 1,
              margin: 0,
              loop: true,
              nav: true,
              navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
              dots: false,
              autoplay: true,
              autoplayTimeout: 4000,
              smartSpeed: 1000
          });

          $('.business-video-slides').owlCarousel({
              items: 1,
              margin: 0,
              loop: true,
              nav: true,
              navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
              dots: false,
              autoplay: true,
              autoplayTimeout: 4000,
              smartSpeed: 1000
          });
      }

      // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });
            // Back to top button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
        } else {
          $('.back-to-top').fadeOut('slow');
        }
      });

      $('.back-to-top').click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 1500, 'easeIn', function() {
          $(".nav-menu ul:first li:first").addClass('active');
        });

        return false;
      });

      // Porfolio isotope and filter
      $(window).on('load', function() {
        var portfolioIsotope = $('.portfolio-container').isotope({
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows'
        });

        $('#portfolio-flters li').on('click', function() {
          $("#portfolio-flters li").removeClass('filter-active');
          $(this).addClass('filter-active');

          portfolioIsotope.isotope({
            filter: $(this).data('filter')
          });
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(document).ready(function() {
          $('.venobox').venobox();
        });
      });

      // Testimonials carousel (uses the Owl Carousel library)
      $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          900: {
            items: 3
          }
        }
      });

      // Portfolio details carousel
      $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
      });

      // Initi AOS
      AOS.init({
        duration: 800
      });

      /* 5. Testimonial Active*/
        var testimonial = $('.h1-testimonial-active');
          if(testimonial.length){
          testimonial.slick({
              dots: false,
              infinite: true,
              speed: 1000,
              autoplay:false,
              arrows: true,
              prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
              nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
              slidesToShow: 1,
              slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrow:true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrow:false
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrow:false
                  }
                }
              ]
            });
          }

          /**
             * Testimonials slider
             */
            new Swiper('.testimonials-slider', {
              speed: 600,
              loop: true,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false
              },
              slidesPerView: 'auto',
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
              },
              breakpoints: {
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },

                1200: {
                  slidesPerView: 3,
                  spaceBetween: 20
                }
              }
            });

            /**
             * Clients Slider
             */
            new Swiper('.partner-slider', {
              speed: 400,
              loop: true,
              autoplay: {
                delay: 5000,
                disableOnInteraction: false
              },
              slidesPerView: 'auto',
              pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
              },
              breakpoints: {
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 20
                }
              }
            });


  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo', function() {
      $(".nav-menu ul:first li:first").addClass('active');
    });

    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Initi AOS
  AOS.init({
    duration: 800
  });

  /* 5. Testimonial Active*/
    var testimonial = $('.h1-testimonial-active');
      if(testimonial.length){
      testimonial.slick({
          dots: false,
          infinite: true,
          speed: 1000,
          autoplay:false,
          arrows: true,
          prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
          nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
          slidesToShow: 1,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrow:true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrow:false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrow:false
              }
            }
          ]
        });
      }

      /**
         * Testimonials slider
         */
        new Swiper('.testimonials-slider', {
          speed: 600,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },

            1200: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }
        });

        /**
         * Clients Slider
         */
        new Swiper('.partner-slider', {
          speed: 400,
          loop: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false
          },
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }
        });

})(jQuery);
