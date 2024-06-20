const mobileMenuBtn = document.querySelector("#mobile-ham-menu-button")
const colorModeToggle = document.querySelector("#color-mode-toggle")

const mobileOpenClass = "mobile-open"
const darkModeClass = "dark-mode"

mobileMenuBtn.addEventListener("click", (e) => {
    const parentNav = e.target.closest("nav")

    parentNav.classList.toggle(mobileOpenClass)
})


colorModeToggle.addEventListener("click", () => {
    document.querySelector("body").classList.toggle(darkModeClass)
})