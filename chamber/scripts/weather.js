const weatherIcon = document.querySelector("#weather-icon")
const weatherLocation = document.querySelector("#weather-location")
const weatherDesc = document.querySelector("#weather-description")
const weatherTemp = document.querySelector("#weather-temperature")

const lat = "-36.62"
const lon = "-72.13"
const units = "metric"
const appId = "9793a1a87751ab17d8b82cdd4a87b2ad"

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${appId}`
const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${appId}`

function timestampToDate(unixTimestamp) {
    return new Date(unixTimestamp * 1000)
}

async function apiFetch(url) {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json()
            // console.log(data)
            // displayResults(data)
            return data
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

    weatherLocation.textContent = data.name
}

function summarizeForecastData(forecastData) {
    const today = new Date().getDate()
    const summaryData = []

    for (const hour of forecastData.list) {
        const dateObj = timestampToDate(hour.dt)
        const hourDay = dateObj.getDate()

        if (hourDay !== today) {
            const dayExists = summaryData.some((x) => x.day === hourDay)
            if (!dayExists && summaryData.length < 3) {
                summaryData.push({
                    day: hourDay,
                    tempAvg: null,
                    tempMin: null,
                    tempMax: null,
                    icon: null,
                    timestamp: hour.dt
                })
            }
        }
    }

    for (const day of summaryData) {
        const filteredData = forecastData.list.filter((x) => timestampToDate(x.dt).getDate() === day.day)
        // console.log(filteredData);

        const tempAvg = filteredData.map((x) => x.main.temp).reduce((acc, x) => acc + x) / filteredData.length
        const tempMin = Math.min(...filteredData.map((x) => x.main.temp_min))
        const tempMax = Math.max(...filteredData.map((x) => x.main.temp_max))

        day.tempAvg = tempAvg
        day.tempMin = tempMin
        day.tempMax = tempMax
        day.icon = filteredData[4].weather[0].icon
    }
    return summaryData
}

function displayForecastResults(summaryData) {
    // console.log(summaryData[0]);
    const container = document.querySelector("#forecast-weather-grid")

    for (const day of summaryData) {
        const dayEl = document.createElement("div")
        dayEl.classList.add("single-day-weather-forecast")

        const iconsrc = `https://openweathermap.org/img/w/${day.icon}.png`;
        const dateString = timestampToDate(day.timestamp).toLocaleDateString(undefined, {
            dateStyle: "medium"
        })


        const iconEl = document.createElement("img")
        iconEl.src = iconsrc
        iconEl.alt = `Weather icon for ${dateString}`

        const dateEl = document.createElement("p")
        dateEl.textContent = `${dateString}`

        const maxTempEl = document.createElement("p")
        maxTempEl.textContent = `Max Temp.: ${Math.round(day.tempMax)} °C`

        const minTempEl = document.createElement("p")
        minTempEl.textContent = `Min Temp.: ${Math.round(day.tempMin)} °C`

        dayEl.appendChild(iconEl)
        dayEl.appendChild(dateEl)
        dayEl.appendChild(maxTempEl)
        dayEl.appendChild(minTempEl)
        container.appendChild(dayEl)
    }
}

async function main() {
    const currentData = await apiFetch(currentWeatherUrl)
    displayCurrentResults(currentData)


    const forecastData = await apiFetch(forecastWeatherUrl)
    const summaryData = summarizeForecastData(forecastData)
    displayForecastResults(summaryData)
}

main()