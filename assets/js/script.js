const palavras = ['abelha','banana','cadeira','decolar','esmola','faca',
 'galo', 'hiper', 'imortal','janela','kenzie','lago', 'madeira', 'nave',
 'ovo','porco','queijo','rabanete','sabonete','topeira'];

console.log(palavras)

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