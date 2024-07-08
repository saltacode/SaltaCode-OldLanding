import { applyThemeAllButtons, applyThemeAllLinks } from "./theme.js";

// Hoja de estilo root
const rootStyles = window.getComputedStyle(document.documentElement);

// Guardar el tema en el localStorage
export const saveTheme = (theme) => localStorage.setItem("theme", theme);

// Guardar el estado del checkbox en el localStorage
export const saveSwitchState = (isChecked) =>
  localStorage.setItem("switch_checked", isChecked);

// Guardar el background de la label del switch en el localStorage
export const saveLabelBackground = (isChecked) =>
  localStorage.setItem("label_background", isChecked);

// Cambiar el tema de la página
const changeTheme = (isChecked) => {
  if (isChecked) {
    document.body.classList.replace("light-theme", "dark-theme");
    saveTheme("dark");
    changeLabelBackground(true);
    changeURLimage("dark");
    applyThemeAllButtons("dark");
    applyThemeAllLinks("dark");
    applyThemeLogoText(true);
  } else {
    document.body.classList.replace("dark-theme", "light-theme");
    saveTheme("light");
    changeLabelBackground(false);
    changeURLimage("light");
    applyThemeAllButtons("light");
    applyThemeAllLinks("light");
    applyThemeLogoText(false);
  }
};

// Cambiar el background de la label del switch
export const changeLabelBackground = (isChecked) => {
  if (isChecked) {
    switch_label.style.background =
      rootStyles.getPropertyValue("--dark-primary");
    saveLabelBackground(true);
  } else {
    switch_label.style.background =
      rootStyles.getPropertyValue("--light-primary");
    saveLabelBackground(false);
  }
};

// Cambia el fill y stroke del texto del logo de la seccion hero
export const applyThemeLogoText = (isChecked) => {
  const logoHero = document.getElementById("logo-hero");
  const paths = logoHero.querySelectorAll("path");
  let fillColor;
  let strokeColor;
  let logoStyleSheet;

  if (isChecked) {
    fillColor = rootStyles.getPropertyValue("--dark-text");
    strokeColor = rootStyles.getPropertyValue("--dark-text");
  } else {
    fillColor = rootStyles.getPropertyValue("--light-text");
    strokeColor = rootStyles.getPropertyValue("--light-text");
  }

  //Encontrar mi hoja de estilos logo-prueba.animated.css
  for (let i = 0; i < document.styleSheets.length; i++) {
    let styleSheet = document.styleSheets[i];

    if (
      styleSheet.href &&
      styleSheet.href.includes("logo-prueba-animated.css")
    ) {
      logoStyleSheet = styleSheet;
      break;
    }
  }

  //Como el texto arranca desde svg-elem-12
  for (let pos = 11; pos < paths.length; pos++) {
    paths[pos].style.stroke = strokeColor;
    paths[pos].style.fill = fillColor;
  }
};

export const switch_checkbox = document.getElementById("dark-light-checkbox");
const switch_label = document.querySelector(".dark-light-label");

// Evento para cambiar el tema de la página web de claro a oscuro y viceversa 'light-theme' o 'dark-theme'
switch_checkbox.addEventListener("change", () => {
  changeTheme(switch_checkbox.checked);
  saveSwitchState(switch_checkbox.checked);
});

export function changeURLimage(theme) {
  const imagen_footer = document.getElementById("footer-logo-saltacode");
  const imagen_nav = document.getElementById("logo_nav");

  imagen_footer.src = `/assets/images/icons/hero_logo_contacto_${theme}.png`;
  imagen_nav.src = `/assets/images/logos/logo_nav_${theme}.png`;

}
