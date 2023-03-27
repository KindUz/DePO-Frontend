const openPopup = document.querySelectorAll(".open-popup");
const closePopup = document.querySelectorAll(".close-popup");
const popUp = document.querySelector(".popup");

for (let index = 0; index < openPopup.length; index++) {
    let button_open = openPopup[index];
    button_open.addEventListener('click', function (e) {
        e.preventDefault();
        popUp.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = "17px";
    })
}

for (let index = 0; index < closePopup.length; index++) {
    let button_close = closePopup[index];
    button_close.addEventListener('click', function (e) {
        e.preventDefault();
        popUp.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.paddingRight = "0";
    })
}

popUp.addEventListener('click', (e) => {
    if (!e.target.closest('.popup__block')) {
        popUp.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.paddingRight = "0";
    }
})