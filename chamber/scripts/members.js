const memberURL = "https://danielandrescp.github.io/wdd230/chamber/data/members.json"

async function getMembers(url) {
    const response = await fetch(url)

    if (response.ok) {
        const data = await response.json()
        console.log(data);
        // displayLinks(data)
    }
}

getMembers(memberURL)