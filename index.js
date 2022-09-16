const formulario = document.querySelector('#añadirGasto');
const listadoGastos = document.querySelector('#gastos ul');

//EVENTOS

acciones();

function acciones(){
    document.addEventListener('DOMContentLoaded', presupuestoEstimado);
    formulario.addEventListener('submit', añadirGasto);
}

//CALCULOS
//CALCULO PRINCIPAL
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

// AÑADIR NUEVO GASTO
newGasto(gasto){
    this.gastos = [...this.gastos, gasto];
    this.valorRestante();
}
// CALCULAR RESTANTE, LUEGO DE UN NUEVO GASTO
valorRestante(){
    const dineroGastado = this.gastos.reduce((total,gasto) => total + gasto.precio, 0);
    this.restante = this.presupuesto - dineroGastado;
}
sacarGasto(id){
    this.gastos = this.gastos.filter(gasto => gasto.id !== id);
    this.valorRestante();
}
} 
 let presupuesto;
//
class Idx {
    agregarPresupuesto(precio){
        const {presupuesto, restante} = precio;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    mostrarGasto(mensaje, tipo){
        const divMsj = document.createElement('div');
        divMsj.classList.add('text-center', 'alert');
        if(tipo === 'error'){
            divMsj.classList.add('alert-danger');
        }else{
            divMsj.classList.add('alert-success');

        }
        divMsj.textContent = mensaje;
        document.querySelector('.primario').insertBefore(divMsj, formulario);
//BORRAR EL MENSAJE
        setTimeout(() => {
            divMsj.remove();
        }, 2000);
    }


    agregarGasto(gastos){
        
        this.listHtml();
        gastos.forEach( gasto => {
            const {precio, nombre, id} = gasto;

            //crear lista
            const newGasto = document.createElement('li');
            newGasto.className = 'list-group'
            newGasto.dataset.id = id;
            newGasto.innerHTML = `${nombre} - $${precio}` ;

            //BORRAR UN GASTO
            const borrarGasto = document.createElement('button');
            borrarGasto.classList.add('btn','btn-danger','borrar-gasto');
            borrarGasto.textContent = 'Borrar';
            newGasto.appendChild(borrarGasto);
            borrarGasto.onclick = ()=>{
                sacarGasto(id);
            }

            listadoGastos.appendChild(newGasto);
            
        });
    }
    
   
    listHtml(){
        while(listadoGastos.firstChild){
            listadoGastos.removeChild(listadoGastos.firstChild);
        }
    }

    newRestante(restante){
        document.querySelector('#restante').textContent = restante;

    }}
   
    const idx = new Idx();
    //CONSULTA PARA DATOS
    function presupuestoEstimado (){
        const valorUsuario = prompt('INGRESE SU PRESUPUESTO MENSUAL');
        if(valorUsuario === '' || valorUsuario === null || isNaN(valorUsuario) || valorUsuario <= 0){
            window.location.reload();
        }
        presupuesto = new Presupuesto(valorUsuario);
        idx.agregarPresupuesto(presupuesto);
    }
    function añadirGasto(e){
        e.preventDefault();

        const nombre = document.querySelector('#gasto').value;
        const precio = Number (document.querySelector('#precio').value);
        
//AGREGAR PARA VALIDAR LOS DATOS DEL FORMULARIO
        const gasto = {nombre, precio, id: Date.now()}
        presupuesto.newGasto(gasto);
        idx.mostrarGasto('Gasto agregado');

        const {gastos, restante} = presupuesto;
        idx.agregarGasto(gastos);
        idx.newRestante(restante);
        formulario.reset();
        
        let gastosArr = [];

function guardarDatos(datosIngresados){
    gastosArr.push(datosIngresados);
    localStorage.setItem("listaGuardar", JSON.stringify(gastosArr));
}
guardarDatos(gasto);

    //CREAR UNO PARA ELIMINAR UN GASTO
function sacarGasto(id){
    // elimina gastos del obj
    presupuesto.sacarGasto(id);

    const {gastos, restante} = presupuesto;
    // elimina gastos en html
    idx.agregarGasto(gastos);

    // actualizar restante
    idx.newRestante(restante);

}

//STORAGE
function getListadoGastos(){
    let listadoGastosLocal = JSON.parse(localStorage.getItem('listaGuardar'));
    if (listadoGastosLocal == null){
            return "No hay datos"
    }else{
        return listadoGastosLocal;
    }
}
console.log(getListadoGastos())
    }

