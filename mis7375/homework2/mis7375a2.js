// Password validation and confirmation messages for indexcopy.html.
function setup() {
  pwdentry();
  checkpwd2();
}

function pwdentry() {
  var passwordInput = document.getElementById("pwd1");
  if (!passwordInput) return false;

  var password = passwordInput.value;
  var checks = [
    { id: "pwd_msg1", valid: /[a-z]/.test(password), missing: "Enter 1 or more lower case letter", validText: "Lower case letter included" },
    { id: "pwd_msg2", valid: /[A-Z]/.test(password), missing: "Enter 1 or more upper case letter", validText: "Upper case letter included" },
    { id: "pwd_msg3", valid: /[0-9]/.test(password), missing: "Enter 1 or more number", validText: "Number included" },
    { id: "pwd_msg4", valid: /[!@#$%&*\\.+()_-]/.test(password), missing: "Enter 1 or more special character", validText: "Special character included" },
    { id: "pwd_msg5", valid: password.length >= 8, missing: "Enter at least 8 characters", validText: "At least 8 characters" }
  ];

  var allValid = true;
  checks.forEach(function (check) {
    var message = document.getElementById(check.id);
    if (!message) return;
    message.textContent = password.length === 0 ? "" : (check.valid ? check.validText : check.missing);
    message.className = password.length === 0 ? "" : (check.valid ? "password-valid" : "password-invalid");
    if (!check.valid) allValid = false;
  });

  checkpwd2();
  return allValid;
}

function checkpwd2() {
  var passwordInput = document.getElementById("pwd1");
  var confirmationInput = document.getElementById("pwd2");
  var message = document.getElementById("pwd2_text");
  if (!passwordInput || !confirmationInput || !message) return false;

  var password = passwordInput.value;
  var confirmation = confirmationInput.value;
  if (confirmation.length === 0) {
    message.textContent = "";
    message.className = "";
    return false;
  }

  var matches = password === confirmation;
  message.textContent = matches ? "Passwords do match!" : "Passwords don't match.";
  message.className = matches ? "password-valid" : "password-invalid";
  return matches;
}
