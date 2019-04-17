const {ipcRenderer, shell} = require('electron');
const process = require("process");

let linkFechar = document.querySelector("#link-fechar");
let linkAutor = document.querySelector("#autorLink");
let versaoElectron = document.querySelector("#versaoElectron");

linkFechar.addEventListener('click', function(){
    ipcRenderer.send('fechar-janela-sobre');
});

linkAutor.addEventListener('click', function(){
    shell.openExternal("https://www.github.com/lucianoVirmes")
});

window.onload = function(){
    versaoElectron.textContent = process.versions.electron;
}