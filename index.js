let numero1 = parseInt(prompt("INGRESE EL PRIMER NUMERO DE LA OPERACION"));
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

alert(resultado);
