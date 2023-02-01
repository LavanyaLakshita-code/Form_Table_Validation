let user_name = document.getElementById("name");
let user_email = document.getElementById("uname");
let user_contact = document.getElementById("contact");
let user_password = document.getElementById("pw");
let user_confirm_password = document.getElementById("confirmpw");
let user_terms = document.getElementById("terms");
let name_err = document.getElementById("name-err");
let email_err = document.getElementById("email-err");
let contact_err = document.getElementById("contact-err");
let password_err = document.getElementById("password-err");
let confirm_pass_err = document.getElementById("confirm-pass-err");
let terms_err = document.getElementById("terms-err");
let sub = document.getElementById("submit");

sub.style.backgroundColor = "grey";
sub.style.color = "white";
sub.style.pointerEvents = "none";
sub.disabled = true;

function formValidation() {
    let name = user_name.value;
    let email = user_email.value;
    let contact = user_contact.value;
    let password = user_password.value;
    let confirm_pw = user_confirm_password.value;

    console.log("name", name, "email", email, "contact", contact, "password", password, "confirm_pw", confirm_pw);

    if ((name.length === 0 || name.length > 30) && (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) && (!contact.match(/^[1-9][0-9]{9}$/)) && (!password.match(/^.(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}/))) {
        name_err.innerHTML = "PLease Enter Your Name";
        user_name.style.border = "2px solid red";
        email_err.innerHTML = "Please Enter Your Email!";
        user_email.style.border = "2px solid red";
        contact_err.innerHTML = "Pleae Enter Your Phone Number";
        user_contact.style.border = "2px solid red";
        password_err.innerHTML = "Please Enter Your Password!";
        user_password.style.border = "2px solid red";
        return false;
    }
    else {
        if ((name.length !== 0 || name.length < 30)) {
            name_err.innerHTML = "";
            user_name.style.border = "none";
        }
        if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            email_err.innerHTML = "";
            user_email.style.border = "none";
        }
        if (contact.match(/^[1-9][0-9]{9}$/)) {
            contact_err.innerHTML = "";
            user_contact.style.border = "none";
        }
        if (password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}/)) {
            password_err.innerHTML = "";
            user_password.style.border = "none";
        }
        if (confirm_pw !== password) {
            confirm_pass_err.innerHTML = "Password doesn't match";
            user_confirm_password.style.border = "2px solid red";
            return false;
        } else {
            confirm_pass_err.innerHTML = "";
            user_confirm_password.style.border = "none";
        }
    }
    return true;
}

function terms_changed(termsCheckBox) {
    //If the checkbox has been checked
    if (termsCheckBox.checked) {
        //Set the disabled property to FALSE and enable the button.
        sub.disabled = false;
        sub.style.backgroundColor = "#288e88";
        sub.style.pointerEvents = "auto";
    } else {
        //Otherwise, disable the submit button.
        sub.style.backgroundColor = "grey";
        sub.style.color = "white";
        sub.style.pointerEvents = "none";
        sub.disabled = true;
    }
}