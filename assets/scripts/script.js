let dropLinks = document.querySelectorAll('.drop-link');

dropLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.target.parentElement.classList.toggle('active');
    })
})

document.querySelector('.menu-item').addEventListener("click", (event) => {
    event.target.parentElement.parentElement.parentElement.classList.toggle('active');
})

let dropIcons = document.querySelectorAll('.drop-icon');

dropIcons.forEach(icon => {
    icon.addEventListener("click", (event) => {
        event.target.parentElement.parentElement.classList.toggle('active');
    })
})
