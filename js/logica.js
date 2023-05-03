import llave from "./key.js";
//const [texto, btnEncriptar, btnDesencriptar, txtEncriptado, btnCopiar] = ["texto", "btn-encriptar", "btn-desencriptar", "texto-encriptado", "btn-copiar"].map(id => document.getElementById(id)); // poco entendible 
const texto = document.getElementById("text-area");
const btnEncriptar = document.getElementById("btn-encriptar"); 
const btnDesencriptar = document.getElementById("btn-desencriptar"); 
const mensaje = document.getElementById("mensaje");
const btnCopiarPegar = document.getElementById("btn-copiar-pegar");

function encriptar(text,op) {
    text = text.toLowerCase();
    llave.forEach(([enc, des]) => text = op ? text.replaceAll(enc, des): text.replaceAll(des, enc));
    return text;
};
const copiar = () => navigator.clipboard.writeText(mensaje.value);
const pegar = () => navigator.clipboard.readText().then(tex => texto.value = tex);

btnEncriptar.onclick = function (){
    if (texto.value === "") return;
    mensaje.value = encriptar(texto.value,1);// 1 = true para encriptar
    //texto.value = "";
    //btnCopiarPegar.style.visibility = "visible";
    //mensaje.focus()
    btnCopiarPegar.classList.toggle("mostrar");
} 
btnDesencriptar.onclick = function () {
    if (texto.value === "") return;
    mensaje.value = encriptar(texto.value,0); // 0 = false para desencriptar
    //texto.value = "";
    //mensaje.focus()
}
btnCopiarPegar.onclick = function () {
        if (btnCopiarPegar.innerText === "Copiar"){
            copiar();
            btnCopiarPegar.innerText = "Pegar";
        } else{
            pegar();
            btnCopiarPegar.innerText = "Copiar";
            //btnCopiarPegar.style.visibility = "hidden";
        }
        mensaje.value = "";
    };

