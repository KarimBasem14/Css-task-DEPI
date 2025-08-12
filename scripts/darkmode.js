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

const changeLogoColor = (isDarkMode) => {
    var img = document.querySelector(".nav-logo img");
    if (isDarkMode === "active"){
        img.setAttribute("src", "imgs/projects/finder logo dark.png");
    }
    else{
        img.setAttribute("src", "imgs/projects/finder logo.png");
    }
}

if (darkmode === "active") { // To enable dark mode on page load if dark mode is stored
    enableDarkMode();
    changeLogoColor(darkmode);
}

themeSwitch.onclick = () => {
    darkmode = localStorage.getItem("darkmode"); // to get its value even after the first click on the button
    darkmode !== "active" ? enableDarkMode() : disableDarkMode();
    changeLogoColor(localStorage.getItem("darkmode")); 
}