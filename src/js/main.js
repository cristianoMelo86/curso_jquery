var frase = jQuery(".frase").text();
var tamanhoFrase = frase.split(" ").length;
var numPalavras = $('.numPalavras');
var campo = $("#areaTxt");
var conteudo = campo.split(" ");
var caracter = $(".caracter");


campo.on("input", function(){
    caracter.text(campo.val().length)
    conteudo.text(tamanhoFrase);
    
});



