import {current_theme_actived} from './modules/theme.js';
import {initializeLoadingScreen} from './modules/load_screen.js'
import {active_menu_bar} from './modules/menu_hamburguesa.js'
import {initializeSwiper} from './modules/swipper_clientes.js';
import {CountAnimation} from './modules/count.js'
import {despliegue} from './modules/boton_desplegable.js';

initializeLoadingScreen();
current_theme_actived();
active_menu_bar();

  // Obtén una referencia al elemento SVG
const logoHero = document.getElementById("logo-hero")
const logoHeroLoad = document.getElementById("logo-hero-load");

// Agrega la clase "active" al elemento SVG después de un cierto retraso (en milisegundos)
function activateAnimations() {
  logoHero.classList.add('active');
}

function activateAnimationLoadScreen(){
  logoHeroLoad.classList.add('active');
}

// Retrasa la activación de las animaciones en milisegundos
const delay = 0; // 1 segundo

// Activa las animaciones después del retraso
setTimeout(activateAnimations, delay);
activateAnimationLoadScreen();

//Activa la animacion de conteo para la landing en la seccion clientes
const countAnimation = new CountAnimation();
countAnimation.init();

// Activa el despliegue de las descripciones
despliegue();