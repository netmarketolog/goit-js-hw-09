const refs = {
    body: document.querySelector("body"),
    startBtn: document.querySelector("button[data-start]"),
    stopBtn: document.querySelector("button[data-stop]"),

}
let colorId = null
refs.startBtn.isActive = false
console.log(refs.startBtn.isActive)

refs.startBtn.addEventListener("click", fnColorSetInt)
refs.stopBtn.addEventListener("click", fnColorClearInt)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function fnColorSetInt() {
    if (this.isActive) {
        return
    }

    this.isActive = true
    colorId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor()


    }, 1000);
    console.log(this.isActive);

}

function fnColorClearInt() {
    clearInterval(colorId)
    refs.startBtn.isActive = false
    console.log(refs.startBtn.isActive);


}