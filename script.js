// function turlari
// setinterval
// setTime
const hour = document.querySelector('#hour')
const minut = document.querySelector('#minut')
const seconds = document.querySelector('#seconds')


setInterval(() => {
    
    const fullTime = new Date()
    
    hour.innerHTML = fullTime.getHours()
    minut.innerHTML = fullTime.getMinutes()
    seconds.innerHTML = fullTime.getSeconds()
}, 1000);

