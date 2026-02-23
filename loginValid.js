function validateForm(event) {
    event.preventDefault();

    const nameIp = document.getElementById("nameIp").value.trim();
    const email = document.getElementById("emailIp").value.trim();
    const pass = document.getElementById("passIp").value.trim();

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passError = document.getElementById("passError");

    nameError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";

    let isValid = true;

    if (nameIp === "") {
        nameError.textContent = " Name cannot be empty.";
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        emailError.textContent = " Email cannot be empty.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = " Invalid email.";
        isValid = false;
    }

    if (pass === "") {
        passError.textContent = " Password required.";
        isValid = false;
    }

    if (isValid) {
        alert("Logged In successfully");
        document.getElementById("loginPage").style.display = "none";
        document.body.style.overflow = "auto";
        const userBtn = document.getElementById("userBtn");
        const logBtn = document.getElementById("logBtn");
        if (userBtn) userBtn.style.display = "inline-block";
        if (logBtn) logBtn.style.display = "none";
    }

    return true;
}


// Open login modal 
function openLogin() {
    const loginPage = document.getElementById("loginPage");
    if (!loginPage) return;
    document.body.style.overflow = "hidden";
    loginPage.style.display = "block";
}

const logBtn = document.getElementById("logBtn");
if (logBtn) {
    logBtn.addEventListener("click", openLogin);
}

const logBtnMobile = document.getElementById("logBtn-mobile");
if (logBtnMobile) {
    logBtnMobile.addEventListener("click", openLogin);
}

const logCloseBtn = document.getElementById("LogCloseBtn");
if (logCloseBtn) {
    logCloseBtn.addEventListener("click", () => {
        const loginPage = document.getElementById("loginPage");
        if (loginPage) loginPage.style.display = "none";
        document.body.style.overflow = "auto";
    });
}
