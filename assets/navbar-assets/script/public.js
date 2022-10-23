"use strict";
/******************************************************************************/
/******************************************************************************/

jQuery(document).ready(function($) {
  /**************************************************************************/

  try {
    $.fn.qtip.zindex = 10;
  } catch (e) {}

  /**************************************************************************/

  $('.template-component-preformatted-text').templatePreformattedText();

  /**************************************************************************/

  $('.template-component-accordion').templateAccordion();

  /**************************************************************************/

  $('.template-component-audio').templateAudio({},
    [{
      'mp3': 'media/audio/kondor_love_your_life.mp3',
      'oga': 'media/audio/kondor_love_your_life.ogg',
      'artist': 'Kondor',
      'title': 'Love Your Life'
    }]
  );

  /**************************************************************************/

  var carouselOption = {
    auto: {
      play: false
    },
    scroll: {
      easing: 'easeInOutExpo',
      duration: 800
    }
  };

  $('.template-component-counter-box').templateCounterBox(carouselOption);

  /**************************************************************************/

  $('.template-component-counter-list').templateCounterList();

  /**************************************************************************/

  $('.template-component-image.template-fancybox>a').templateFancybox();

  /**************************************************************************/

  var carouselOption = {
    scroll: {
      easing: 'easeInOutExpo',
      duration: 800
    }
  };

  $('.template-component-feature').templateFeature(carouselOption);

  /**************************************************************************/

  $('.template-component-flex-slider.template-component-flex-slider-style-1').templateFlexSlider();

  $('.template-component-flex-slider.template-component-flex-slider-style-2').templateFlexSlider({
    animation: 'slide',
    controlNav: false,
    directionNav: true
  });

  /**************************************************************************/

  $('.template-component-google-map').templateGoogleMap();

  /**************************************************************************/

  $('.template-component-go-to-top').templateGoToTop();

  /**************************************************************************/

  $('.template-header').templateHeader();

  /**************************************************************************/

  $('.template-component-image').templateImage();

  /**************************************************************************/

  $('.template-component-nivo-slider.template-component-nivo-slider-style-1').templateNivoSlider();

  $('.template-component-nivo-slider.template-component-nivo-slider-style-2').templateNivoSlider({
    controlNavThumbs: false
  });

  $('.template-component-nivo-slider.template-component-nivo-slider-style-3').templateNivoSlider({
    controlNav: false,
    controlNavThumbs: false
  });

  /**************************************************************************/

  $('.template-component-notice.template-component-notice-style-1').templateNotice({
    time: 0
  });

  $('.template-component-notice.template-component-notice-style-2').templateNotice({
    time: 60
  });

  /**************************************************************************/

  $('.template-component-tab').templateTab();

  /**************************************************************************/

  var carouselOption = {
    scroll: {
      easing: 'easeInOutExpo',
      duration: 800
    }
  };

  $('.template-component-testimonial').templateTestimonial(carouselOption);

  /**************************************************************************/

  var carouselOption = {
    scroll: {
      easing: 'easeInOutExpo',
      duration: 800
    }
  };

  $('.template-component-twitter-user-timeline').templateTwitterUserTimeline(carouselOption);

  /**************************************************************************/

  $('.template-component-zaccordion').templateZAccordion();

  /**************************************************************************/

  // var content = $('.template-content');
  // var footer = $('.template-footer');
  //
  // $(window).windowDimensionListener({
  //   change: function(width, height) {
  //     var menuHeight = $('.template-header .template-header-top.template-header-top-sticky').actual('height');
  //
  //     var footerHeight = footer.actual('height');
  //     var windowHeight = $(window).actual('height') - menuHeight;
  //
  //     if (windowHeight > footerHeight) {
  //       footer.addClass('template-footer-sticky');
  //       content.css({
  //         'margin-bottom': footerHeight - 1
  //       });
  //     } else {
  //       footer.removeClass('template-footer-sticky');
  //       content.css({
  //         'margin-bottom': '0'
  //       });
  //     }
  //
  //     footer.css({
  //       'visibility': 'visible'
  //     });
  //   }
  // });

  /**************************************************************************/

  $('.template-form-line>label').inFieldLabels();

  /**************************************************************************/

  $('.template-widget-category-style-2 select,.template-widget-archive-style-2 select').on('change', function() {
    var selected = $(this).find('option:selected').val();
    if (selected === '#') return;
    window.location.href = selected;
  });

  /**************************************************************************/

  $('.template-component-class').responsiveElement({
    width: 300,
    children: null,
    className: 'template-component-class-responsive'
  });
  $('.template-component-call-to-action').responsiveElement({
    children: null,
    className: 'template-component-call-to-action-responsive'
  });
  $('.template-component-pricing-plan').responsiveElement({
    width: 300,
    children: null,
    className: 'template-state-responsive-300'
  });

  $('.template-layout-100').responsiveElement({
    className: 'template-responsive-column-a'
  });
  $('.template-layout-50x50').responsiveElement({
    className: 'template-responsive-column-a'
  });
  $('.template-layout-33x33x33').responsiveElement({
    width: 650,
    className: 'template-responsive-column-a'
  });
  $('.template-layout-25x25x25x25').responsiveElement({
    width: 650,
    className: 'template-responsive-column-a'
  });
  $('.template-layout-66x33').responsiveElement({
    className: 'template-responsive-column-a'
  });
  $('.template-layout-33x66').responsiveElement({
    className: 'template-responsive-column-a'
  });
  $('.template-layout-25x75').responsiveElement({
    className: 'template-responsive-column-a'
  });
  $('.template-layout-75x25').responsiveElement({
    className: 'template-responsive-column-a'
  });

  /**************************************************************************/
});

/******************************************************************************/
/******************************************************************************/
