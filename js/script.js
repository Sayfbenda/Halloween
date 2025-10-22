var root = document.querySelector(":root")
var rootstyle = getComputedStyle(root)
rootstyle.getPropertyPriority("--body-color")

function darkMode() {
    root.style.setProperty("--body-color", "linear-gradient(to right, #111111, #141414, #171717, #191919, #1c1c1c)")
    root.style.setProperty("--text-color:", "#f5f5f7")
    root.style.setProperty("--container-color", "linear-gradient(to right, #202020, #1d1d1d, #1b1b1b, #181818, #161616, #161616, #161616, #161616, #181818, #1b1b1b, #1d1d1d, #202020)")
}

darkMode()