let colorChoices = document.getElementsByClassName("color-choice");
let primaryColorDefault = "#ff0000";
let successColorDefault ="#400040";
let warningColorDefault = "#fc9231";
let dangerColorDefault = "#f03d3d";
let infoColorDefault = "#3d7a81";

for (let colorChoice of colorChoices){
    let colorInput = colorChoice.lastElementChild;
    let colorParagraph = colorChoice.firstElementChild;

    // On page load set the colors to the defaults
    if (colorParagraph.id == "primary-color"){
        document.documentElement.style.setProperty("--primary-color", primaryColorDefault);
        colorParagraph.innerHTML = primaryColorDefault;
        colorInput.value = primaryColorDefault;
    }
    else if (colorParagraph.id == "success-color"){
        document.documentElement.style.setProperty("--success-color", successColorDefault);
        colorParagraph.innerHTML = successColorDefault;
        colorInput.value = successColorDefault;
    }
    else if (colorParagraph.id == "warning-color"){
        document.documentElement.style.setProperty("--warning-color", warningColorDefault);
        colorParagraph.innerHTML = warningColorDefault;
        colorInput.value = warningColorDefault;
    }
    else if (colorParagraph.id == "danger-color"){
        document.documentElement.style.setProperty("--danger-color", dangerColorDefault);
        colorParagraph.innerHTML = dangerColorDefault;
        colorInput.value = dangerColorDefault;
    }
    else if (colorParagraph.id == "info-color"){
        document.documentElement.style.setProperty("--info-color", infoColorDefault);
        colorParagraph.innerHTML = infoColorDefault;
        colorInput.value = infoColorDefault;
    }


    // Write the colors to the p tag


    // Event listener
    colorInput.addEventListener("input", () => {
        // When input changes change the p's value
        let colorInputValue = colorInput.value;
        
        colorParagraph.innerHTML = colorInputValue;

        // When input changes change the color in the site
        if (colorParagraph.id == "primary-color"){
            document.documentElement.style.setProperty("--primary-color", colorInputValue);
        }
        else if (colorParagraph.id == "success-color"){
            document.documentElement.style.setProperty("--success-color", colorInputValue);
        }
        else if (colorParagraph.id == "warning-color"){
            document.documentElement.style.setProperty("--warning-color", colorInputValue);
        }
        else if (colorParagraph.id == "danger-color"){
            document.documentElement.style.setProperty("--danger-color", colorInputValue);
        }
        else if (colorParagraph.id == "info-color"){
            document.documentElement.style.setProperty("--info-color", colorInputValue);
        }

        showCustomizationFooter();
    });
}