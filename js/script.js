var root = document.querySelector(":root")
const support = document.getElementById("support")
const signUp = document.getElementById("signup")
const messageButton =  document.getElementById("messagebutton")
const inputMessage = document.getElementById("inputMessage")
const supportDiv = document.getElementById("supportDiv")
const navList = document.getElementsByClassName("dynamic-li")
let supportVisible = false
let signUpVisible = false

const caramels = new Object()
caramels.nom = "Caramels"
caramels.prix = 11.99
caramels.image = "../img/bonbon1.png"


function darkMode() {
    root.style.setProperty("--body-color", "linear-gradient(to right, #111111, #141414, #171717, #191919, #1c1c1c)")
    root.style.setProperty("--text-color:", "black")
    root.style.setProperty("--container-color", "linear-gradient(to right, #202020, #1d1d1d, #1b1b1b, #181818, #161616, #161616, #161616, #161616, #181818, #1b1b1b, #1d1d1d, #202020)")
}

function normalMode() {
    root.style.setProperty("--body-color", "linear-gradient(90deg, hsl(104, 28%, 40%), hsl(58, 28%, 40%) 100%)")
    root.style.setProperty("--text-color:", "#f5f5f7")
    root.style.setProperty("--container-color", "linear-gradient(136deg, hsl(104, 28%, 35%) 0%, hsl(58, 28%, 35%) 100%)")
}

function toggleSupport(){
    if(supportVisible){
        support.style.visibility = "hidden"
        supportVisible = false
    } else {
        support.style.visibility = "visible"
        supportVisible = true
    }
}

function toogleSignUp(){
    if(signUpVisible){
        signUp.style.visibility = "hidden"
        signUpVisible = false
    } else {
        signUp.style.visibility = "visible"
        signUpVisible = true
    }
}

addEventListener("keydown", function(event){
    if(event.key === "Enter" && inputMessage === document.activeElement){
        envoyerMessage(inputMessage.value)
        setTimeout(() => {
            envoyerMessageReponse()
        }, 1000);
    }
})

messageButton.addEventListener("click", function(){
    envoyerMessage(inputMessage.value)
    setTimeout(() => {
        envoyerMessageReponse()
    }, 1000);
})

function envoyerMessage(message) {
    supportDiv.innerHTML += `<p class="user-message">${message}</p>`
}

function envoyerMessageReponse() {
    supportDiv.innerHTML += `<p class="support-reply">Votre Message a été transmi à notre support technique, une vous répondera le plus vite possible</p>`
}

const entringSection = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting && entry.target.id === "accueil"){
            borderBottomList(0)
        }else if(entry.isIntersecting && entry.target.id === "apropos"){
            borderBottomList(1)
        }
        else if(entry.isIntersecting && entry.target.id === "bonbons"){
            borderBottomList(2)
        }else if(entry.isIntersecting && entry.target.id === "nouveautes"){
            borderBottomList(3)
        }
})
})

function borderBottomList(element) {
    for (let index = 0; index < navList[1].children.length; index++) {
        navList[1].children[index].style.setProperty("border-bottom", "none")        
    }
    navList[1].children[element].style.setProperty("border-bottom", "2px solid white")
    for (let index = 0; index < navList[0].children.length; index++) {
        navList[0].children[index].style.setProperty("border-bottom", "none")        
    }
    navList[0].children[element].style.setProperty("border-bottom", "2px solid white")
}

const animatedSections = document.querySelectorAll('.animation');
animatedSections.forEach(section => {
    entringSection.observe(section)
});