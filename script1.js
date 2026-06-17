const button = document.getElementById("checkBtn");
const passwordInput = document.getElementById("password");

const result = document.getElementById("result");

const lengthCheck = document.getElementById("length");
const upperCheck = document.getElementById("upper");
const numberCheck = document.getElementById("number");
const symbolCheck = document.getElementById("symbol");


button.addEventListener("click", function () {

    const password = passwordInput.value;

    let score = 0;


    // Check length
    if (password.length >= 8) {

        lengthCheck.innerText = "✅ At least 8 characters";
        score++;

    } else {

        lengthCheck.innerText = "❌ At least 8 characters";

    }


    // Check uppercase letter
    if (/[A-Z]/.test(password)) {

        upperCheck.innerText = "✅ Contains uppercase letter";
        score++;

    } else {

        upperCheck.innerText = "❌ Contains uppercase letter";

    }


    // Check number
    if (/[0-9]/.test(password)) {

        numberCheck.innerText = "✅ Contains a number";
        score++;

    } else {

        numberCheck.innerText = "❌ Contains a number";

    }


    // Check symbol
    if (/[!@#$%^&*]/.test(password)) {

        symbolCheck.innerText = "✅ Contains special character";
        score++;

    } else {

        symbolCheck.innerText = "❌ Contains special character";

    }



    // Final strength result

    if (score <= 1) {

        result.innerText = "Strength: Weak 🔴";

    } 
    
    else if (score <= 3) {

        result.innerText = "Strength: Medium 🟡";

    } 
    
    else {

        result.innerText = "Strength: Strong 🟢";

    }


});