const palavras = ['abelha','banana','cadeira','decolar','esmola','faca',
 'galo', 'hiper', 'imortal','janela','kenzie','lago', 'madeira', 'nave',
 'ovo','porco','queijo','rabanete','sabonete','topeira']
 
 function geradorDeLetra() {

    const alfabeto = "abcdefghijklmnopqrstuvwxyz"
  
    return alfabeto[Math.floor(Math.random() * alfabeto.length)]
 }
 geradorDeLetra()

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

catchs()



const handleClik = function(event){            
    const cellid = event.target.id;
    console.log(cellid);
}
const cells = document.querySelectorAll('td');


for (let i=0; i<cells.length; i++ ){
    
    cells[i].addEventListener('click', handleClik);
    cells[i].innerText = geradorDeLetra()

}

const testes = "testado";
let j = 0;
for (let i = 1; i<cells.length; i+=10){
   
        cells[i].innerText = testes[j];
        j+=1;
  
   
}




