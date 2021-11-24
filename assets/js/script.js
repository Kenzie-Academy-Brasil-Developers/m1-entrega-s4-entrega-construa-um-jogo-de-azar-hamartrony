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
//FUNÇÃO QUE DEVOLVE UM NUMERO ALEATORIO DE 0 A 10
function aleatorio1a10() {
let ramdom =  Math.floor(Math.random(0, 9)* 9 + 1);   
    return ramdom;
}
//FUNÇÃO QUE DEVOLVE UM NUMERO ALEATORIO DE 0 19
function aleatorio0a19() {
    return Math.floor(Math.random()* 19 + 1);   
}
//ESCOLHE UMA COLUNA DENTRO DO ARRAY DE COLUNAS
const coluna = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91];
const colunaramdom = coluna[aleatorio1a10()];
//JOGA A PRIMEIRA PALAVRAS DE FORMA VERTICAL 
const palavra = geradorDePalavra();
    let j = 0;
    let arrayPalavraAleatoriaInserida = []
    let arrayLetraClicada = []
    
    for (let i = aleatorio1a10(); i<cells.length; i+=10){        
    if ( palavra[j] === undefined ){
        cells[i].innerText = geradorDeLetra()
    }else{
        cells[i].innerText = palavra[j];
        console.log(palavra[j]);
        console.log(arrayPalavraAleatoriaInserida)

        arrayPalavraAleatoriaInserida.push(cells[i].id)    
        j+=1;
    }
}
//JOGA A SEGUNDA PALAVRA DE FORMA HORIZONTAL
const palavra2 = geradorDePalavra();
let arrayPalavraAleatoriaInserida2 = []
    for (let i = colunaramdom; i<cells.length; i++){        

    if ( palavra2[j] === undefined){
        cells[i].innerText = geradorDeLetra()
    }else{
        cells[i].innerText = palavra2[j];
        console.log(palavra2[j]);
        j+=1;
        arrayPalavraAleatoriaInserida2.push(cells[i].id)    
        console.log(arrayPalavraAleatoriaInserida2)
    }
}
//FUNÇÃO QUE CAPTURA O ID DAS LETRAS
function ClickTabela(){
    const cell = event.target.id;
    console.log(arrayLetraClicada)
    arrayLetraClicada.push(cell);
    console.log(cell)
}
//FUNÇÃO QUE VERIFICA A VITORIA
function validacaoDeDados(){
    if (arrayPalavraAleatoriaInserida.length == arrayLetraClicada.length){
        let string1 = arrayLetraClicada.join("");
        let string2 = arrayPalavraAleatoriaInserida.join("");
        let string3 = arrayPalavraAleatoriaInserida2.join("");
        
        if (string1 == string2 || string1 == string3){
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


  


