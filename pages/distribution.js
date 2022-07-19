const notNow = document.querySelector('.distribution__not-now');
const distribution = document.querySelector('.distribution');
const subscribe = document.querySelector('.subscribe');

notNow.onclick = function() {
    distribution.classList.toggle('closed');
    subscribe.classList.toggle('closed');
}

subscribe.onclick = function() {
    distribution.classList.toggle('closed');
    subscribe.classList.toggle('closed');
}