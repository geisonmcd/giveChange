# Give Change Function 

Implement a function which, given an amount of money, and a cost of the product, returns an array specifying which coins are to be given as change.

## Floating point number precision:

indexScaledBy100.js multiplies the values by 100 to work with cents;

indexToFixed.js uses toFixed(2);

## Examples:

let result;  
result = giveChange(5, 3.5);  
console.log({ result });  
150 cents of change  
result: [ 1, 1, 0, 0, 0, 0 ]


result = giveChange(5.5, 3.5);  
console.log({ result });  
200 cents of change  
result: [ 2, 0, 0, 0, 0, 0 ]  

result = giveChange(3.51, 3.5);  
console.log({ result });  
1 cents of change  
{ result: [ 0, 0, 0, 0, 0, 1 ] }  

result = giveChange(2.74, 1.56);  
console.log({ result });  
118 cents of change  
{ result: [ 1, 0, 0, 1, 1, 3 ] }  


