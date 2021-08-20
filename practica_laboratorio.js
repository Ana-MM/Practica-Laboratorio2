function mostrarValoracion(){
let valoracion1a5;
valoracion1a5=document.getElementById("valoracion1a5").value;
alert("Has valorado con " + valoracion1a5);
}

function mostrarCuenta(){
let pais=document.getElementById("pais").value;
let iban=document.getElementById("iban").value;
let entidad=document.getElementById("entidad").value;
let sucursal=document.getElementById("sucursal").value;
let dc=document.getElementById("dc").value;
let cuenta=document.getElementById("ncuenta").value;

alert("Le informamos que su cuenta bancaria es: " + pais + iban + "-" + entidad + "-" + sucursal + "-" + dc+ "-" + cuenta);
}


function mostrarDia(){
    let fecha = new Date(document.getElementById('fecha').value);
    let day = fecha.getDay();
    let diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    alert(`La fecha seleccionada en el elemento de fecha es un ${diaSemana[day]}`);
    }