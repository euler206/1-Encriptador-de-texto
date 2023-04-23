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
function copiar() {
    navigator.clipboard.writeText(txtEncriptado.value);
    btnCopiar.innerText = "Pegar";
};
function pegar() {
    navigator.clipboard.readText().then(tex => texto.value = tex);
    btnCopiar.innerText = "Copiar";
};

btnEncriptar.onclick = () => txtEncriptado.value = encriptar(texto.value,1); // 1 = true para encriptar
btnDesencriptar.onclick = () => txtEncriptado.value = encriptar(texto.value,0); // 0 = false para desencriptar
btnCopiar.onclick = () => btnCopiar.innerText === "Copiar" ? copiar() : pegar();




/* ************* CODIGO AUN MAS COMPACTO **************
import llave from "./key.js";
const [texto, btnEncriptar, btnDesencriptar, txtEncriptado, btnCopiar] = ["texto", "btn-encriptar", "btn-desencriptar", "texto-encriptado", "btn-copiar"].map(id => document.getElementById(id));
const encriptar = (mensaje, op) => llave.forEach(([enc, des]) => mensaje = op ? mensaje.replaceAll(enc, des) : mensaje.replaceAll(des, enc)), mensaje.toLowerCase();
const copiar = () => navigator.clipboard.writeText(txtEncriptado.value), btnCopiar.innerText = "Pegar";
const pegar = () => navigator.clipboard.readText().then(tex => texto.value = tex), btnCopiar.innerText = "Copiar";

btnEncriptar.onclick = () => txtEncriptado.value = encriptar(texto.value, 1);
btnDesencriptar.onclick = () => txtEncriptado.value = encriptar(texto.value, 0);
btnCopiar.onclick = () => btnCopiar.innerText === "Copiar" ? copiar() : pegar();
*/