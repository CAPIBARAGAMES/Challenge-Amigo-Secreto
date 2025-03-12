// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    //Reconociendo valor a tomar
    let amigo = document.getElementById('amigo').value
    console.log(amigo)
    //Agregando amigo a la lista
    //Validando el que elcampo no este vacio
    if (amigo == ''){
        alert("Por favor, inserte un nombre.")
        //Empujando el nombre de entrada
    } else {
        listaAmigos.push(amigo);
        console.log(listaAmigos)
        cleanBox();

    }



 

}


function cleanBox() {
    document.getElementById('amigo').value = '';
}