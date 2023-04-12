
function Encriptar(){
    let texto = document.getElementById("texto").value;
    let encriptado = "";
    for (var i = 0; i < texto.length; i++) {
        encriptado += String.fromCharCode(texto.charCodeAt(i) + 1);
    }
    document.getElementById("textoEncriptado").value = encriptado;   
}

function Desencriptar(){
    let texto = document.getElementById("textoEncriptado").value;
    let desencriptado = "";
    document.getElementById("textoEncriptado").value = "TEXTO DESENCRIPTADO.";
}