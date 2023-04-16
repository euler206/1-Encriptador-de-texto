import llave from "./key.js";
const texto = document.getElementById("texto");
const btnEncriptar = document.getElementById("btn-encriptar"); 
const btnDesencriptar = document.getElementById("btn-desencriptar"); 
const txtEncriptado = document.getElementById("texto-encriptado");
const btnCopiar = document.getElementById("btn-copiar");

function encriptar(mensaje,op) {
    mensaje = mensaje.toLowerCase();
    llave.forEach(([enc, des]) => mensaje = op ? mensaje.replaceAll(enc, des): mensaje.replaceAll(des, enc));
    return mensaje;
};

btnEncriptar.onclick = () => txtEncriptado.value = encriptar(texto.value,1); // 1 = true para encriptar
btnDesencriptar.onclick = () => txtEncriptado.value = encriptar(texto.value,0); // 0 = false para desencriptar
btnCopiar.onclick = () => navigator.clipboard.writeText(txtEncriptado.value);

