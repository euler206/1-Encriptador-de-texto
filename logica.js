import llave from "./key.js";
const texto = document.getElementById("texto");
const btnEncriptar = document.getElementById("btnEncriptar"); 
const btnDesencriptar = document.getElementById("btnDesencriptar"); 
const txtEncriptado = document.getElementById("textoEncriptado");

function encriptar(mensaje,op) {
    mensaje = mensaje.toLowerCase();
    llave.forEach(([enc, des]) => mensaje = op ? mensaje.replaceAll(enc, des): mensaje.replaceAll(des, enc));
    return mensaje;
};

btnEncriptar.onclick = () => txtEncriptado.value = encriptar(texto.value,1); // 1 = true para encriptar
btnDesencriptar.onclick = () => txtEncriptado.value = encriptar(texto.value,0); // 0 = false para desencriptar







/*
function encriptar(mensaje) {
    mensaje = mensaje.toLowerCase();
    llave.forEach(([enc, des]) => mensaje = mensaje.replaceAll(enc, des));
    return mensaje;
};
function desencriptar(mensaje) {
    mensaje = mensaje.toLowerCase();
    llave.forEach(([enc, des]) => mensaje = mensaje.replaceAll(des, enc));
    return mensaje;
};
*/
