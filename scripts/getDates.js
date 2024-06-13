function getCurrentYear() {
    return new Date().getFullYear()
}

function setTextContent(elementQuerySelector, text) {
    document.querySelector(elementQuerySelector).textContent = text
}

setTextContent("#copy-year", getCurrentYear().toString())

setTextContent("#lastModified", document.lastModified)