/**
 * Returns an array with the number of coins needed to give change where
 * values[0] = 1 dollar, values[1] = 50 cents... 25, 10, 5, 1
 * 
 * This files uses toFixed(2) to handle the floating point precision problem in javascript.
 */
function giveChange(received, cost) {
  let values = [0, 0, 0, 0, 0, 0];
  let change = (received - cost).toFixed(2);
  console.log({ change });

  values[0] = Math.trunc(change / 1);
  let rest = change % 1;
  if (rest === 0) return values;

  values[1] = Math.trunc(rest / 0.5);
  rest = rest % 0.5;
  if (rest === 0) return values;

  values[2] = Math.trunc(rest / 0.25);
  rest = rest % 0.25;
  if (rest === 0) return values;

  values[3] = Math.trunc(rest / 0.1);
  rest = rest % 0.1;
  if (rest === 0) return values;

  values[4] = Math.trunc(rest / 0.05);
  rest = rest % 0.05;
  if (rest === 0) return values;

  values[5] = rest / 0.01;
  return values;
}

let result;
result = giveChange(5, 3.5);
console.log({ result });
result = giveChange(5.5, 3.5);
console.log({ result });
result = giveChange(3.51, 3.5);
console.log({ result });
