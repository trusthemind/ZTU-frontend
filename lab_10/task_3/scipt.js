class Shape {
    static total = 100;
    constructor(a) {
        this.a = a;
    }

    static fill() {
        Shape.total = 100;
    }

    draw() {
        let quad = document.createElement("div")
        quad.style.width = "30px"
        quad.style.height = "30px"
        quad.style.backgroundColor = 'red'
        quad.style.opacity = Shape.total + "%"
        Shape.total -= 10;
        return quad
    }
}

let drawBtn = document.querySelector("#draw")
let fillBtn = document.querySelector("#fill")
let container = document.querySelector(".container")

drawBtn.addEventListener("click", function () {
    let s = new Shape(100)
    container.appendChild(s.draw())
})
fillBtn.addEventListener("click", function () {
    Shape.fill()
})