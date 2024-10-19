/*
Escribe una expresión ternaria que compare dos números (a y b). Si a es mayor que b, devuelve "a es mayor que b", de lo contrario, devuelve "b es mayor o igual que a".
*/

let a = 4;
let b = 6;

let comparacion = a > b ? "A es mayor" : "A es menor";

console.log(comparacion);

/*
Usa una expresión ternaria para determinar si un número n es par o impar. Si es par, debe devolver "par", y si es impar, debe devolver "impar".
*/

let num = 10;

let guess = num % 2 === 0 ? "Es par" : "Es impar";

console.log(guess);

/*

Escribe una expresión ternaria que seleccione un color de fondo en función de una variable esOscuro. Si esOscuro es true, el color de fondo debe ser "negro". Si es false, el color de fondo debe ser "blanco".

*/

let esOscuro = false;

let color = esOscuro ? "Negro" : "blanco";

console.log(color);

let esUsuarioPremium = true;

let acceso = esUsuarioPremium ? "Acceso permitido" : "Acceso denegado";

console.log(esUsuarioPremium);

let precio = 100;
let esDescuento = true;

let saber = esDescuento ? precio * 0.8 : precio;
console.log(saber);

let esAdmin = false;
let esModerador = true;
let esMiembro = false;

let rol = esAdmin
  ? "Acceso completo"
  : esModerador
  ? "Acceso limitado"
  : esMiembro
  ? "Acceso básico"
  : "Acceso denegado";

let nombre = "Nicolas";
let email = "nico.carrillo30@icloud.com";
let contraseña = "";

let formulario =
  nombre && email && contraseña
    ? "Formulario completo"
    : "formulario incompleto";

console.log(formulario);

let esMiembroVIP = false;
let tieneCupon = true;

let totalCompra = esMiembroVIP
  ? "tienes un 20% de descuento"
  : tieneCupon && !esMiembroVIP
  ? "tienes un 10% de descuento"
  : "No hay descuento";

console.log(totalCompra);

/*
Tienes una variable calificacion que representa la nota de un examen. Usa una expresión ternaria para determinar la calificación final:

	•	Si calificacion es mayor o igual a 90, devuelve "A".
	•	Si calificacion está entre 80 y 89, devuelve "B".
	•	Si calificacion está entre 70 y 79, devuelve "C".
	•	Si calificacion está entre 60 y 69, devuelve "D".
	•	Si calificacion es menor a 60, devuelve "F".
*/

let nota = 70;

let calificacion =
  nota >= 90
    ? "A"
    : nota >= 80 && nota <= 89
    ? "B"
    : nota >= 70 && nota <= 79
    ? "C"
    : nota >= 60 && nota <= 69
    ? "D"
    : "F";

console.log(calificacion);

const productos = [
  { nombre: "Camiseta", precio: 25, categoria: "Ropa" },
  { nombre: "Pantalón", precio: 50, categoria: "Ropa" },
  { nombre: "Zapatos", precio: 60, categoria: "Calzado" },
  { nombre: "Sombrero", precio: 20, categoria: "Accesorios" },
];

const productoSeleccionado = ["Calzado"];

let filtroProducto = productos.filter((producto) => {
  return productoSeleccionado.includes(producto.categoria);
});

console.log(filtroProducto);

console.log(filtroProducto);

const filtroPrecio = (productos, precioMin, precioMax) => {
  return productos.filter((producto) => {
    return producto.precio >= precioMin && producto.precio <= precioMax;
  });
};

console.log(filtroPrecio(productos, 60, 60));

const saludar = (a = 4) => {
  return a + a;
};

console.log(saludar());

let numeros = [1, 2, 3, 4];
let nombres = [1, 2, 3, 4];

console.log(numeros === nombres);

let idk = numeros.map((numero) => {
  return numero * numero;
});

console.log(idk);

console.log(numeros[1]);

let nombresss = null;

console.log(nombresss);
