let sideLength = 16
let gridCount = sideLength**2

const body = document.querySelector('body')

function makeGrid() {
    let container = document.createElement('div')
    container.classList.add('container')
    body.appendChild(container)

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
    document.addEventListener('mousedown', draw)
    document.addEventListener('mouseup', endDraw)
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



function draw(){
    const columns = document.querySelectorAll('.column')
    columns.forEach(column => column.addEventListener('mousemove',pixelOn))
}

function endDraw(){
    const columns = document.querySelectorAll('.column')
    columns.forEach(column => column.removeEventListener('mousemove',pixelOn))
}



const buttons = document.querySelectorAll('.button')

function selectMode(){
    buttons.forEach(button => button.classList.remove('selected'))
    this.classList.add('selected')
    mode = document.querySelector('.selected').textContent
    console.log(mode)
}

let mode = null

function resizeGrid(){
    sideLength = document.getElementById('side-length').value
    if (sideLength<1) sideLength = 1
    if (sideLength>100) sideLength = 100
    const container = document.querySelector('.container')
    body.removeChild(container)
    makeGrid()
}

buttons.forEach(button => button.addEventListener('click', selectMode))

