var btnLogar = document.querySelector ('#logar');
var btnCriar = document.querySelector ('#criar');
var btnConectar = document.querySelector('#teste')

var body = document.querySelector("body");

btnConectar.addEventListener("click",function(){
    
});

btnLogar.addEventListener("click", function(){
    body.className = "logar-js";
});

btnCriar.addEventListener("click", function(){
    body.className = "criar-js";
});

