document.addEventListener('DOMContentLoaded', () => {

    // 1. Menú móvil (Toggle)
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav_list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');

            // Accesibilidad opcional
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !expanded);
        });

        // Cerrar menú al hacer clic en un enlace (para móviles)
        document.querySelectorAll('.nav_list a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }

    // 2. Año automático en el footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Evita errores con href="#"
            if (!targetId || targetId === '#') return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
