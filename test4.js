let SubBtn = document.getElementById('submit')
let Username = document.getElementById('username')
let email = document.getElementById('email')
let Password = document.getElementById('password')
let ConfirmPassword = document.getElementById('confirmpassword')
let ErrorMsg = document.getElementById('nameError')
let ErrPassword = document.getElementById('errPassword')
let ErrMail = document.getElementById('ErrorMail')

function showError(input) {
    input.classList.remove('success')
    input.classList.add('error')
}

function showSuccess(input) {
    input.classList.add('success')
    input.classList.remove('error')
}


function CheckName(name) {

    if (name == "" || name.length < 3) {

        showError(Username)
        ErrorMsg.innerText = "Username must be at least 3 characters";

    } else {
        showSuccess(Username)
        ErrorMsg.innerText = "";
    }

}

function passwordChecker(password, confirmpassword) {

    if (password.value !== confirmpassword.value) {
        ErrPassword.innerText = "Passwords do not match"
        showError(password)
        showError(confirmpassword)
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email.value).toLowerCase())) {
        showSuccess(email)
    } else {
        showError(email)
        ErrMail.innerText = 'Email is not valid'
    }
}

SubBtn.addEventListener('click', (e) => {
    e.preventDefault()
    CheckName(Username.value)
    passwordChecker(Password, ConfirmPassword)
    validateEmail(email)
})