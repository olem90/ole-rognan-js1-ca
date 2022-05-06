const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");
const validation = document.querySelector(".validation-message");

function validateForm(){
    event.preventDefault();

    if(checkLength(name.value, 0) === true){
        nameError.style.display = "none";
    }
    else{
        nameError.style.display = "block";
    }

    if(checkLength(subject.value, 9) === true){
        subjectError.style.display = "none";
    }
    else{
        subjectError.style.display = "block";
    }

    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    }
    else{
        emailError.style.display = "block";
    }

    if(checkLength(address.value, 24) === true){
        addressError.style.display = "none";
    }
    else{
        addressError.style.display = "block";
    }
    
    if(checkLength(name.value, 0) === true && checkLength(subject.value, 9) === true && validateEmail(email.value) === true && checkLength(address.value, 24) === true){
        validation.style.display = "block";
    } else{
        validation.style.display = "none";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len){
    if(value.trim().length > len){
        return true;
    } else{
        return false;
    }
}

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}