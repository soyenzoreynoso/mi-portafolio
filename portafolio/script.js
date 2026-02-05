document.addEventListener('DOMContentLoaded', () => {
    
    // Efecto de Navbar pegajosa con cambio de fondo
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.9)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.padding = '1rem 5%';
            navbar.style.position = 'fixed';
            navbar.style.top = '0';
            navbar.style.width = '100%';
            navbar.style.zIndex = '1000';
            navbar.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.padding = '2rem 5%';
            navbar.style.position = 'relative';
        }
    });

    // Suavizar el scroll para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Interacción simple en botones de proyectos
    const projectButtons = document.querySelectorAll('.btn-project');
    projectButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('¡Serás redirigido al proyecto!');
        });
    });
});

// Animación de entrada para la barra social
const sidebar = document.querySelector('.social-sidebar');
if(sidebar) {
    sidebar.style.opacity = '0';
    setTimeout(() => {
        sidebar.style.transition = 'opacity 1s ease';
        sidebar.style.opacity = '1';
    }, 1000);
}