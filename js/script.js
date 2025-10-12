const root = document.documentElement
const inpsupport = document.getElementById("inpsupport")
const support = document.getElementById("supportdiv")
const inpchat = document.getElementById("inpchat")
const supportChat = document.getElementById("supportChat")
const signupsection = document.getElementById("signup")
const pub = document.getElementById("pub")
const navlist = document.getElementById("navlist")
let ilist = 0
let t = ""

function normalMode() {
    root.style.setProperty("--body-color", "linear-gradient(90deg, hsl(104, 28%, 40%), hsl(58, 28%, 40%) 100%)")
    root.style.setProperty("--container-color", "linear-gradient(136deg, hsl(104, 28%, 35%) 0%, hsl(58, 28%, 35%) 100%)")
    root.style.setProperty("--text-color", "#f5f5f7")
    root.style.setProperty("--title-color", "#f5f5f7")
    root.style.setProperty("--paragraphe-color", "#d3d2ce")
    inpsupport.style.setProperty("border", "0.2rem solid #f5f5f7")

}

function fondNoir() {
    root.style.setProperty("--body-color", "#181818")
    root.style.setProperty("--container-color", "linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(28, 28, 28, 1) 50%, rgba(15, 15, 15, 1) 100%)")
    root.style.setProperty("--text-color", "#f5f5f7")
    root.style.setProperty("--title-color", "#f5f5f7")
    root.style.setProperty("--paragraphe-color", "#6e6e73")
    inpsupport.style.setProperty("border", "0.2rem solid #f5f5f7")
}

function fondBlanc() {
    root.style.setProperty("--body-color", "#f5f5f7")
    root.style.setProperty("--container-color", "linear-gradient(115deg, #ffffff, #d4d4d4)")
    root.style.setProperty("--text-color", "#1d1d1f")
    root.style.setProperty("--title-color", "#1d1d1f")
    root.style.setProperty("--paragraphe-color", "#6e6e73")
    inpsupport.style.setProperty("border", "0.2rem solid #1d1d1f")
}

function fermerSupport() {
    support.setAttribute("style", "visibility : hidden")
}

function apparaitreSupport() {
    support.setAttribute("style", "visibility : visible")
}

function envoyerMessage() {
    let htmlsupport = `
    <div class="supportmessage"><p>Votre message a été transmi ! un 
    de nos technicien entrera en contact avec vous bientôt.</p></di>
    `
    let html = `
    <div class="usermessage"><p>${inpchat.value}</p></div>
    `
    supportChat.insertAdjacentHTML("beforeend", html)
    setTimeout(() => {
        supportChat.insertAdjacentHTML("beforeend", htmlsupport)
    }, 2000);
}

function signUp() {
    signupsection.setAttribute("style", "visibility : visible")
}

function fermerSignup() {
    signupsection.setAttribute("style", "visibility : hidden")
}

function fermerPub() {
    pub.setAttribute("style", "visibility : hidden")
    clearInterval(t)
    gestionPub()
}

function gestionPub() {
    t = setInterval(() => {
        pub.setAttribute("style", "visibility: visible")
    }, 50000);
}

const sectionentrante = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting) {
            console.log(entry.target.id)
            if (entry.target.id == "acceuil") {
                ilist = 0
                navbarIndication(ilist)
            }
            else if (entry.target.id == "apropos") {
                ilist = 1
                navbarIndication(ilist)
            }
            else if (entry.target.id == "bonbons") {
                ilist = 2
                navbarIndication(ilist)
            }
            else if (entry.target.id == "nouveautes") {
                ilist = 3
                navbarIndication(ilist)
            }
            entry.target.classList.add("entre")
        }else{
            entry.target.classList.remove("entre")
        }
    })
})
const sections = document.querySelectorAll(".animation")
sections.forEach((el) => sectionentrante.observe(el))

function navbarIndication(ilist) {
    navlist.children[ilist].setAttribute("style", "border-bottom : 1px solid black")
}
