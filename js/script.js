var root = document.querySelector(":root")
var rootstyle = getComputedStyle(root)
const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")
const h3 = document.querySelector("h3")
rootstyle.getPropertyPriority("--body-color")

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

function whiteMode() {
    root.style.setProperty("--body-color", "linear-gradient(to right, #ffffff, #f9f9f9, #f3f3f3, #eeeeee, #e8e8e8, #e6e6e6, #e4e4e4, #e2e2e2, #e4e4e4, #e5e6e5, #e7e7e7, #e9e9e9)")
    h2.style.setProperty("color", "#1d1d1d")
    h3.style.setProperty("color", "#1d1d1d")
    root.style.setProperty("--container-color", "linear-gradient(to right, #e0e0e0, #e6e6e6, #ebebeb, #f1f1f1, #f7f7f7, #f7f7f7, #f7f7f7, #f7f7f7, #f1f1f1, #ebebeb, #e6e6e6, #e0e0e0)")
}