const clockElement = document.getElementById('clock')
const typeSelectorElement = document.getElementById('display_type')
var timeType

const setTimeType = () => {
    timeType = typeSelectorElement.value
}

const showCurrentTime = () => {
    let currentTime = new Date()
    let hour = currentTime.getHours()
    let minute = currentTime.getMinutes()
    let second = currentTime.getSeconds()

    if (hour < 10) {
        hour = "0" + hour
    }
    if (minute < 10) {
        minute = "0" + minute
    }
    if (second < 10) {
        second = "0" + second
    }

    let fullTime
    if (timeType == 24) {
        fullTime = hour + ":" + minute + ":" + second
    }
    else if (timeType == 12) {
        let symbol = "AM"
        if (hour >= 12) {
            symbol = "PM"
            if (hour != 12) {
                hour -= 12
            }
        }
        fullTime = hour + ":" + minute + ":" + second + " " + symbol
    }

    clockElement.innerText = fullTime
}

setTimeType()
showCurrentTime()
typeSelectorElement.addEventListener("change", setTimeType)
setInterval(showCurrentTime, 1000)