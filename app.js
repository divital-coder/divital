// section links and page finder
const section = document.querySelector('section');
const links = document.querySelectorAll('.nav-link');
const body = document.querySelector('body');

function manageResponse(evt) {
    this.style.setProperty('color', 'cyan');
    console.log(this);
    for (elem of links) {
        if (elem != this) {
            elem.style.setProperty('color', '#fff');
        }
    }
    let text = this.innerText;
    if (text === 'ABOUT') {
        body.style.setProperty('background-image', 'url(pic_one\\ \\(4\\).jpg)');
    }
    if (text === 'SERVICES') {
        body.style.setProperty('background-image', 'url(pic_one\\ \\(1\\).jpg)');
    }
    if (text === 'HOME') {
        body.style.setProperty('background-image', 'url(pic_one\\ \\(3\\).jpg)');
    }
    if (text === 'CONTACT') {
        body.style.setProperty('background-image', 'url(pic_one\\ \\(2\\).jpg)');
    }
}
links.forEach((elem) => {
    elem.addEventListener('click', manageResponse);
});