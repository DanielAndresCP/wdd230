const weatherIcon = document.querySelector("#weather-icon")
const weatherDesc = document.querySelector("#weather-desc")
const weatherTemp = document.querySelector("#weather-temp")

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-36.62&lon=-72.13&units=metric&appid=9793a1a87751ab17d8b82cdd4a87b2ad"


async function apiFetch(url) {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            // console.log(data)
            displayCurrentResults(data)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.error(error);
    }
}

function displayCurrentResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].main;
    const temp = Math.round(data.main.temp)
    // console.log(temp)

    weatherIcon.src = iconsrc
    weatherIcon.alt = desc

    weatherDesc.textContent = desc

    weatherTemp.textContent = temp
}

apiFetch(url)