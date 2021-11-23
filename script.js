const palavras = ['comensal','hermione','sonserina','azkaban','horcrux','nimbus',
'dobby', 'hagrid', 'potter','mafoy','ronald','draco', 'severus', 'sirius',
'cornival','harry','hermione','minerva','neville','edwiges']
 
 function geradorDeLetra() {

    const alfabeto = "abcdefghijklmnopqrstuvwxyz"
  
    return alfabeto[Math.floor(Math.random() * alfabeto.length)]
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


function geradorDeLetra() {

    const alfabeto = "abcdefghijklmnopqrstuvwxyz"
  
    return alfabeto[Math.floor(Math.random() * alfabeto.length)]
 }
 geradorDeLetra()

 function aleatorio0a19() {
    return Math.floor(Math.random()* 19 + 1);    
  }




