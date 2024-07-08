import { initializeSwiper } from "./swipper_clientes.js";
/**
 * Clase LoadingScreen
 * Representa una pantalla de carga que puede ocultarse después de un cierto retraso.
 */
export class LoadingScreen {
  /**
   * Crea una nueva LoadingScreen.
   * @param {string} elementId - El ID del elemento HTML que representa la pantalla de carga.
   * @param {number} delay - El tiempo en milisegundos que la pantalla de carga debe mostrarse antes de ocultarse.
   */
  constructor(elementId, delay = 0) {
    this.loadingScreen = document.getElementById(elementId);
    this.delay = delay;
  }

  /**
   * Oculta la pantalla de carga después de un retraso.
   * @return {Promise} Una promesa que se resuelve cuando la pantalla de carga se ha ocultado.
   */
  hide() {
    return new Promise((resolve, reject) => {
      if (this.loadingScreen === null) {
        reject(new Error(`No se encontró ningún elemento con el ID ${elementId}`));
        return;
      }
      
      setTimeout(() => {
        this.loadingScreen.style.display = "none";
        resolve();
      }, this.delay);
    });
  }
}

/**
 * Inicializa la pantalla de carga cuando la página se carga.
 */
export const initializeLoadingScreen = () => {
  window.addEventListener("load", function () {
    const loadingScreen = new LoadingScreen("loadingScreen");
    loadingScreen.hide().then(() => {
      // Haz algo después de que la pantalla de carga se haya ocultado
      document.documentElement.style.overflow = "auto";
      initializeSwiper();
    }).catch((error) => {
      // Haz algo con el error, como mostrar un mensaje al usuario o registrar el error en la consola
      console.error(error);
    });
  });
}

