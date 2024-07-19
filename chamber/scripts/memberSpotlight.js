const memberURL = "https://danielandrescp.github.io/wdd230/chamber/data/members.json"
const imageFolderURL = "https://danielandrescp.github.io/wdd230/chamber/images"
const SPOLIGHT_SPACES = 2

function getRandomItems(originalArray, amount) {
    // This just in case i run into problems with shallow copies
    let copyArray = JSON.parse(JSON.stringify(originalArray))
    const selectedItems = []

    if (amount < originalArray.length) {
        for (let i = 0; i < amount; i++) {
            const randomNum = Math.round(Math.random() * (copyArray.length - 1))
            selectedItems.push(copyArray[randomNum])
            copyArray = copyArray.filter((x, i) => i !== randomNum)
        }

        return selectedItems
    } else {
        return originalArray
    }
}

async function getMembers(url) {
    const response = await fetch(url)

    if (response.ok) {
        const data = await response.json()

        const silverOrGoldMembers = data.filter((x) => x.membershipLevel === "Silver" || x.membershipLevel === "Gold")
        // console.log("silverOrGoldMembers", silverOrGoldMembers);

        const randomMembers = getRandomItems(silverOrGoldMembers, SPOLIGHT_SPACES)

        // console.log("randomMembers", randomMembers);
        displayMemberSpotlight(randomMembers)
    }
}

function displayMemberSpotlight(data) {
    // console.log(data);
    const container = document.querySelector(".business-spotlight")
    // console.log(data[0]);

    for (const [i, member] of data.entries()) {
        const cardEl = document.createElement("div")
        cardEl.classList.add("business-card")

        if (i % 2 === 0) {
            cardEl.classList.add("reverse")
        }

        const imgContainerEl = document.createElement("div")
        imgContainerEl.classList.add("business-card-img")

        const imgEl = document.createElement("img")
        const source = `${imageFolderURL}/${member.iconURL}`
        imgEl.src = source
        imgEl.alt = `${member.name} logo`
        imgContainerEl.appendChild(imgEl)

        const textContainerEl = document.createElement("div")
        textContainerEl.classList.add("business-card-text")

        const h3El = document.createElement("h3")
        h3El.textContent = member.name
        textContainerEl.appendChild(h3El)

        const pAddressEl = document.createElement("p")
        pAddressEl.textContent = `${member.city}, ${member.address}`
        textContainerEl.appendChild(pAddressEl)
        
        const pPhoneEl = document.createElement("p")
        pPhoneEl.textContent = member.phone
        textContainerEl.appendChild(pPhoneEl)
        
        const aWebsiteEl = document.createElement("a")
        aWebsiteEl.href = `https://${member.website}`
        aWebsiteEl.textContent = member.website
        aWebsiteEl.target = "_blank"
        textContainerEl.appendChild(aWebsiteEl)

        cardEl.appendChild(imgContainerEl)
        cardEl.appendChild(textContainerEl)
        container.appendChild(cardEl)
    }
    // console.log(data);
}


getMembers(memberURL)