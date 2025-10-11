let section = ""
let prochainesection = ""
let actuellesection = 1
let transitionout = 0
let transitionin = 0

let listesection = ["acceuil", "apropos", "bonbons", "nouveautes"]


function sectionactuelle() {
    console.log(section)
    if (actuellesection <= 0){
        actuellesection = 1
    }else if (actuellesection == 1){
        transitionout = 100
        transitionin = -100
        section = document.getElementById(listesection[0])
        prochainesection = document.getElementById(listesection[1])
        console.log(section)
    }else if (actuellesection == 2){
        transitionin = -200
        section = document.getElementById(listesection[1])
        prochainesection = document.getElementById(listesection[2])
    }
    else if (actuellesection == 3){
        transitionin = -300
        section = document.getElementById(listesection[2])
        prochainesection = document.getElementById(listesection[3])
    }
    else if (actuellesection == 4){
        section = document.getElementById(listesection[3])
        prochainesection = document.getElementById(listesection[4])
    }else if (actuellesection >= 4){
        actuellesection = 4
    }
}

addEventListener('wheel', (event)=> {
    sectionactuelle()
    if (event.deltaY > 0) {
        section.setAttribute("style", `translate : ${-transitionout+"vw"}`)
        prochainesection.setAttribute("style", `translate : ${transitionin+"vw"}`)
        actuellesection +=1
        console.log(actuellesection)
        transitionout += 100
    }
    else{
        section.setAttribute("class", "sectionentrante")
        actuellesection -= 1
    }
    console.log(event)
})