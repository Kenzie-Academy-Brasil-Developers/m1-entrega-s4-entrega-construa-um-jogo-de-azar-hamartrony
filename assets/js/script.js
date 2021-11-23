//ARRAY DE PALAVRAS DO JOGO
const palavras = ['comensal','hermione','sonserina','azkaban','horcrux','nimbus',
'dobby', 'hagrid', 'potter','mafoy','ronald','draco', 'severus', 'sirius',
'cornival','harry','hermione','minerva','neville','edwiges']
 
//GERADOR DE LETRAS ALEATORIAS NA TABELA
function geradorDeLetra(){
    const alfabeto = "abcdefghijklmnopqrstuvwxyz"
    return alfabeto[Math.floor(Math.random() * alfabeto.length)]
}
//FUNÇÃO QUE ESCOLHE 1 PALAVRAS ALEATORIAS DENTRO DO ARRAY DE PALAVRAS 
let result = [];
    function geradorDePalavra(){
    for(let i = 0; i < 1; i++){
    result.push(palavras[aleatorio0a19()])
    }
    return result.join(" ")
}

    const cells = document.querySelectorAll('td');
    for (let i=0; i<cells.length; i++ ){
    
      
        cells[i].innerText = geradorDeLetra()
    
    }

//FUNÇÃO QUE JOGA A PALAVRA EM UMA POSIÇÃO ALEATORIA NA TABELA
function aleatorio1a10() {
    return Math.floor(Math.random()* 10 + 1);   
}

function aleatorio0a19() {
    return Math.floor(Math.random()* 19 + 1);   
}
//FUNÇÃO QUE JOGA A PRIMEIRA PALAVRAS DE FORMA VERTICAL 
const palavra = geradorDePalavra();
let j = 0;
let arrayPalavraAleatoriaInserida = []
let arrayLetraClicada = []
for (let i = aleatorio1a10(); i<cells.length; i+=10){
    //continuar o array de id para selecionar a posicao de onde a palavra foi inserida
    //console.log(cells[i].id)    
        
    if ( palavra[j] === undefined){
        cells[i].innerText = geradorDeLetra()
    }else{
        cells[i].innerText = palavra[j];
        j+=1;
        arrayPalavraAleatoriaInserida.push(cells[i].id)
        console.log(arrayPalavraAleatoriaInserida)       
    }
}




//AS FUNÇÕES ABAIXO ESTÃO EM OBSERVAÇÃO AINDA

//FUNÇÃO QUE ADICIONA LETRAS GERADAS NA TABELA

const handleClik = function(event){            
    const cellid = event.target.id;
    arrayLetraClicada.push(cellid.id);
    console.log(arrayLetraClicada)
}

 //TESTE DE APLICAÇÃO A ID PARA A PALAVRA CORRETA
 function catchs(){

    const a = document.getElementById("a")
    const m = document.getElementById("m")
    const o = document.getElementById("o")
    const r = document.getElementById("r")

    a.addEventListener('click', tester)
    m.addEventListener('click', tester)
    o.addEventListener('click', tester)
    r.addEventListener('click', tester)

}

//FUNÇÃO QUE TESTA SE ÁS LETRAS SELECIONADAS SÃO UMA PALAVRA DO ARRAY DE PALAVRA
let arrcreated = [];
function tester(){

    const arright = "amor";
    let strcreated;
    const events = event.target.id;
    arrcreated.push(events);

    if (arrcreated.length == arright.length){
        strcreated = arrcreated.join("");
    }else if (arrcreated.length > arright.length){
        arrcreated = [];

    }
    if ( strcreated  == arright){
        alert("correto!")
    }
}