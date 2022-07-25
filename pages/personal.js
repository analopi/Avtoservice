const openBtn = document.querySelector('.open-btn');
const myServices = document.querySelector('.my-services');
const myServicesList = document.querySelector('.my-services__list');
const personal = document.querySelector('.personal');

openBtn.onclick = function (){
    if (getComputedStyle(myServicesList).display !== 'none') {
        myServicesList.style.display = 'none';
        myServices.style.height = '0';
        openBtn.style.transform = 'rotate(0deg)';
        personal.style.height = '1100px';
    } else {
        myServicesList.style.display = 'flex';
        myServices.style.height = '659px';
        openBtn.style.transform = 'rotate(180deg)';
        personal.style.height = '1748px';
    }
    
}