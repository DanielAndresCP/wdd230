/* 
<div id="top-banner">
    Join us at the Chamber of Commerce building for Meet and Greet this wednesday at 7:00 p.m.
    <span id="top-banner-close-btn">❌</span>
</div> 
*/

function main() {
    // const today = 3
    const today = new Date().getDay()

    if (today === 1 || today === 2 || today === 3) {
        const container = document.querySelector("#top-message-container")
        const topBannerEl = document.createElement("div")
        topBannerEl.id = "top-banner"

        const messageEl = document.createElement("span")
        messageEl.textContent = "Join us at the Chamber of Commerce building for Meet and Greet this wednesday at 7:00 p.m."
        topBannerEl.appendChild(messageEl)

        const closeBtn = document.createElement("button")
        closeBtn.id = "top-banner-close-btn"
        closeBtn.textContent = "❌"
        closeBtn.addEventListener("click", (e) => {
            e.target.closest("#top-banner").remove()
        })
        topBannerEl.appendChild(closeBtn)

        container.appendChild(topBannerEl)
    }
}

// document.querySelector("#top-banner-close-btn").addEventListener("click", (e) => {
//     e.target.closest("#top-banner").remove()
// })

main()