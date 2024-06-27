const pageVisitCountEl = document.querySelector("#page-visit-count")

const pageVisits = Number(localStorage.getItem("page-visit-count")) || 0

if (pageVisits <= 0) {
    pageVisitCountEl.textContent = "This is your first visit!"
} else {
    pageVisitCountEl.textContent = `${pageVisits} visits`
}

localStorage.setItem("page-visit-count", pageVisits + 1)