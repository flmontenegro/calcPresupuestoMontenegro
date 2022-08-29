/* let numero1 = parseInt(prompt("INGRESE EL PRIMER NUMERO DE LA OPERACION"));
let operacion = prompt("INGRESE EL OPERADOR (+) (-) (*) (/)");
let numero2 = parseInt(prompt("INGRESE EL SEGUNDO NUMERO DE LA OPERACION"));

   switch (operacion) {
        case "+" :
            resultado = numero1 + numero2;
            break;
        case "-":
            if (numero1 > numero2) {
                resultado = numero1 - numero2;
            }else {
                resultado = numero2 - numero1;
            }
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero1 > numero2) {
                resultado = numero1 / numero2;
            }else {
                resultado = numero2 / numero1;
            }
        break;
    }

alert(resultado); */

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Almaceno objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "110"));
productos.push(new Producto("pan", "100"));
productos.push(new Producto("leche", "180"));
productos.push(new Producto("azucar", "120"));
productos.push(new Producto("yerba", "300"));

for (const producto of productos) {
    console.log('ANTES - '+producto.nombre +': $'+  producto.precio);
}
//Modifico el valor
for (const producto of productos){

    producto.sumaIva();
    console.log('DESPUES - '+producto.nombre +': $'+  producto.precio);
}
