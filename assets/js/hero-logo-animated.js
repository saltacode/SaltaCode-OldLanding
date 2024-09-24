  // Obtén una referencia al elemento SVG
  const logoHero = document.getElementById("logo-hero")
  
  // Agrega la clase "active" al elemento SVG después de un cierto retraso (en milisegundos)
  function activateAnimations() {
    logoHero.classList.add('active');
  }
  
  // Retrasa la activación de las animaciones en milisegundos
  const delay = 0; // 1 segundo
  
  // Activa las animaciones después del retraso
  setTimeout(activateAnimations, delay);
