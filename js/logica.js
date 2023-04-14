const texto = document.getElementById("texto");
const btnbtnEncriptar = document.getElementById("btnEncriptar"); //const btnbtnEncriptar = no FUNCA
const txtEncriptado = document.getElementById("textoEncriptado");


function encriptar(mensaje){
    let llave = [["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
    mensaje = mensaje.toLowerCase();
    for (let i=0; i<llave.length; i++){
        if(mensaje.includes(llave[i][0])){
            mensaje = mensaje.replaceAll(llave[i][0], llave[i][1]);
        }
    }
    return mensaje;
};


btnbtnEncriptar.onclick = () => txtEncriptado.value = encriptar(texto.value);
//document.getElementById("btnEncriptar").onclick = () => txtEncriptado.value = encriptar(texto.value);
// al reemplazar document.getElementById("btnEncriptar") por la variable btnEncriptar, no FUNCA
//  ===>  btnEncriptar.onclick = function () {  // al reemplazar document.getElementById("btnEncriptar") por la variable btnEncriptar, no FUNCA
//    txtEncriptado.value = "";
    

    


//document.getElementById("btnDesencriptar").onclick = () => txtEncriptado.value = "hola!!";

