function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  let rootOne = -b/(2*a);
  let rootTwo = (-b + Math.sqrt(d) )/(2*a);
  let rootThree = (-b - Math.sqrt(d) )/(2*a);
  if (d < 0) {
    arr = [];
  } else if (d == 0) {
    arr.push(rootOne);
  } else if (d > 0) {
    arr.push(rootTwo,rootThree);
  }
  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = payment*n;
  let percent;
  let contribution;
  let amount;
  let date;
  let P = percent/12/100;
  let n = date - new Date(milliseconds);
  let S;
  let payment = S * (P + (P / (((1 + P)**n) - 1)))
  // код для задачи №2 писать здесь

  return totalAmount;
}
