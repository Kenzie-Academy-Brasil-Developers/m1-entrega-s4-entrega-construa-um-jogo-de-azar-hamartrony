const palavras = ['abelha','banana','cadeira','decolar','esmola','faca',
 'galo', 'hiper', 'imortal','janela','kenzie','lago', 'madeira', 'nave',
 'ovo','porco','queijo','rabanete','sabonete','topeira']
 
 function geradorDeLetra() {

    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    return alfabeto[Math.floor(Math.random() * alfabeto.length)];
    
 }
 geradorDeLetra()

let currentPlayer = 'X';   //jogador da vez variavel
let nextPlayer = 'O';       //proximo jogador variavel

let playerXSelections = [];     //array que armazena os clicks
let playerOselections = [];

const winningCombinations = [   //array com as combincoes de vitoria - 
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]

const handleClik = function(event){             //click na celula
    const cell = event.target
    console.log(cell.id);
}
const cells = document.querySelectorAll('td');
console.log(cells)

for (let i=0; i<cells.length; i++ ){
    cells[i].addEventListener('click', handleClik);
    cells[i].innerText = geradorDeLetra()
}


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
 



