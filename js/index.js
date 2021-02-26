setInterval(updeClock,1000);
function updeClock(){
const clock = document.querySelector(' .clock');
clock.innerText = new Date().toLocaleTimeString();
}