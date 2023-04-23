import llave from "./key.js";
//const [texto, btnEncriptar, btnDesencriptar, txtEncriptado, btnCopiar] = ["texto", "btn-encriptar", "btn-desencriptar", "texto-encriptado", "btn-copiar"].map(id => document.getElementById(id));
const texto = document.getElementById("texto");
const btnEncriptar = document.getElementById("btn-encriptar"); 
const btnDesencriptar = document.getElementById("btn-desencriptar"); 
const txtEncriptado = document.getElementById("texto-encriptado");
const btnCopiar = document.getElementById("btn-copiar");

const copiar = () => navigator.clipboard.writeText(txtEncriptado.value);
const pegar = () => navigator.clipboard.readText().then(tex => texto.value = tex);
function encriptar(mensaje,op) {
    mensaje = mensaje.toLowerCase();
    llave.forEach(([enc, des]) => mensaje = op ? mensaje.replaceAll(enc, des): mensaje.replaceAll(des, enc));
    return mensaje;
};
btnEncriptar.onclick = () => txtEncriptado.value = encriptar(texto.value,1); // 1 = true para encriptar
btnDesencriptar.onclick = () => txtEncriptado.value = encriptar(texto.value,0); // 0 = false para desencriptar
btnCopiar.onclick = function () {
        if (btnCopiar.innerText === "Copiar"){
            copiar();
            btnCopiar.innerText = "Pegar";
        } else{
            pegar();
            btnCopiar.innerText = "Copiar";
        }
    };




