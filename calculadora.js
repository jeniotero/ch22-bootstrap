let boton1 = document.getElementById('sumar');
let respuesta = document.getElementById ('respuesta');



let suma = ( )=> {

    
    let a = document.getElementById("n1").value;  
    let b = document.getElementById("n2").value;
   
    let pro = (parseFloat(a) + parseFloat(b));
    return document.getElementById("respuesta").innerHTML = pro;
};
boton1.onclick = suma;

let boton2 = document.getElementById('restar');

boton2.onclick = resta;
function resta ( ){

    let a = document.getElementById("n1").value;  
    let b = document.getElementById("n2").value;
   
    const pro = (parseFloat(a) - parseFloat(b));
    document.getElementById("respuesta").innerHTML = pro;
};

let boton3 = document.getElementById('multiplicar');

boton3.onclick = multiplica;

function multiplica ( ){

    let a = document.getElementById("n1").value;  
    let b = document.getElementById("n2").value;
   
    const pro = (parseFloat(a) * parseFloat(b));   
     document.getElementById("respuesta").innerHTML = pro;
};
    
let boton4 = document.getElementById('dividir');

boton4.onclick = divide;

function divide ( ){

    let a = document.getElementById("n1").value;  
    let b = document.getElementById("n2").value;
   
    const pro = (parseFloat(a) / parseFloat(b));   
     document.getElementById("respuesta").innerHTML = pro;
};

