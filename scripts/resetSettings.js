function showCustomizationFooter(){
    let customizationFooter = document.querySelector(".customization-page-footer");
    customizationFooter.style.visibility = "visible";
}

function hideCustomizationFooter() {
    let customizationFooter = document.querySelector(".customization-page-footer");
    customizationFooter.style.visibility = "hidden";
}

function resetSettings(){
    // Reset border width and border radius
    let sliders = document.getElementsByClassName("slider-container");
    let borderWidthDefault = "1"; // px unit
    let borderRadiusDefault = "0.5"; // rem unit

    for (let sliderContainer of sliders){
        let output = sliderContainer.lastElementChild;
        let slider = sliderContainer.firstElementChild;

        // Initizlize default values
        slider.value = (slider.id == "border-width-slider") ? borderWidthDefault : borderRadiusDefault;

        // Change the css variable
        if (slider.id == "border-width-slider"){
            document.documentElement.style.setProperty("--border-width", slider.value + "px");
        }
        else if (slider.id == "rounding-slider"){
            document.documentElement.style.setProperty("--border-radius", slider.value + "rem");
        }

        // Output default values
        output.innerHTML = slider.value;
    }


    // Reset colors
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
    }

    hideCustomizationFooter();
}