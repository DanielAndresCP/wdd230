const memberURL = "https://danielandrescp.github.io/wdd230/chamber/data/members.json"
const imageFolderURL = "https://danielandrescp.github.io/wdd230/chamber/images"
// {
//     "name": "Car Ñuble Ltda.",
//     "address": "Arauco # 949",
//     "phone": "+56 9 8765 4321",
//     "website": "WWW.empresascar.CL",
//     "iconURL": "logo-ferias-car.webp",
//     "membershipLevel": "silver",
//     "city": "Chillán"
// },
function displayMembers(members) {
    const container = document.querySelector("#directory-members")

    for (const member of members) {
        const section = document.createElement("section")

        const imgEl = document.createElement("img")
        const source = `${imageFolderURL}/${member.iconURL}`
        imgEl.src = source
        imgEl.alt = `${member.name} logo`


        const pNameEl = document.createElement("p")
        pNameEl.textContent = member.name
        pNameEl.classList.add("member-name")

        const pAddressEl = document.createElement("p")
        pAddressEl.textContent = member.address
        pAddressEl.classList.add("member-address")

        const pPhoneEl = document.createElement("p")
        pPhoneEl.textContent = member.phone
        pPhoneEl.classList.add("member-phone")

        const aWebsiteEl = document.createElement("a")
        aWebsiteEl.href = member.website
        aWebsiteEl.textContent = member.website
        aWebsiteEl.target = "_blank"
        aWebsiteEl.classList.add("member-website")

        const pLevelEl = document.createElement("p")
        pLevelEl.textContent = member.membershipLevel
        pLevelEl.classList.add("member-membership-level")


        const pCityEl = document.createElement("p")
        pCityEl.textContent = member.city
        pCityEl.classList.add("member-city")

        section.appendChild(imgEl)
        section.appendChild(pNameEl)
        section.appendChild(pAddressEl)
        section.appendChild(pPhoneEl)
        section.appendChild(aWebsiteEl)
        section.appendChild(pLevelEl)
        section.appendChild(pCityEl)

        container.appendChild(section)
    }
}


async function getMembers(url) {
    const response = await fetch(url)

    if (response.ok) {
        const data = await response.json()
        // console.log(data);
        displayMembers(data)
    }
}

getMembers(memberURL)


document.querySelector("#directory-grid-view").addEventListener("click", () => {
    const membersContainer = document.querySelector("#directory-members")
    membersContainer.classList.remove("list")
    membersContainer.classList.add("grid")
})

document.querySelector("#directory-list-view").addEventListener("click", () => {
    const membersContainer = document.querySelector("#directory-members")
    membersContainer.classList.remove("grid")
    membersContainer.classList.add("list")
})