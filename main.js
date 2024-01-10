let h = document.getElementById('hours')
let m = document.getElementById('minutes')
let s = document.getElementById('seconds')
let a = document.getElementById('ampm')
const ShowTime = () => {
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (hours === 12) {
        a.innerHTML = 'PM';
        h.innerHTML = hours;
    }
    else if (hours === 0) {
        hours = 12;
        a.innerHTML = 'AM';
        h.innerHTML = hours;
    }
    else if (hours > 12) {
        hours = hours - 12;
        a.innerHTML = 'PM';
        if (hours < 10) {
            h.innerHTML = "0" + hours
        }
        else {
            h.innerHTML = hours;
        }
    }
    else {
        a.innerHTML = "AM";
        if (hours < 10) {
            h.innerHTML = "0" + hours
        }
        else {
            h.innerHTML = hours;
        }
    }
    if (minutes < 10) {
        m.innerHTML = "0" + minutes;
    }
    else {
        m.innerHTML = minutes;
    }
    if (seconds < 10) {
        s.innerHTML = "0" + seconds;
    }
    else {
        s.innerHTML = seconds;
    }
    setInterval(ShowTime, 1000)
}

ShowTime()
