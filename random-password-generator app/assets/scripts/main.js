import { createPassword } from "./generatePassword.js";

const passwordBox = document.getElementById("password");
const button = document.getElementById("button");
const copyButton = document.getElementById("copyButton");
const length = 12;

button.addEventListener("click", () => {
  const password = createPassword(length);
  passwordBox.value = password;
  copyButton.style.display = "block";
});

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1500);
};

const copyPassword = () => {
  navigator.clipboard
    .writeText(passwordBox.value)
    .then(() => {
      showToast("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy password: ", err);
    });
};

copyButton.addEventListener("click", copyPassword);
