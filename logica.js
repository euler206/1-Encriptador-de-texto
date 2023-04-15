import llave from "./key.js";
const texto = document.getElementById("texto");
const btnbtnEncriptar = document.getElementById("btnEncriptar"); 
const btnDesencriptar = document.getElementById("btnDesencriptar"); 
const txtEncriptado = document.getElementById("textoEncriptado");

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

btnbtnEncriptar.onclick = () => txtEncriptado.value = encriptar(texto.value);
btnDesencriptar.onclick = () => txtEncriptado.value = desencriptar(texto.value);

