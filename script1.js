const button = document.getElementById("checkBtn");
const passwordInput = document.getElementById("password");

const result = document.getElementById("result");

const lengthCheck = document.getElementById("length");
const upperCheck = document.getElementById("upper");
const numberCheck = document.getElementById("number");
const symbolCheck = document.getElementById("symbol");
const entropyText = document.getElementById("entropy");
const crackTimeText = document.getElementById("crackTime");
const warningsDiv = document.getElementById("warnings");
const breachStatus =document.getElementById("breachStatus");

async function sha1(message) {

    const msgBuffer =
        new TextEncoder().encode(message);

    const hashBuffer =
        await crypto.subtle.digest(
            "SHA-1",
            msgBuffer
        );

    const hashArray =
        Array.from(new Uint8Array(hashBuffer));

    return hashArray
        .map(b =>
            b.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase();
}
async function checkHIBP(password) {

    const hash = await sha1(password);

    const prefix = hash.substring(0, 5);
    const suffix = hash.substring(5);

    const response = await fetch(
        `https://api.pwnedpasswords.com/range/${prefix}`
    );

    const data = await response.text();

    const lines = data.split("\n");

    for (let line of lines) {

        const [hashSuffix, count] =
            line.trim().split(":");

        if (hashSuffix === suffix) {

            return parseInt(count);
        }
    }

    return 0;
}

button.addEventListener("click", async function () {

    const password = passwordInput.value;

    let score = 0;
    let warnings = [];


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
    // Entropy calculation

let pool = 0;

if (/[a-z]/.test(password)) pool += 26;
if (/[A-Z]/.test(password)) pool += 26;
if (/[0-9]/.test(password)) pool += 10;
if (/[^A-Za-z0-9]/.test(password)) pool += 32;

let entropy = 0;

if (pool > 0) {
    entropy = password.length * Math.log2(pool);
}

entropyText.innerText =
    "Entropy: " + entropy.toFixed(2) + " bits";

// Crack time estimate

let crackTime = "";

if (entropy < 28) {
    crackTime = "Instantly";
}
else if (entropy < 36) {
    crackTime = "Hours";
}
else if (entropy < 60) {
    crackTime = "Years";
}
else if (entropy < 80) {
    crackTime = "Thousands of Years";
}
else {
    crackTime = "Millions of Years";
}

crackTimeText.innerText =
    "Estimated Crack Time: " + crackTime;

  



    try {

    breachStatus.innerText =
        "Checking breach database...";

    const breachCount =
        await checkHIBP(password);

    if (breachCount > 0) {

        breachStatus.innerText =
            `⚠ Found in ${breachCount.toLocaleString()} known breaches`;
        crackTimeText.innerText =    "Security Risk: Critical (Found in Breach Database)";

        score = 0;

        warnings.push(
            "Password has appeared in real-world data breaches"
        );

    } else {

        breachStatus.innerText =
            "✅ Not found in known breaches";
    }

} catch (error) {

    breachStatus.innerText =
        "Unable to perform breach check";
}


warningsDiv.innerHTML = "";

warnings.forEach(function (warning) {

    warningsDiv.innerHTML += `<p>⚠ ${warning}</p>`;

});


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