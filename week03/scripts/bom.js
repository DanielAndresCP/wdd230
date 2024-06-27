function displayList(item) {
    const li = document.createElement("li")
    const delBtn = document.createElement("button")

    li.textContent = item
    delBtn.textContent = "❌"


    li.appendChild(delBtn)
    listEl.appendChild(li)

    delBtn.addEventListener("click", (e) => {
        e.target.closest("li").remove();
        inputEl.focus()
        deleteChapter(item)
    })
}

function setChapterList() {
    window.localStorage.setItem("chaptersArray", JSON.stringify(chaptersArray))
}


function getChapterList() {
    return JSON.parse(window.localStorage.getItem("chaptersArray"))
}

function deleteChapter(item) {
    // No need to slice the item because it already comes clean
    chaptersArray = chaptersArray.filter((x) => x !== item)
    setChapterList()
}

const inputEl = document.querySelector("#favchap")
const buttonEl = document.querySelector("button")
const listEl = document.querySelector("#list")

let chaptersArray = getChapterList() || []

chaptersArray.forEach((chapter) => {
    displayList(chapter)
});

buttonEl.addEventListener("click", () => {
    if (inputEl.value.trim() === "") {
        alert("Please provide a Book and Chapter to add")
        inputEl.focus()
        return
    }

    const inputValue = inputEl.value.trim()
    displayList(inputValue)
    chaptersArray.push(inputValue)

    setChapterList()

    inputEl.value = ""
    inputEl.focus()
})