const nombreProducto = prompt("¿Cuál es el nombre del producto?");
const precioUnitario = 40;
const cantidadDeseada = prompt(`El precio del ${nombreProducto} es de $${precioUnitario}, Que cantidad desea comprar del producto?`);
let costoTotal = cantidadDeseada*precioUnitario;
alert(`el costo total es de ${costoTotal}`)