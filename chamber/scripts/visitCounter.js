const visitCounterEl = document.querySelector("#visit-counter")

const lastVisit = localStorage.getItem("lastVisit") || null


function displayVisitMessage(lastVisit) {
    if (lastVisit === null) {
        visitCounterEl.textContent = "Welcome! Let us know if you have any questions."
        return

    }

    let text = ""
    const days = Math.round((Number(new Date() - lastVisit)) / 1000 / 60 / 60 / 24)

    console.log(days);
    if (days < 1) {
        text = "Back so soon! Awesome!"
    } else {
        text = `You last visited ${days} day${days === 1 ? "" : "s"} ago.`
    }
    visitCounterEl.textContent = text
    console.log(text);
}

function updateLastVisit() {
    localStorage.setItem("lastVisit", Number(new Date()))
}

displayVisitMessage(lastVisit)
updateLastVisit()