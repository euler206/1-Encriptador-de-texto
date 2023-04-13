const texto = document.getElementById("texto").value;
const btn = document.getElementById("btn");
const txtEncriptado = document.getElementById("textoEncriptado");


function encriptar(texto){
    let llave = [["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
    texto = texto.toLowerCase();
    for (let i=0; i<llave.length; i++){
        if(texto.includes(llave[i][0])){
            texto = texto.replaceAll(llave[i][0], llave[i][1]);
        }

    }
    console.log(texto);
    return texto;
};

document.getElementById("btn").onclick = function () {
    txtEncriptado.value = "";
    txtEncriptado.value = encriptar(texto);

    
};

document.getElementById("btnDesencriptar").onclick = function () {
    txtEncriptado.value = "hola!!";
}
