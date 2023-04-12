const texto = document.getElementById("texto");
const btnEncriptar = document.getElementById("btnEncriptar");
const txtEncriptado = document.getElementById("textoEncriptado");

function encriptar(){

    let encriptado = texto.value + "este  texto se encuentra encriptado.";
    txtEncriptado.value = encriptado;   
}

btnEncriptar.onclick = encriptar;


/*
function Desencriptar(){
    let texto = document.getElementById("textoEncriptado").value;
    let desencriptado = "";
    document.getElementById("textoEncriptado").value = "TEXTO DESENCRIPTADO.";
}
*/