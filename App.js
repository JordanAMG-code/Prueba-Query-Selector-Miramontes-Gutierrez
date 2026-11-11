console.log("El titulo de esta pagina es: ", document.title);

//Guardar el contenido de la id
let TituloP = document.querySelector("#Titullo_Pricipal");

console.log(TituloP);

//Estrar y editar propiedades
console.log(TituloP.textContent);
TituloP.textContent = "Editar desde Javascrip";
TituloP.style.color = "peru";
TituloP.style.backgroundColor = "blue";
TituloP.style.sontSize = "1.5rem";

TituloP.textContent = TituloP.textContent + "Texto Nuevo";
TituloP.textContent += "Otro texto nuevo";

TituloP.innerHTML = "Hola";

let ParrafoP = document.querySelector("#Parrafo_Principal");

ParrafoP.innerHTML += "Nuevo texto <i>Pero ESTE texto esta en cursiva<i>";

let Caja1 = document.querySelector("#Caja");

Caja1.innerHTML += "<p>Producto muestra: $1200</p>";

/*
let Presupuesto = prompt("Introduce tu presupuesto: ");
if(Presupuesto>=1200){
    Caja1.classList.add(Aprobado);
}else{
    Caja1.classList.add(No_Aprobado);
}*/


const Bodega = [
    {Nombre: "Producto1", Precio: 100, Stock: 3},
    {Nombre: "Producto2", Precio: 100, Stock: 0},
    {Nombre: "Producto3", Precio: 100, Stock: 3},
    {Nombre: "Producto4", Precio: 100, Stock: 3},
    {Nombre: "Producto5", Precio: 100, Stock: 0}
]

let Caja = document.querySelector(".Caja_Vasia");

Bodega.forEach(item => {
    let claseColor = "";

    if(item.Stock>0){
        claseColor = "Aprobado";
    }else{
        claseColor = "No_aprobado";
    }

    Caja.innerHTML += `
    <div class="Caja_Producto ${claseColor}">
        <h2>${item.Nombre}</h2>
        <p>Precio: $${item.Precio}</p>
        <p>Cantidad: ${item.Stock}</p>
    </div>
    `;
})







