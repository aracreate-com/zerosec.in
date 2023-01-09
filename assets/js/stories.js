

var cards = document.querySelectorAll(".card");
cards[0].classList.add("active");
function card() {
  
    for (var i = 0; i < cards.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = cards[i].getBoundingClientRect().top;
      var elementVisible = 150;
    
      if (elementTop < windowHeight - elementVisible) {
        if(i !== 0){
          cards[i].classList.add("active");
        }
      } else {
        cards[i].classList.remove("active");
      }
      
    }
  }
  
  
  window.addEventListener("scroll", card);
  

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
// Back to top button
