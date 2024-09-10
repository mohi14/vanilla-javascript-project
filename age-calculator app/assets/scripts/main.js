let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
const result = document.getElementById("result");

const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
};

const calculateAge = () => {
  if (!userInput.value) {
    showToast("Please put your date of birth!");
    return;
  }
  let birthDate = new Date(userInput.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  let resultText;

  if (y3 > 0 && m3 > 0) {
    resultText = `Your are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
  } else if (y3 === 0 && m3 > 0) {
    resultText = `Your are <span>${m3}</span> months and <span>${d3}</span> days old`;
  } else if (y3 === 0 && m3 === 0) {
    resultText = `Your are <span>${d3}</span> days old`;
  }

  result.innerHTML = resultText;
};

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
