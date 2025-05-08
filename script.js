
    function toggleMenu() {
      const nav = document.getElementById('nav-menu');
      nav.classList.toggle('show');
    }

    document.addEventListener('DOMContentLoaded', function () {
      const slides = document.querySelectorAll('.slide');
      const dirRight = document.getElementById('dir-control-right');
      const dirLeft = document.getElementById('dir-control-left');
      let current = 0;
      let autoSlideInterval;
  
      function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('slide-is-active'));
        slides[index].classList.add('slide-is-active');
      }
  
      function nextSlide() {
        current = (current + 1) % slides.length;
        showSlide(current);
      }
  
      function prevSlide() {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
      }
  
      function startAutoSlideLeft() {
        autoSlideInterval = setInterval(prevSlide, 5000); // Slide left every 5 seconds
      }
  
      function stopAutoSlide() {
        clearInterval(autoSlideInterval);
      }
  
      dirRight.addEventListener('click', function () {
        stopAutoSlide();
        nextSlide();
        startAutoSlideLeft();
      });
  
      dirLeft.addEventListener('click', function () {
        stopAutoSlide();
        prevSlide();
        startAutoSlideLeft();
      });
  
      showSlide(current);
      startAutoSlideLeft();
    });
  