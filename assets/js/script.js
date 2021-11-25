//ARRAY DE PALAVRAS DO JOGO
const palavras = ['comensal','hermione','sonserina','azkaban','horcrux','nimbus',
'dobby', 'hagrid', 'potter','mafoy','ronald','draco', 'severus', 'sirius',
'cornival','harry','minerva','neville','edwiges']
//ADICIONADO TODAS AS ALTERAÇÕES A TABLEA
const cells = document.querySelectorAll('td');
//GERADOR DE LETRAS ALEATORIAS NA TABELA
function geradorDeLetra(){
    const alfabeto = "abcdefghijklmnopqrstuvwxyz"
    return alfabeto[Math.floor(Math.random() * alfabeto.length)]
}
//FUNÇÃO QUE ESCOLHE 1 PALAVRA ALEATORIA DENTRO DO ARRAY DE PALAVRAS 
function geradorDePalavra(){
    let result = [];
    for(let i = 0; i < 1; i++){
    result.push(palavras[aleatorio0a19()])
    }
    return result.join("")
}
//FUNÇÃO QUE ADICIONA AS LETRAS ALEATORIAS NA TABELA
function adicionaLetras(){
    for (let i=0; i<cells.length; i++ ){  
    cells[i].innerText = geradorDeLetra()
    }
}
adicionaLetras()
//FUNÇÃO QUE DEVOLVE UM NUMERO ALEATORIO DE 0 A 10
function aleatorio1a10() {
let ramdom =  Math.floor(Math.random(1, 10)* 10 + 1);   
    return ramdom;
}
//FUNÇÃO QUE DEVOLVE UM NUMERO ALEATORIO DE 0 19
function aleatorio0a19() {
    return Math.floor(Math.random()* 19 + 1);   
}
//ESCOLHE UMA COLUNA DENTRO DO ARRAY DE COLUNAS
const coluna = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91];
const colunaramdom = coluna[aleatorio1a10()];
//FUNCAO QUE JOGA A PRIMEIRA PALAVRAS DE FORMA VERTICAL 
const palavra = geradorDePalavra();
let arrayLetraClicada = []
let arrayPalavraAleatoriaInserida = [];
function vertical(){
    let j = 0;
    for (let i = aleatorio1a10(); i<cells.length; i+=10){        
        if ( palavra[j] === undefined ){
           break;
        }else{
            cells[i].innerText = palavra[j];
            console.log(palavra[j]);
            arrayPalavraAleatoriaInserida.push(cells[i].id)    
            j+=1;
        }
    }
}
//FUNCAO QUE JOGA A SEGUNDA PALAVRA DE FORMA HORIZONTAL
let palavra2 = geradorDePalavra();
let arrayPalavraAleatoriaInserida2 = []
function horizontal1(){
    console.log("teste");
    j = 0;
    for (let i = colunaramdom; i<cells.length; i++){        
        if ( palavra2[j] === undefined){
            break;
        }else{
            cells[i].innerText = palavra2[j];
            console.log(palavra2[j]);
            arrayPalavraAleatoriaInserida2.push(cells[i].id)    
            j+=1;
        }
    }
}
//FUNCAO QUE JOGA A TERCEIRA PALAVRA DE FORMA HORIZONTAL
//let palavra3 = geradorDePalavra();
//let arrayPalavraAleatoriaInserida3 = []
//function horizontal2(){
//    j = 0;
//    for (let i = colunaramdom; i<cells.length; i++){        
//        if ( palavra3[j] === undefined){
//            break;
//        }else{
//            cells[i].innerText = palavra3[j];
//            console.log(palavra3[j]);
//            arrayPalavraAleatoriaInserida3.push(cells[i].id)    
//            j+=1;
//        }
//    }
//}
vertical()
horizontal1()
//horizontal2()
//FUNÇÃO QUE VERIFICA A COLISÃO DE PALAVRAS
    let maior; 
if (palavra.length > palavra2.length){
    maior = palavra;
}else{
    maior = palavra2;
}

console.log(palavra)
console.log(palavra2)
console.log()

function colisao(){
  for (let i=0; i<maior.length; i++){
     for (let j = 0; j<maior.length; j++){
     if (arrayPalavraAleatoriaInserida[i] === arrayPalavraAleatoriaInserida2[j] 
        || palavra == palavra2 || palavra == "" || palavra2 == "" || palavra3 == ""){
      
    location.reload();
}
}}
}
colisao()
//FUNÇÃO QUE CAPTURA O ID DAS LETRAS
function ClickTabela(){
    const cell = event.target.id;
    arrayLetraClicada.push(cell);
}
//FUNÇÃO QUE VERIFICA A VITORIA
function validacaoDeDados(){
  
    let string1 = arrayLetraClicada.join("");
        let string2 = arrayPalavraAleatoriaInserida.join("");
        console.log(string1)
        console.log(string2)
        console.log(string3)
        
        if (string1 == string2){
            alert("Acertou a frase!");
            arrayLetraClicada = [];
        }else{
            alert("Errou a frase!");
            arrayLetraClicada = [];
        }
    

     
        let string3 = arrayPalavraAleatoriaInserida2.join("");
        console.log(string1)
        console.log(string3)
        
        if (string1 == string3){
            alert("Acertou a frase!");
            arrayLetraClicada = [];
        }else{
            alert("Errou a frase!");
            arrayLetraClicada = [];
        }
    
    
}
//EVENTOS DE CLICK SENDO ESPERADOS
for (let i=0; i<cells.length; i++ ){
    cells[i].addEventListener('click', ClickTabela);
    cells[i].addEventListener('click', validacaoDeDados);  
    cells[i].addEventListener('click', color);  
    cells[i].addEventListener('click', function(){
        if(clicks){
            click();
        }
       
});
function color(){
    cells[i].classList = "blue";
}
}
//ADICIONANDO MUSICA A PAGINA
const clicks = document.getElementById('click');
const player = document.getElementById('audio');

const button = document.getElementById('musica');
function play() {
    player.play();
   
   
    
}
function click(){
    clicks.play();
}
 function pause() {
    player.pause();
 }
  button.addEventListener('click', function(){
         if(player.paused){
             play();
         }else{pause();}
});

//MOSTRANDO PALAVRAS QUE VAO SER GERADAS    
const p1 = document.getElementById("palavra")
const p2 = document.getElementById("palavra2")
const reset = document.getElementById("reset")
p1.innerText = palavra
p2.innerText = palavra2

reset.addEventListener('click', resets)

function resets(){
    location.reload();
}

  

