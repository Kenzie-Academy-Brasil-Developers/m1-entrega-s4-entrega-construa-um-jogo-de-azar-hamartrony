//ARRAY DE PALAVRAS DO JOGO
const palavras = ['comensal','hermione','sonserina','azkaban','horcrux','nimbus',
'dobby', 'hagrid', 'potter','mafoy','ronald','draco', 'severus', 'sirius',
'cornival','harry','hermione','minerva','neville','edwiges']
//ADICIONADO TODAS AS ALTERAÇÕES A TABLEA
const cells = document.querySelectorAll('td');
//GERADOR DE LETRAS ALEATORIAS NA TABELA
function geradorDeLetra(){
    const alfabeto = "abcdefghijklmnopqrstuvwxyz"
    return alfabeto[Math.floor(Math.random() * alfabeto.length)]
}
//FUNÇÃO QUE ESCOLHE 1 PALAVRA ALEATORIA DENTRO DO ARRAY DE PALAVRAS 
let result = [];
    function geradorDePalavra(){
    for(let i = 0; i < 1; i++){
    result.push(palavras[aleatorio0a19()])
    }
    return result.join(" ")
}
//FUNÇÃO QUE ADICIONA AS LETRAS ALEATORIAS NA TABELA
function adicionaLetras(){
    for (let i=0; i<cells.length; i++ ){  
    cells[i].innerText = geradorDeLetra()
    }
}
adicionaLetras()
//FUNÇÃO QUE DEVOLVE UM NUMERO ALEATORIO DE 1 A 10
function aleatorio1a10() {
    return Math.floor(Math.random()* 10 + 1);   
}
//FUNÇÃO QUE DEVOLVE UM NUMERO ALEATORIO DE 0 19
function aleatorio0a19() {
    return Math.floor(Math.random()* 19 + 1);   
}
//FUNÇÃO QUE JOGA A PRIMEIRA PALAVRAS DE FORMA VERTICAL 
const palavra = geradorDePalavra();
    let j = 0;
    let arrayPalavraAleatoriaInserida = []
    let arrayLetraClicada = []
    for (let i = aleatorio1a10(); i<cells.length; i+=10){        
    if ( palavra[j] === undefined){
        cells[i].innerText = geradorDeLetra()
    }else{
        cells[i].innerText = palavra[j];
        j+=1;
        arrayPalavraAleatoriaInserida.push(cells[i].id)    
    }
}
//FUNÇÃO QUE CAPTURA O ID DAS LETRAS
function ClickTabela(){
    const cell = event.target.id;
    arrayLetraClicada.push(cell);
}
//FUNÇÃO QUE VERIFICA A VITORIA
function validacaoDeDados(){
    if (arrayPalavraAleatoriaInserida.length == arrayLetraClicada.length){
        let string1 = arrayLetraClicada.join("");
        let string2 = arrayPalavraAleatoriaInserida.join("");
        if (string1 == string2){
            alert("Acertou a frase!");
        }else{
            alert("Errou a frase!");
            arrayLetraClicada = [];
        }
    }
}
//EVENTOS DE CLICK SENDO ESPERADOS
for (let i=0; i<cells.length; i++ ){
    cells[i].addEventListener('click', ClickTabela);
    cells[i].addEventListener('click', validacaoDeDados);  
}
//ADICIONANDO MUSICA A PAGINA
const player = document.getElementById('audio');
const button = document.getElementById('musica');
function play() {
    player.play()
}
 function pause() {
    player.pause();
 }
  button.addEventListener('click', function(){
         if(player.paused){
             play();
         }else{pause();}
});
