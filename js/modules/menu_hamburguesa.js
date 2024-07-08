const menu = document.querySelector(".menu");
const menu_open = document.querySelector(".menu-open");

export const active_menu_bar = ()=>{
    // Asegúrate de que los elementos se seleccionaron correctamente
    if (menu && menu_open) {
        menu_open.addEventListener('change', function () {
            if (this.checked) {
                // El menú está abierto, cambia la posición del menú
                menu.style.bottom = "4.5rem";
                menu.style.right = "2.5rem";
            } else {
                // El menú está cerrado, restablece la posición del menú
                menu.style.bottom = "2.5rem";
                menu.style.right = "0.8rem";
            }
        });
    }
}

