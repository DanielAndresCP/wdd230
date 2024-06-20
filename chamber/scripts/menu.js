const mobileHamBtn = document.querySelector("#mobile-hamburger-menu")

const openMobileMenuClass = "open-mobile-menu"


mobileHamBtn.addEventListener("click", (e) => {
    const navEl = e.target.closest("nav")

    navEl.classList.toggle(openMobileMenuClass)
})