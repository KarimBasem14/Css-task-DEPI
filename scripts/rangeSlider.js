let sliders = document.getElementsByClassName("slider-container");
let borderWidthDefault = "1"; // px unit
let borderRadiusDefault = "0.5"; // rem unit

for (let sliderContainer of sliders){
    let output = sliderContainer.lastElementChild;
    let slider = sliderContainer.firstElementChild;

    // Initizlize default values
    slider.value = (slider.id == "border-width-slider") ? borderWidthDefault : borderRadiusDefault;

    // Output default values
    output.innerHTML = slider.value;

    slider.oninput = function() {
        if (slider.id == "border-width-slider"){
            document.documentElement.style.setProperty("--border-width", this.value + "px");
        }
        else if (slider.id == "rounding-slider"){
            document.documentElement.style.setProperty("--border-radius", this.value + "rem");
        }
        output.innerHTML = this.value;
        showCustomizationFooter();
    }
}