/**
 * Returns an array with the number of coins needed to give change where
 * values[0] = 1 dollar, values[1] = 50 cents... 25, 10, 5, 1
 * 
 * This files scales  the values by 100 to handle the floating point precision problem in javascript
 * Also it doesn't check if rest === 0 to return at every block like the other file.
 */
function giveChange(received, cost) {
  let values = [0, 0, 0, 0, 0, 0];
  let change = ((received * 100) - (cost * 100))
  console.log(change ,'cents of change');

  values[0] = Math.trunc(change / 100);
  let rest = change % 100;

  values[1] = Math.trunc(rest / 50);
  rest = rest % 50;

  values[2] = Math.trunc(rest / 25);
  rest = rest % 25;

  values[3] = Math.trunc(rest / 10);
  rest = rest % 10;

  values[4] = Math.trunc(rest / 5);
  rest = rest % 5;

  values[5] = rest / 1;
  return values;
}

let result;
result = giveChange(5, 3.5);
console.log({ result });
result = giveChange(5.5, 3.5);
console.log({ result });
result = giveChange(3.51, 3.5);
console.log({ result });
result = giveChange(2.74, 1.56);
console.log({ result });
