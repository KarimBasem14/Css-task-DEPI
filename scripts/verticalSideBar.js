let hamburger = document.getElementById('hamburger');

hamburger.onclick = () => {
    let verticalNavBar = document.querySelector(".vertical-nav-bar");
    verticalNavBar.classList.toggle("visible");
}

let closeButton = document.querySelector(".vertical-nav-bar-title .fa-times");

closeButton.onclick = () => {
    let verticalNavBar = document.querySelector(".vertical-nav-bar");
    verticalNavBar.classList.toggle("visible");
}