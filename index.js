let operacion;
    document.querySelector('#suma').addEventListener('click', () =>{
        operacion = '+';
    });
    document.querySelector('#resta').addEventListener('click', () =>{
        operacion = '-';
    });
    document.querySelector('#multiplicacion').addEventListener('click', () =>{
        operacion = '*';
    });
    document.querySelector('#division').addEventListener('click', () =>{
        operacion = '/';
    });
    document.querySelector('#borrar').addEventListener('click', () =>{
        n.textContent = "";
        numero1 = "";
        numero2 = "";
    });
   

    document.querySelector('#calcular').addEventListener('click', () =>{
        const numero1 = parseInt(document.querySelector('#numero1').value);
        const numero2 = parseInt(document.querySelector('#numero2').value);
        let n;
        if(operacion == '+'){
            n = numero1 + numero2;
        }else if( operacion == '-'){
            n = numero1 - numero2;
        }else if(operacion == '*'){
            n = numero1 * numero2;
        }else if(operacion == '/'){
            n = numero1 / numero2;
        }
        document.querySelector('#n').innerHTML = n;
        
    });