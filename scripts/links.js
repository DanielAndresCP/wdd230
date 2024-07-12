const baseURL = "https://danielandrescp.github.io/wdd230/"
const linksURL = "https://danielandrescp.github.io/wdd230/data/links.json"



function displayLinks(weeks) {
    const container = document.querySelector("#week-activities-container")
    const weekArray = weeks.weeks

    // console.log(weekArray);

    const ulElement = document.createElement("ul")

    for (const w of weekArray) {
        const liElement = document.createElement("li")
        liElement.textContent += `${w.week}: `

        for (const [i, reference] of w.links.entries()) {
            const aElement = document.createElement("a")
            aElement.href = reference.url
            aElement.textContent = reference.title
            liElement.appendChild(aElement)

            if (i < (w.links.length - 1)) {
                const spacer = document.createElement("span")
                spacer.textContent = " | "
                liElement.appendChild(spacer)
            }

        }
        ulElement.appendChild(liElement)
    }

    container.appendChild(ulElement)
}

async function getLinks(url) {
    const response = await fetch(url)

    if (response.ok) {
        const data = await response.json()
        // console.log(data);
        displayLinks(data)
    }
}




getLinks(linksURL)