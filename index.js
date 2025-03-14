document.getElementById("signUp").addEventListener("submit", (e) => {
    e.preventDefault();

    const fname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const pwd1 = document.getElementById("pwd").value;
    const pwd2 = document.getElementById("cnfPwd").value;
    const date = document.getElementById("date").value;
    const profession = document.querySelector('input[name="profession"]:checked').value;
    const terms = document.getElementById("terms").checked;

    const errorMessage = document.getElementById("err-msg");
    const successMessage = document.getElementById("suc-msg");

    errorMessage.textContent = "";
    successMessage.textContent = "";

    if(!fname || !email || !date || !pwd1 || !pwd2 || !profession || !terms){
        errorMessage.textContent = "All fields are required!";
        return;
    }

    if(pwd1.length < 6){
        errorMessage.textContent = "Passwords length should be more than 6 characters";
        return;
    }
    if(pwd1 !== pwd2){
        errorMessage.textContent = "Passwords does not match";
        return;
    }

    if (!terms) {
        errorMessage.textContent = "You must agree to the terms and conditions!";
        return;
    }


    successMessage.textContent = "Form submitted succesfully"

    document.getElementById("signUp").reset()

})