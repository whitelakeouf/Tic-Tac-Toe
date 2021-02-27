let container = document.querySelector('.container')
let field = document.querySelector('.field')

let info = document.querySelector('.info')
let items = document.querySelectorAll('.item')
let move = document.querySelector('.move')
let score = document.querySelector('.score')
let restart = document.querySelector('.restart')
let textResult = document.querySelector('.textResult')
let resultBlock = document.querySelector('.result')

let current = 'X'
let result = ''

for (let item of items) {
    item.addEventListener('click', function () {
        if (!item.innerHTML) {
            this.innerHTML = current
            toogleCurrent()
            toogleMove()
            checkWin()
        }
    })
}

function toogleCurrent() {
    if (current == 'X') {
        current = 'O'
    } else {
        current = 'X'
    }
}

function toogleMove() {
    if (move.innerHTML == 'X') {
        move.innerHTML = 'O'
    } else {
        move.innerHTML = 'X'
    }
}

function allItemsFill() {
    for (let item of items) {
        if (item.innerHTML == '') {

        }
    }
}

function prepareResult(result) {
    textResult.innerHTML = result
    resultBlock.style.display = 'flex'
}

function closeResult() {
    resultBlock.style.display = 'none'
}

function colorRow(item1, item2, item3) {
    item1.style.backgroundColor = '#f5cd79'
    item2.style.backgroundColor = '#f5cd79'
    item3.style.backgroundColor = '#f5cd79'
}

function removeColorRow(item1, item2, item3) {
    item1.style.backgroundColor = '#f8a5c2'
    item2.style.backgroundColor = '#f8a5c2'
    item3.style.backgroundColor = '#f8a5c2'
}

function allClear() {
    for (let item of items) {
        item.innerHTML = ''
        move.innerHTML = 'X'
        current = 'X'
    }
}

restart.addEventListener('click', function () {
    allClear()
    move.innerHTML = 'X'
})

function checkWin() {
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    for (let i = 0; i < arr.length; i++) {
        if (items[arr[i][0]].innerHTML == 'X' && items[arr[i][1]].innerHTML == 'X' && items[arr[i][2]].innerHTML == 'X') {
            result = 'X win'
            score.innerHTML = `${Number(score.innerHTML.slice(0, 1)) + 1} : ${score.innerHTML.slice(-1)}`

            setTimeout(() => colorRow(items[arr[i][0]], items[arr[i][1]], items[arr[i][2]]), 100)
            setTimeout(() => removeColorRow(items[arr[i][0]], items[arr[i][1]], items[arr[i][2]]), 4000)
            setTimeout(() => prepareResult(result), 1000)
            setTimeout(() => allClear(), 4000)
            setTimeout(() => closeResult(), 4000)
        } else if (items[arr[i][0]].innerHTML == 'O' && items[arr[i][1]].innerHTML == 'O' && items[arr[i][2]].innerHTML == 'O') {
            result = 'O win'
            score.innerHTML = `${score.innerHTML.slice(0, 1)} : ${Number(score.innerHTML.slice(-1)) + 1}`

            setTimeout(() => colorRow(items[arr[i][0]], items[arr[i][1]], items[arr[i][2]]), 100)
            setTimeout(() => removeColorRow(items[arr[i][0]], items[arr[i][1]], items[arr[i][2]]), 4000)
            setTimeout(() => prepareResult(result), 1000)
            setTimeout(() => allClear(), 4000)
            setTimeout(() => closeResult(), 4000)
        }
    }
}

// container.addEventListener("mousemove", (e) => {
//     let xAxis = (window.innerWidth / 2 - e.pageX) / 25
//     let yAxis = (window.innerHeight / 2 - e.pageY) / 25
//     field.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
// })

//Animate In
container.addEventListener("mouseenter", (e) => {
    field.style.transition = "none"
    //Popout
    info.style.transform = "translateZ(25px)"
    resultBlock.style.transform = "translateZ(50px)";
    for (let item of items) {
        item.style.transform = "translateZ(25px)"
    }
})
//Animate Out
container.addEventListener("mouseleave", (e) => {
    field.style.transition = "all 0.5s ease"
    field.style.transform = `rotateY(0deg) rotateX(0deg)`
    //Popback
    info.style.transform = "translateZ(0px)"
    resultBlock.style.transform = "translateZ(0px)";
    for (let item of items) {
        item.style.transform = "translateZ(0px)"
    }
})