const displayTime = document.getElementById("display-time")
const changeFormatButton = document.getElementById("change-format-button")

let is24HourFormat = true

function formatTime(time) {
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    let period = " "

    if (!is24HourFormat) {
        period = hours >= 12 ? " PM" : " AM"
        hours = hours % 12
        hours = hours ? hours : 12
    }

    const formattedHours = String(hours).padStart(2, "0")
    const formattedMinutes = String(minutes).padStart(2, "0")
    const formattedSeconds = String(seconds).padStart(2, "0")

    //Another method:
    /*hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    */

    if (is24HourFormat)
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`

    else
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}${period}`
}

function updateTime() {
    const now = new Date()
    displayTime.textContent = formatTime(now)
}

function changeFormat() {
    is24HourFormat = !is24HourFormat
    updateButtonText()
    updateTime()
}

function updateButtonText() {
    if (is24HourFormat)
        changeFormatButton.textContent = "Switch to 12-hour format"

    else
        changeFormatButton.textContent = "Switch to 24-hour format"
}

changeFormatButton.onclick = () => {
    changeFormat()
}

updateButtonText()
updateTime()
setInterval(updateTime, 1000)