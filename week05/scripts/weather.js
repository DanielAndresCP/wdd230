// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.61&units=imperial&appid=9793a1a87751ab17d8b82cdd4a87b2ad"


async function apiFetch(url) {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            displayResults(data)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

apiFetch(url)