// Function to initialize slider functionality for a given section
function initializeSlider(section) {
    let sliderContainer = section.querySelector('.product_slider');
    let leftButton = section.querySelector('.left_btn button');
    let rightButton = section.querySelector('.right_btn button');
    let scrollAmount = 500;

    leftButton.addEventListener('click', function () {
        sliderContainer.scrollLeft -= scrollAmount;
    });

    rightButton.addEventListener('click', function () {
        sliderContainer.scrollLeft += scrollAmount;
    });
}

// Initialize sliders for both sections
document.addEventListener('DOMContentLoaded', function () {
    let section1 = document.getElementById('new_launches');
    let section2 = document.getElementById("Deals_of_the_day");
    initializeSlider(section1);
    initializeSlider(section2);
});

