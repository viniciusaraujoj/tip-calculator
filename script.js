const btnEl = document.querySelector("button");
const amountEl = document.querySelector("#amount");
const percentageEl = document.querySelector("#percentage");
const resultEl = document.querySelector("#result");

const calcTip = function () {
  const amount = Number(amountEl.value);
  const percentage = Number(percentageEl.value);
  const total = amount + (amount * percentage) / 100;

  return total;
};

const showResult = function (e) {
  e.preventDefault();

  const result = calcTip(e).toFixed(2);

  resultEl.innerText = `$${result}`;
  resultEl.style.display = "inline-block";
};

btnEl.addEventListener("click", showResult);
