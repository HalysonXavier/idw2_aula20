//Função que emite uma mensagem na tela
function ola(){
    alert('Olá.')
}

// função com parametro 
function olaPessoa(nome){
    alert(nome + ' seja bem vindo!')
}

// função captura de elemento
function saudacao(){
    const nome = document.getElementById('nome').value
    alert('Olá ' + nome)
}

// função do mouse (efeito)
function mouseSobre(){
    alert('O mouse está em cima')
}
function mouseFora(){
    alert('O mouse saiu!')
}

function textoModificado(){
    alert('O texto foi alterado.')
}
const user = document.getElementById('user')
function emFoco(){
    
    user.style.border = '3px solid green'
    user.style.backgroundColor = 'grey'
}
function semFoco(){
    user.style.border = '1px solid black'
    user.style.backgroundColor = 'white'
}