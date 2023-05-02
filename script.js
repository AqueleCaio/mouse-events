var box = document.getElementById('box')

var box_msg_out = box.innerText = `Não coloca o mouse`
var box_msg_enter = `Tira o mouse de cima`
var box_msg_click = `PARA DE CLICAR`

box.addEventListener('mouseenter', enter)
box.addEventListener('mouseout', tirar)
box.addEventListener('click', clicar)

function enter(){
    box.innerText = `${box_msg_enter}`
}

function tirar(){
    box.innerText = `${box_msg_out}`
}

function clicar(){
    box.innerText = `${box_msg_click}`
}
