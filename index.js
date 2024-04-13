
// product slider

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

document.addEventListener('DOMContentLoaded', function () {
    let section1 = document.getElementById('new_launches');
    let section2 = document.getElementById("Deals_of_the_day");
    initializeSlider(section1);
    initializeSlider(section2);
});

// login / signup

let login = document.getElementById("login")
login.addEventListener("click", function () {
    showModal()

})

function showModal() {
    overlay = document.getElementById("overlay")
    login_div = document.getElementById("login_form_wrapper")
    login_div.style.top = "50%";
    overlay.style.display = "block"

    close_btn = document.getElementById("login_form_close")
    close_btn.addEventListener("click", function () {
        overlay.style.display = "none"
        login_div.style.top = "-50%";

    })
}