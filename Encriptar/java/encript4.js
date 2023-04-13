function encriptar() {
  var texto = document.getElementById("inputtexto").value.toLowerCase();
  //i es para que afecte a tanto mayus como minus
  //g afecta a toda la linea
  //m afecta a multiples lineas
  var txtcifrado = texto.replace(/e/igm,"enter");
  var txtcifrado = txtcifrado.replace(/o/igm,"ober");
  var txtcifrado = txtcifrado.replace(/i/igm,"imes");
  var txtcifrado = txtcifrado.replace(/a/igm,"ai");
  var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("texto2").innerHTML = txtcifrado;
  document.getElementById("inputtexto").innerHTML = " ";
  document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
  var texto = document.getElementById("inputtexto").value.toLowerCase();
  var txtcifrado = texto.replace(/enter/igm,"e");
  var txtcifrado = txtcifrado.replace(/ober/igm,"o");
  var txtcifrado = txtcifrado.replace(/imes/igm,"i");
  var txtcifrado = txtcifrado.replace(/ai/igm,"a");
  var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
  document.getElementById("imgDer").style.display = "none";
  document.getElementById("texto").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("texto2").innerHTML = txtcifrado;
  document.getElementById("inputtexto").innerHTML = " ";
  document.getElementById("copiar").style.display = "inherit";
}

function copia() {
  var contenido = document.querySelector("#texto2");
  contenido.select();
  document.execCommand('copy');
  alert("Copied!");
}




/* var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");


function criptografar(){

  var texto = textInput.value;

  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  
  document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultCripto + 
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){

    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' + resultDescripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('input-texto');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  */