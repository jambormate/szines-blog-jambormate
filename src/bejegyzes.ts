export class Bejegyzes {
    title: string
    content: string
    color: string
    constructor(title: string, content: string, color: string) {
        if (title.trim() == "" || content.trim() == "") {
            throw new Error("A mező nem lehet üres!")
        }
        if (color.length != 7 || color.charAt(0) != "#") {
            throw new Error("A szín helytelenül lett megadva")
        }
        this.title = title
        this.content = content
        this.color = color
    }
}

