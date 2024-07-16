const btn = document.getElementById("btn");
const bmi = document.getElementById("bmi-result");
const cond = document.getElementById("weight-condition");

function calculate() {
  const h = document.getElementById("height").value / 100;
  const w = document.getElementById("weight").value;

  const bmiValue = w / (h * h);
  bmi.value = bmiValue;
  if (bmiValue < 18.5) {
    cond.innerText = "Under Weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    cond.innerText = "Normal Weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    cond.innerText = "Over Weight";
  } else if (bmiValue >= 30) {
    cond.innerText = "Obesity";
  }
}
btn.addEventListener("click", calculate);
