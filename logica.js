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
const copiar = () => {
    navigator.clipboard.writeText(txtEncriptado.value);
    btnCopiar.innerText = "Pegar";
};
const pegar = () => {
    navigator.clipboard.readText().then(tex => texto.value = tex);
    btnCopiar.innerText = "Copiar";
};

btnEncriptar.onclick = () => txtEncriptado.value = encriptar(texto.value,1); // 1 = true para encriptar
btnDesencriptar.onclick = () => txtEncriptado.value = encriptar(texto.value,0); // 0 = false para desencriptar
btnCopiar.onclick = () => btnCopiar.innerText === "Copiar" ? copiar() : pegar();
