const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}[]<>/-=";

const allCharts = upperCase + lowerCase + number + symbol;

export const createPassword = (length) => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allCharts[Math.floor(Math.random() * allCharts.length)];
  }
  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return password;
};
