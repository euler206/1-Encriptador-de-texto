const texto = document.getElementById("texto");
const btn = document.querySelector("btn");
const txtEncriptado = document.getElementById("textoEncriptado");

document.getElementById("btn").onclick = function () {
  textoEncriptado.value = texto.value +"TEXTO";
  console.log(textoEncriptado.value)
};

/*
function encriptar(){

    let encriptado = texto.value + "este  texto se encuentra encriptado.";
    txtEncriptado.value = encriptado;
    alert("Texto encriptado con exito.");   
}

function Desencriptar(){
    let texto = document.getElementById("textoEncriptado").value;
    let desencriptado = "";
    document.getElementById("textoEncriptado").value = "TEXTO DESENCRIPTADO.";
}
*/
