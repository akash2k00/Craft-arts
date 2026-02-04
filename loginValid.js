function validateForm(event) {

    event.preventDefault(); //                 STOP page refresh

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
        console.log("check")

       
        document.body.style.overflow = "auto";
     userBtn.style.display="inline-block"
logBtn.style.display="none";
    }

    return true;
}





let logBtn = document.getElementById("logBtn")
let userBtn = document.getElementById("userBtn")
let loginPage = document.getElementById("loginPage")






logBtn.addEventListener("click", () => {
    
    document.body.style.overflow = "hidden";

    console.log("check")
   

    loginPage.style.display = "block";

})



document.getElementById("LogCloseBtn").addEventListener("click", () => {
    document.getElementById("loginPage").style.display = "none";
    console.log("check")

    document.body.style.overflow = "auto";
})


