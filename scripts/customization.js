let customizationButton = document.getElementById('customize-button');

customizationButton.onclick = () => {
    let customizationPage = document.querySelector(".customization-page");
    customizationPage.classList.toggle("visible");
}

let customizationCloseButton = document.querySelector(".customization-page-title .fa-times");

customizationCloseButton.onclick = () => {
    let customizationPage = document.querySelector(".customization-page");
    customizationPage.classList.toggle("visible");
}