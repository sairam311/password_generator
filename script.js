const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_+=";

function generatePassword() {
    let length = document.getElementById("length").value;
    let includeLowercase = document.getElementById("lowercase").checked;
    let includeUppercase = document.getElementById("uppercase").checked;
    let includeNumbers = document.getElementById("numbers").checked;
    let includeSymbols = document.getElementById("symbols").checked;
    let excludeDuplicates = document.getElementById("exclude-duplicates").checked;
    let includeSpaces = document.getElementById("spaces").checked;

    let charSet = "";
    if (includeLowercase) charSet += lowercase;
    if (includeUppercase) charSet += uppercase;
    if (includeNumbers) charSet += numbers;
    if (includeSymbols) charSet += symbols;
    if (includeSpaces) charSet += " ";

    if (charSet === "") {
        alert("Please select at least one character type!");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomChar = charSet[Math.floor(Math.random() * charSet.length)];
        if (excludeDuplicates && password.includes(randomChar)) {
            i--;
        } else {
            password += randomChar;
        }
    }

    document.getElementById("password").value = password;
}

function updateLengthLabel() {
    document.getElementById("length-label").textContent = document.getElementById("length").value;
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
