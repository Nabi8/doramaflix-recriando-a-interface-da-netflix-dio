function toggleMenu() {
    const menu = document.querySelector(".menu")
    menu.classList.toggle("hidden")
}

function openDialog() {
    const dialog = document.querySelector(".dialog")
    const backdrop = document.querySelector(".backdrop")
    const body = document.querySelector("body")

    dialog.classList.remove("hidden")
    backdrop.classList.remove("hidden")
    body.classList.add("no-scroll")
}

function removeDialog() {
    const dialog = document.querySelector(".dialog")
    const backdrop = document.querySelector(".backdrop")
    const body = document.querySelector("body")

    dialog.classList.add("hidden")
    backdrop.classList.add("hidden")
    body.classList.remove("no-scroll")
}

