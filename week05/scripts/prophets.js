const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url) {
    const response = await fetch(url)
    const data = await response.json()
    displayProphets(data.prophets)
    // console.table(data.prophets)
}


const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement("section")
        const fullName = document.createElement("h2")
        const portrait = document.createElement("img")

        fullName.textContent = `${prophet.name} ${prophet.lastname}`

        // portrait.src = prophet.imageurl
        // portrait.alt = `${prophet.name} ${prophet.lastname} portrait`
        // portrait.loading = "lazy"

        portrait.setAttribute("src", prophet.imageurl)
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`)
        portrait.setAttribute("loading", "lazy")
        portrait.setAttribute("width", "340")
        portrait.setAttribute("height", "440")


        card.appendChild(fullName)
        card.appendChild(portrait)

        cards.appendChild(card)
    })
}

getProphetData(url)