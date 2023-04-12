const texto = document.getElementById("texto");
const btnEncriptar = document.getElementById("btnencriptar");
const txtEncriptado = document.getElementById("textoEncriptado");

function Encriptar(){

    let encriptado = texto.value + "este  texto se encuentra encriptado.";
    txtEncriptado.value = encriptado;   
}

btnEncriptar.onclick = Encriptar;


/*
function Desencriptar(){
    let texto = document.getElementById("textoEncriptado").value;
    let desencriptado = "";
    document.getElementById("textoEncriptado").value = "TEXTO DESENCRIPTADO.";
}
*/