function validateContactForm(event) {

    event.preventDefault(); //          STOP page refresh

    const fnameContact = document.getElementById("fname-contact").value.trim();
    const lnameContact = document.getElementById("lname-contact").value.trim();
    const emailContact = document.getElementById("email-contact").value.trim();
    const phoneContact = document.getElementById("phone-contact").value.trim();

    const msgContact = document.getElementById("msg-contact").value.trim();



    const fnameErrorContact = document.getElementById("fnameError-contact");
    const lnameErrorContact = document.getElementById("lnameError-contact");
    const emailErrorContact = document.getElementById("emailError-contact");
    const phoneErrorContact = document.getElementById("phoneError-contact");
    const msgErrorContact = document.getElementById("msgError-contact")




    fnameErrorContact.textContent = "";
    lnameErrorContact.textContent = "";
    emailErrorContact.textContent = "";
    phoneErrorContact.textContent = "";
    msgErrorContact.textContent = "";

    let isValid = true;

    if (fnameContact === "") {
        fnameErrorContact.textContent = " First name cannot be empty.";
        isValid = false;
    }

    if (lnameContact === "") {
        lnameErrorContact.textContent = " Last name cannot be empty.";
        isValid = false;
    }
    if (msgContact === "") {
        msgErrorContact.textContent = " Message cannot be empty.";
        isValid = false;
    }


    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailContact === "") {
        emailErrorContact.textContent = " Email cannot be empty.";
        isValid = false;
    } else if (!emailPattern.test(emailContact)) {
        emailErrorContact.textContent = " Invalid email.";
        isValid = false;
    }

    if (phoneContact === "") {
        phoneErrorContact.textContent = " Phone number required.";
        isValid = false;
    } else if ((!/^\d{10}$/.test(phoneContact))) {
        phoneErrorContact.textContent = " Invalid phone number.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted");
        document.getElementById("contactForm").reset();


    }

    return true;
}



