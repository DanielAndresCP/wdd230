const inputEl = document.querySelector("#favchap")
const buttonEl = document.querySelector("button")
const listEl = document.querySelector("#list")



buttonEl.addEventListener("click", () => {
    if (inputEl.value.trim() === "") {
        alert("Please provide a Book and Chapter to add")
        inputEl.focus()
        return
    }

    const inputValue = inputEl.value.trim()

    const li = document.createElement("li")
    const delBtn = document.createElement("button")

    li.textContent = inputValue
    delBtn.textContent = "❌"


    li.appendChild(delBtn)
    listEl.appendChild(li)

    delBtn.addEventListener("click", (e) => {
        e.target.closest("li").remove();
        inputEl.focus()
    })

    inputEl.focus()
    inputEl.value = ""
})