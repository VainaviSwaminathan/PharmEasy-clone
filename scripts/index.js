
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

let users_data;
let welcome_message = document.querySelector("#finder>h3")
console.log(welcome_message)
localStorage.setItem("isAuth", "Not Authenticated")

function loadUserData() {

    users_data = JSON.parse(localStorage.getItem("UsersData"))
    if (!users_data) {
        users_data = [];
    }
}

let login_form = document.getElementById("login_form")
login_form.addEventListener("submit", function (event) {
    handleSubmit_log_in(event)
})

function handleSubmit_log_in(event) {
    event.preventDefault()
    let data = event.target

    let username = data[0].value
    let password = data[1].value

    let login_arr = users_data.filter(function (ele, i) {
        return (ele.username == username) && (ele.password == password)
    })

    if (login_arr.length > 0) {
        alert("Logged in successfully!")
        localStorage.setItem("isAuth", "Authenticated")
        welcome_message.innerHTML = `Welcome ${username}`
        overlay.style.display = "none"
        login_div.style.top = "-50%";


    }
    else {
        alert("Incorrect credentials")
    }

}

loadUserData()

