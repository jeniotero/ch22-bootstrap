console.log("Práctica Di tu nombre");

function changeName(){
    const name = prompt("Por favor, escribe tu nombre:");
    document.getElementById("hello").inerHTML = `Hola ${name}`;
}