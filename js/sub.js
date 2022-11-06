let arrImg = []
let arrName = []
let n = 1

const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const score = document.querySelector('.num')
const hide = document.querySelector('.container')
const res = document.querySelector('.result')

const gameImg = document.querySelector('.game__img')
const gameAnimals = document.querySelector('.game__animals')


const imgAnimals = [
    {name: 'crab', src: './img/crab.png'},
    {name: 'lion', src: './img/lion.png'},
    {name: 'dog', src: './img/dog.png'},
    {name: 'frog', src: './img/frog.png'},
    {name: 'monkey', src: './img/monkey.png'},
    {name: 'parrot', src: './img/parrot.png'},
    {name: 'shark', src: './img/shark.png'},
    {name: 'zebra', src: './img/zebra.png'},
    {name: 'tiger', src: './img/tiger.png'},
    {name: 'mouse', src: './img/mouse.png'},
    {name: 'jelly', src: './img/jelly.png'},
    {name: 'cat', src: './img/cat.png'},
]
const nameAnimals = [
    {name: 'crab', text: 'crab'},
    {name: 'lion', text: 'lion'},
    {name: 'dog', text: 'dog'},
    {name: 'frog', text: 'frog'},
    {name: 'monkey', text: 'monkey'},
    {name: 'parrot', text: 'parrot'},
    {name: 'shark', text: 'shark'},
    {name: 'zebra', text: 'zebra'},
    {name: 'tiger', text: 'tiger'},
    {name: 'mouse', text: 'mouse'},
    {name: 'jelly', text: 'jelly'},
    {name: 'cat', text: 'cat'},
]


function newCard() {
    if ((!gameImg.hasChildNodes()) && (!gameAnimals.hasChildNodes())){
        for (let i = 0; i < 3; i++){

            let randomForImg = Math.floor(Math.random() * imgAnimals.length)
            let randomForName = Math.floor(Math.random() * nameAnimals.length)

            let newImg = document.createElement('img')
            newImg.src = imgAnimals[randomForImg].src
            newImg.classList.add('item__img')
            newImg.dataset.target = imgAnimals[randomForImg].name

            let newDiv = document.createElement('div')
            newDiv.classList.add('animal__name')
            newDiv.innerText = nameAnimals[randomForName].text
            newDiv.dataset.target = nameAnimals[randomForName].name

            gameImg.appendChild(newImg)
            gameAnimals.appendChild(newDiv)

            imgAnimals.splice(randomForImg, 1)
            nameAnimals.splice(randomForName, 1)

            arrImg.push(imgAnimals[randomForImg])
            arrName.push(nameAnimals[randomForName])
        }
    }else reload()
    let newArr = Array.from(gameImg.children).concat(Array.from(gameAnimals.children))
    newArr.forEach(el => {
        el.addEventListener('click', target)
    })  
    
}

function reload() {
    if ((gameImg.hasChildNodes()) && (gameAnimals.hasChildNodes())){
        while((gameImg.firstChild) && (gameAnimals.firstChild)){
            gameImg.removeChild(gameImg.firstChild)
            gameAnimals.removeChild(gameAnimals.firstChild)
        }
        arrImg = []
        arrName = []
    } 
    newCard()   
    // checkForMatch()
}



function finish() {
        hide.style.display = 'none'
        if(score.textContent <= 3) {
            res.innerHTML = 'Вы кот'
        }else if(score.textContent <= 6){
            res.innerHTML = 'Вы папугай'
        }else if(score.textContent <= 9) {
            res.innerHTML = 'Вы Лев'
        }else {
            res.innerHTML = 'Вы акула'
        }

}

let has = false
let firstCard,secondCard

function target(e) {
    const newTarget = e.target
    newTarget.classList.add('border')
    if(newTarget === firstCard) return
    if(!has){
        has = true
        firstCard = newTarget
    }else {
        has = false
        secondCard = newTarget
        checkForMatch()
    }
    
}
function checkForMatch() {
    if(firstCard.dataset.target === secondCard.dataset.target){
        score.innerHTML = n++
    }
 }




btn1.addEventListener('click', reload)
btn2.addEventListener('click', finish)
window.addEventListener('load', newCard)


