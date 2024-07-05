function validatePasswords() {
    const pass1 = document.querySelector("#password")
    const pass2 = document.querySelector("#passwordRepeat")

    if (pass1.value !== pass2.value) {
        alert("The passwords don't match, please try again")
        pass1.value = ""
        pass2.value = ""

        pass1.focus()
    }
}

function displayPageRating() {
    document.querySelector("#pageRatingValueDisplay").textContent = document.querySelector("#pageRating").value.toString()
}

document.querySelector("#passwordRepeat").addEventListener("blur", validatePasswords)
document.querySelector("#pageRating").addEventListener("input", displayPageRating)