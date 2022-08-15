let dia = prompt("INGRESE UN DIA DE LA SEMANA (lunes, martes, miercoles, jueves, viernes, sabado, domingo)");
if ((dia == "lunes") || (dia == "martes") || (dia == "miercoles") || (dia == "jueves") || (dia == "viernes") || (dia == "sabado") || (dia == "domingo") ) {
switch (dia) {
case "lunes":
    alert("Mañana será martes");
    break;
case "martes":
    alert("Mañana será miércoles");
    break;
case "miercoles":
    alert("Mañana será jueves");
    break;
case "jueves":
    alert("Mañana será viernes");
    break;
case "viernes":
    alert("Mañana será sábado");
    break;
case "sabado":
    alert("Mañana será domingo");
    break;
case "domingo":
    alert("Mañana será lunes");
    break;

}} else {
    alert("NO HA INGRESADO UN DÍA VÁLIDO, RECARGUE LA PÁGINA PARA VOLVER A INTENTARLO");
}