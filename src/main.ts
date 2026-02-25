import { Bejegyzes } from "./bejegyzes"

const bejegyzesek: Bejegyzes[] = [
    new Bejegyzes("Tesztike 1", "Valami filler szöveg.", "#ff66b2"),
    new Bejegyzes("Tesztike 2", "Töltelék...", "#1f51ff")
]
const form = document.getElementById("szinesForm") as HTMLFormElement
const mainElem = document.getElementById("blog") as HTMLElement
const titleInput = document.getElementById("title") as HTMLInputElement
const contentInput = document.getElementById("content") as HTMLTextAreaElement
const colorInput = document.getElementById("color") as HTMLInputElement

function megjelenit(){
    mainElem.innerHTML = ""
    for (const bejegyzes of bejegyzesek) {
        const article = document.createElement("article")
        article.style.color = bejegyzes.color
        const h2 = document.createElement("h2")
        h2.textContent = bejegyzes.title
        const p = document.createElement("p")
        p.textContent = bejegyzes.content
        article.appendChild(h2)
        article.appendChild(p)
        mainElem.appendChild(article)
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault()
    try {
        const ujBejegyzes = new Bejegyzes(
            titleInput.value,
            contentInput.value,
            colorInput.value
        )
        bejegyzesek.push(ujBejegyzes)
        megjelenit()
        form.reset()
    } catch (error) {
        alert((error as Error).message)
    }
})

megjelenit()