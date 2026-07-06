const submitButton = document.getElementById("submit-button");
const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const feedbackDiv = document.getElementById("feedback");

const eamilRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm() {
    const data = {};
    const errors = [];  

    if (fullnameInput.value.trim() !=="") {
        data.fullname = fullnameInput.value.trim();
    } else {
        errors.push("Full name is required.");
    }

    if (emailInput.value.trim() !=="") {
        if (eamilRegex.test(emailInput.value.trim())) {
            data.email =emailInput.value.trim();
        } else {
            errors.push("Please enter a valid email address.");
        } 
    } else {
            errors.push("Email is required")
        }

    if (messageInput.value.trim() !== "") {
        data.message = messageInput.value.trim();
    } else {
        errors.push("Message is required");
    } 

    if (errors.length > 0) {
        console.log(errors);
        feedbackDiv.textContent = errors.join(" ");
    } else {
        console.log(data);
        feedbackDiv.textContent = "Thank you! Your message has been sent.";
        fullnameInput.value = "";
        emailInput.value ="";
        messageInput.value = "";
    }
}

submitButton.addEventListener("click", validateForm);

