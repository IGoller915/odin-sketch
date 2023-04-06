let sideLength = 16
let gridCount = sideLength**2

const body = document.querySelector('body')

const container = document.querySelector('.container')

body.appendChild(container)

function makeGrid() {
    for (let i = 0; i < sideLength; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < sideLength; j++) {
            let column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
    }
}

makeGrid()

function pixelOn(e){
    if (mode == "Black"){
        this.style.backgroundColor = 'black'
    }
    if (mode == "Erase"){
        this.style.backgroundColor = 'white'
    }
    if (mode == "Rainbow"){
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        let rgb = `rgb(${red},${green},${blue})` 
        this.style.backgroundColor = rgb
    }
    
}

const columns = document.querySelectorAll('.column')

function draw(){
    columns.forEach(column => column.addEventListener('mousemove',pixelOn))
}

function endDraw(){
    columns.forEach(column => column.removeEventListener('mousemove',pixelOn))
}

document.addEventListener('mousedown', draw)
document.addEventListener('mouseup', endDraw)

const buttons = document.querySelectorAll('.button')

function selectMode(){
    buttons.forEach(button => button.classList.remove('selected'))
    this.classList.add('selected')
    mode = document.querySelector('.selected').textContent
    console.log(mode)
}

let mode = null


buttons.forEach(button => button.addEventListener('click', selectMode))