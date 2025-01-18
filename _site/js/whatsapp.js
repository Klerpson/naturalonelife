document.addEventListener("DOMContentLoaded", function() {
    // Detectar si el usuario está en móvil o escritorio
    var isMobile = /iPhone|Android|iPad|iPod|Windows Phone|webOS|BlackBerry|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
    
    // Obtener la URL actual de la página
    var currentURL = window.location.href;

    // Obtener todos los enlaces de WhatsApp en la página
    var whatsappLinks = document.querySelectorAll("a#lead_whatsapp");

    // Recorrer los enlaces y cambiar el href según el dispositivo
    whatsappLinks.forEach(function(link) {
        // Mensaje con la URL actual
        var message = "Hola! Me gustaría recibir más asesoría sobre esta información: " + encodeURIComponent(currentURL);

        // Enlaces de WhatsApp para móvil y escritorio con el mensaje dinámico
        var mobileLink = "https://wa.me/573123278881?text=" + message;
        var desktopLink = "https://web.whatsapp.com/send?phone=573123278881&text=" + message;
        
        // Asignar el enlace adecuado según el dispositivo
        if (isMobile) {
            link.setAttribute("href", mobileLink);
        } else {
            link.setAttribute("href", desktopLink);
        }
    });
});


// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Crear el botón
    const scrollUpButton = document.createElement('a');
    scrollUpButton.href = '#';
    scrollUpButton.className = 'boton-up';
    scrollUpButton.setAttribute('aria-label', 'Volver arriba');
    scrollUpButton.style.display = 'none'; // Inicialmente oculto

    // Crear el ícono SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'white');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');

    // Añadir el path del ícono de flecha
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M18 15l-6-6-6 6');
    svg.appendChild(path);
    scrollUpButton.appendChild(svg);

    // Añadir el botón al body
    document.body.appendChild(scrollUpButton);

    // Función para controlar la visibilidad del botón
    function toggleScrollUpButton() {
        if (window.pageYOffset > 300) {
            scrollUpButton.style.display = 'flex';
        } else {
            scrollUpButton.style.display = 'none';
        }
    }

    // Event listener para el scroll
    window.addEventListener('scroll', toggleScrollUpButton);

    // Event listener para el click en el botón
    scrollUpButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
