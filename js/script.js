var nav = document.querySelector("nav")

nav.addEventListener('mouseover', handleMouseover)
nav.addEventListener('mouseout', handleMouseout)

function handleMouseover(){
    document.querySelector("nav").classList.remove("navbar-dark")
    document.querySelector("nav").classList.add("navbar-light")
    document.querySelector("nav").classList.add("bg-light")
}

function handleMouseout(){
    document.querySelector("nav").classList.add("navbar-dark")
    document.querySelector("nav").classList.remove("navbar-light")
    document.querySelector("nav").classList.remove("bg-light")
}

