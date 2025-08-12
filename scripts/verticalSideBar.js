let hamburger = document.getElementById('hamburger');

hamburger.onclick = () => {
    let verticalNavBar = document.querySelector(".vertical-nav-bar");
    verticalNavBar.classList.toggle("visible");
}

let closeButton = document.querySelector(".fa-times");

closeButton.onclick = () => {
    let verticalNavBar = document.querySelector(".vertical-nav-bar");
    verticalNavBar.classList.toggle("visible");
}