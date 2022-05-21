/*
Ejercicio – Descuento Octubre

•Una tienda al cumplir años en Octubre ofrece
un descuento del 15% a sus clientes en todas
sus compras
•Desarrolle un algoritmo que dada una compra:
precio unitario, cantidad y el mes, indicados
por el usuario, determine si el cliente tiene
descuento o no*/

let precioUnitario = Number(prompt("Ingrese el precio unitario"));
let cantidad = Number(prompt("Ingrese la cantidad de articulos"));
let mes = Number(prompt("Ingrese el mes"));
let descuento = 0;

if (mes === 10) {
  descuento = precioUnitario * cantidad * 0.15;
  console.log("El descuento es: " + descuento);
} else {
  console.log("No tiene descuento");
}
