let sliders = document.getElementsByClassName("slider-container");

for (let sliderContainer of sliders){
    let output = sliderContainer.lastElementChild;
    let slider = sliderContainer.firstElementChild;
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        if (slider.id == "border-width-slider"){
            
        }
        else if (slider.id == "rounding-slider"){

        }
    }
}