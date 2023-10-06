const btnEl = document.querySelector("button");
const amountInput = document.querySelector("#amount");
const percentageInput = document.querySelector("#percentage");
const resultEl = document.querySelector("#result");

const calcTip = function () {
  const amount = Number(amountInput.value);
  const percentage = Number(percentageInput.value);
  const total = amount + (amount * percentage) / 100;

  return total;
};

const showResult = function (e) {
  e.preventDefault();

  const result = calcTip(e);
  resultEl.innerText = `$${result.toFixed(2)}`;
};

btnEl.addEventListener("click", showResult);
