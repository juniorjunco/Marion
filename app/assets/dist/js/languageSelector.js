function changeLanguage(lang) {
    // Selecciona las imágenes de los iconos de idioma
    var espaIcon = document.getElementById('espaIcon');
    var inglesIcon = document.getElementById('inglesIcon');

    // Verifica el idioma seleccionado y cambia las imágenes correspondientes
    if (lang === 'en') {
      espaIcon.style.display = 'none';
      inglesIcon.style.display = 'inline';
    } else if (lang === 'es') {
      inglesIcon.style.display = 'none';
      espaIcon.style.display = 'inline';
    }
  }