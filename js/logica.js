
function Encriptar(){
    let texto = document.getElementById("texto").value;

    let encriptado = texto + "este  texto se encuentra encriptado.";
    document.getElementById("textoEncriptado").value = encriptado;   
}

const btnEncriptar = document.getElementById("btnencriptar");
btnEncriptar.onclick = Encriptar;


/*
function Desencriptar(){
    let texto = document.getElementById("textoEncriptado").value;
    let desencriptado = "";
    document.getElementById("textoEncriptado").value = "TEXTO DESENCRIPTADO.";
}
*/