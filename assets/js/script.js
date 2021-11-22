const palavras = ['abelha','banana','cadeira','decolar','esmola','faca',
 'galo', 'hiper', 'imortal','janela','kenzie','lago', 'madeira', 'nave',
 'ovo','porco','queijo','rabanete','sabonete','topeira'];

console.log(palavras)

function geradorDeLetra() {

    const alfabeto = "abcdefghijklmnopqrstuvwxyz"
  
    return alfabeto[Math.floor(Math.random() * alfabeto.length)]
}
geradorDeLetra()