const ver_mas = document.querySelectorAll(".quienes-somos-card-body-ver-mas");

const ver_menos = document.querySelectorAll(".quienes-somos-card-body-ver-menos");

const contenidos = document.querySelectorAll(".quienes-somos-card-body-descripcion");

const cards = document.querySelectorAll(".quienes-somos-card");

export function despliegue(){
    ver_mas.forEach((btn, index)=>{ 
        let contenido = contenidos[index];
        let menos = ver_menos[index];
        btn.addEventListener("click", ()=>{
            mostrar(btn, menos, contenido);
        })
        menos.addEventListener("click", ()=>{
            ocultar(btn, menos, contenido);
        })
    })

    cards.forEach((card, index)=>{
        card.addEventListener("mouseleave", ()=>{
            let btn = ver_mas[index];
            let menos = ver_menos[index];
            let contenido = contenidos[index];
            ocultar(btn, menos, contenido);
        })
    })
}

function mostrar(btn, menos, contenido){
    btn.style.display = "none";
    contenido.style.display = "block";
    menos.style.display = "block";
}

function ocultar(btn, menos, contenido){
    menos.style.display = "none";
    contenido.style.display = "none";
    btn.style.display = "block";
}