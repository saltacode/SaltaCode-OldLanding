/**
 * Theme Mode Switch
 * Switch betwen light/dark mode. The chosen mode is saved to browser's local storage
*/

const themeModeSwitch = (() => {

  let modeSwitch = document.querySelector('[data-bs-toggle="mode"]');
  let img = document.getElementById('logo');

  if(modeSwitch === null) return;

  let checkbox = modeSwitch.querySelector('.form-check-input');

  if (mode === 'dark') {
    root.classList.add('dark-mode');
    checkbox.checked = true;
    img.src = 'assets/img/logo_nav_dark.png';
  } else {
    root.classList.remove('dark-mode');
    checkbox.checked = false;
    img.src = 'assets/img/logo_nav_light.png';
  }

  modeSwitch.addEventListener('click', (e) => {
    if (checkbox.checked) {
      root.classList.add('dark-mode');
      window.localStorage.setItem('mode', 'dark');
      img.src = 'assets/img/logo_nav_dark.png';
    } else {
      root.classList.remove('dark-mode');
      window.localStorage.setItem('mode', 'light');
      img.src = 'assets/img/logo_nav_light.png';
    }
  });

})();

export default themeModeSwitch;
