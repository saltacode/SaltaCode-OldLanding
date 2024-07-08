import {
  switch_checkbox,
  saveTheme,
  saveSwitchState,
  changeLabelBackground,
  applyThemeLogoText,
  changeURLimage,
} from "./switch.js";

const body = document.body;
const buttons = document.querySelectorAll(".btn");

export const applyThemeAllButtons = (theme) => {
  buttons.forEach((button) => {
    if (
      button.classList.contains("btn-light") ||
      button.classList.contains("btn-dark")
    ) {
      button.classList.replace(
        `btn-${theme === "light" ? "dark" : "light"}`,
        `btn-${theme}`
      );
    } else if (button.classList.contains("btn")) {
      button.classList.add(`btn-${theme}`);
    }
  });
};

export const applyThemeAllLinks = (theme) => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    if (link.classList.contains("link-light")) {
      link.classList.replace("link-light", `link-${theme}`);
    } else if (link.classList.contains("link-dark")) {
      link.classList.replace("link-dark", `link-${theme}`);
    } else if (link.classList.contains("link")) {
      link.classList.add(`link-${theme}`);
    }
  });
};



// Establecer el tema inicial de la página
const setInitialTheme = (theme) => {
  body.classList.add(`${theme}-theme`);
  applyThemeAllButtons(theme);
  applyThemeAllLinks(theme);
  changeURLimage(theme);
  saveTheme(theme);
  saveSwitchState(false);
  applyThemeLogoText(false)
};

// Obtener el tema actual del localStorage
const current_theme = localStorage.getItem("theme");


/*
 * Función current_theme_actived:
 *
 * Esta función verifica si hay un tema actualmente activado en la aplicación.
 * Si no hay ningún tema activado, la función establece el tema predeterminado a 'light'.
 *
 * El objetivo de esta función es asegurarse de que la aplicación siempre tenga un tema activado,
 * mejorando así la coherencia de la interfaz de usuario.
 */
export const current_theme_actived = () => {
  if (current_theme) {
    document.body.classList.add(`${current_theme}-theme`);
    switch_checkbox.checked = localStorage.getItem("switch_checked") === "true";
    changeLabelBackground(switch_checkbox.checked);
    changeURLimage(current_theme);
    applyThemeAllLinks(current_theme);
    applyThemeLogoText(switch_checkbox.checked);
    applyThemeAllButtons(current_theme);
  } else {
    setInitialTheme("light");
  }
};