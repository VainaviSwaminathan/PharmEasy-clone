//login signup feature

let sign_up_form = document.getElementById("sign_in_form")

let users_data = []

function saveUserData() {
    localStorage.setItem("UsersData", JSON.stringify(users_data))
}

function loadUserData() {

    users_data = JSON.parse(localStorage.getItem("UsersData"))
    if (!users_data) {
        users_data = [];
    }
}
sign_up_form.addEventListener("submit", function (event) {
    handleSubmit_sign_up(event)
})

function handleSubmit_sign_up(e) {
    e.preventDefault()
    let values = e.target
    let username = values[0].value
    let email = values[1].value
    let password = values[2].value
    let confirm_password = values[3].value
    console.log(confirm_password)

    if (password == confirm_password) {

        let check_arr = users_data.filter(function (ele, i) {
            return ele.username == username
        })

        if (check_arr.length > 0) {
            alert("This username already exists!!")
        }

        else {
            let user = {
                username: username,
                email: email,
                password: password
            }

            users_data.push(user)
            saveUserData()
        }



    }

    else {
        alert("passwords not matching")
    }
}

loadUserData()