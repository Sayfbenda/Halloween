const root = document.documentElement
const inpsupport = document.getElementById("inpsupport")
const support = document.getElementById("supportdiv")
const inpchat = document.getElementById("inpchat")
const supportChat = document.getElementById("supportChat")

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

function baisserSupportBox() {
    
}