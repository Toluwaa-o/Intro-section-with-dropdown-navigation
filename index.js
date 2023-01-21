let menuButton = document.getElementById("menu")
let closeButton = document.getElementById("close")
let arrowUp1 = document.getElementById("arrow-up1")
let arrowDown1 = document.getElementById("arr-down1")
let arrowUp2 = document.getElementById("arrow-up2")
let arrowDown2 = document.getElementById("arr-down2")
let navBar = document.getElementById("nav-bar")
let dropdown1 = document.getElementById("top-nav")
let dropdown2 = document.getElementById("btm-nav")

menuButton.addEventListener("click", function(){
    navBar.style.display = "flex"
})

closeButton.addEventListener("click", function(){
    navBar.style.display = "none"
})

arrowDown1.addEventListener("click", function(){
    dropdown1.style.display = "block"
    arrowDown1.style.display = "none"
    arrowUp1.style.display = "flex"
})

arrowDown2.addEventListener("click", function(){
    dropdown2.style.display = "block"
    arrowDown2.style.display = "none"
    arrowUp2.style.display = "flex"
})

arrowUp1.addEventListener("click", function(){
    dropdown1.style.display = "none"
    arrowUp1.style.display = "none"
    arrowDown1.style.display = "flex"
})

arrowUp2.addEventListener("click", function(){
    dropdown2.style.display = "none"
    arrowUp2.style.display = "none"
    arrowDown2.style.display = "flex"
})