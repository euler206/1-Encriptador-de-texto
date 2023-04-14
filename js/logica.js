const texto = document.getElementById("texto").value;
//const btnbtnEncriptar = document.getElementById("btnEncriptar"); //const btnbtnEncriptar = no FUNCA
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

document.getElementById("btnEncriptar").onclick = () => txtEncriptado.value = encriptar(texto);
// al reemplazar document.getElementById("btnEncriptar") por la variable btnEncriptar, no FUNCA
//  ===>  btnEncriptar.onclick = function () {  // al reemplazar document.getElementById("btnEncriptar") por la variable btnEncriptar, no FUNCA
//    txtEncriptado.value = "";
    

    


document.getElementById("btnDesencriptar").onclick = () => txtEncriptado.value = "hola!!";

