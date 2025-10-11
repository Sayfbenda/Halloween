let div = ""
let page = 1
let transitionin = 0
let transitionout = 0

function pageactuelle(page) {
    if (page == 1){
        transitionin = 100
        transitionout = 0
    }
    if (page == 2){
        transitionin = 200
        transitionout = 0
    }
    if (page == 3){
        transitionin = 300
        transitionout = -100
    }
    if (page == 4){
        transitionin = 400
        transitionout = -200
    }
}

addEventListener('wheel', (event)=> {
    pageactuelle(page)
    if (event.deltaY > 0) {
        if (page < 4){
            div = document.getElementById("page")
            div.setAttribute("style", `translate : ${-transitionin}vw`)
            page += 1 
        }
    }else if(event.deltaY < 0){
            div.setAttribute("style", `translate : ${transitionout}vw`) 
            page -=1
    } 
})