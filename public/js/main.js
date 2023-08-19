AOS.init();

window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.selector', {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 'screenWidth/2', 'screenWidth'],
        ]
      }
    })
  }

var scroll = new SmoothScroll('a[href*="#"]');



(function () {
    var hamburgerMenu = document.querySelector('.hamburger-menu');
    var bars = document.querySelectorAll('.bar');
  
    hamburgerMenu.addEventListener('click', function() {
        bars.forEach(function(bar) {
            bar.classList.toggle('animate');
        });

        const sectionMenu = document.querySelector('.section-menu');
        const body = document.body;
    
        if (hamburgerMenu.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            sectionMenu.classList.add('inactive');
            body.classList.remove('body-overflow-hidden');

            setTimeout(function() {
                sectionMenu.classList.remove('active', 'inactive');
            }, 500); // Esperar a que termine la animación antes de ocultar definitivamente
        } else {
            hamburgerMenu.classList.add('active');
            sectionMenu.classList.add('active');
            body.classList.add('body-overflow-hidden');
        }
    });

    // Agregar manejadores de eventos para los elementos dentro de section-menu
    const sectionMenuItems = document.querySelectorAll('.section-menu ul li a');
    sectionMenuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            bars.forEach(function(bar) {
                bar.classList.remove('animate');
            });

            hamburgerMenu.classList.remove('active');
            const sectionMenu = document.querySelector('.section-menu');
            sectionMenu.classList.add('inactive');
            const body = document.body;
            body.classList.remove('body-overflow-hidden');

            setTimeout(function() {
                sectionMenu.classList.remove('active', 'inactive');
            }, 500); // Esperar a que termine la animación antes de ocultar definitivamente
        });
    });
})();


const controller = new ScrollMagic.Controller();
  const plane = document.getElementById('movingPlane');

  const screenWidth = window.innerWidth;
  const imageWidth = plane.offsetWidth; // Ancho de la imagen

  // Calcula la duración de la animación para evitar desbordamientos
  const animationDuration = (screenWidth + imageWidth) / 1000;

  const animation = gsap.timeline()
    .to(plane, { x: screenWidth - imageWidth, duration: animationDuration, ease: 'power1.out' });

  const scene = new ScrollMagic.Scene({
    triggerElement: plane,
    triggerHook: 'onEnter',
    duration: '100%', // Puede ajustarse según tus necesidades
  })
    .setTween(animation)
    .addTo(controller);
