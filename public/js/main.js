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

