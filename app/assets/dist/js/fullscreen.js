

document.addEventListener('DOMContentLoaded', function() {
    var fullscreenImage = document.getElementById('fullscreen-image');
    fullscreenImage.style.backgroundImage = "url('/uploads/img/loja_logo/fullscreen.PNG')";
 
    // Opción para ocultar la imagen después de unos segundos
    setTimeout(function() {
        fullscreenImage.style.opacity = 0; // Cambia la opacidad a 0 para desaparecer suavemente
    }, 3000); // Mantener visible por 3 segundos antes de empezar a desaparecer
    
    // Elimina el elemento del DOM después de que la transición haya finalizado
    setTimeout(function() {
        fullscreenImage.style.display = 'none';
    }, 4500); // Espera la transición completa antes de eliminar el elemento
});
