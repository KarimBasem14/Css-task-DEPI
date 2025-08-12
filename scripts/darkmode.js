const themeSwitch = document.getElementById('theme-switch');
let darkmode = localStorage.getItem("darkmode");

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
}

if (darkmode === "active") enableDarkMode() // enables dark mode if stored in local storage

themeSwitch.onclick = () => {
    darkmode = localStorage.getItem("darkmode"); // to get its value even after the first click on the button
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
}