let items = document.querySelectorAll('.card')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let items2 = document.querySelectorAll('.formacao-card')
let next2 = document.getElementById('next2')
let prev2 = document.getElementById('prev2')



let count = items.length
let active = 0


let count2 = items2.length
let active2 = 0

next.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active >= count - 1 ? 0 : active + 1
    items[active].classList.add('active')

}

prev.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active <= 0 ? count - 1 : active - 1
    items[active].classList.add('active')
}



next2.onclick = () => {
    let activeOld = document.querySelector('.active2')
    activeOld.classList.remove('active2')

    active2 = active2 >= count2 - 1 ? 0 : active2 + 1
    items2[active2].classList.add('active2')

}

prev2.onclick = () => {
    let activeOld = document.querySelector('.active2')
    activeOld.classList.remove('active2')

    active2 = active2 <= 0 ? count2 - 1 : active2 - 1
    items2[active2].classList.add('active2')
}

function enviar(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5518991722552'

    const texto = `Olá! Me Chamo ${nome}, ${mensagem}`
    const msgFomatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgFomatada}`

    window.open(url, '_blank')
}

