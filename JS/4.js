var num1= 22;
var num2=33.67;
console.log(num1+num2);
num2="33.67";
console.log(num1+num2);
num2=parseFloat(num2);
console.log(num1+num2);
num2=parseInt(num2);
console.log(num1+num2);
num2="33.67";
console.log(num1+(+num2));
num1=0.1;
num2=0.2;
console.log(num1+num2);
var total=num1+num2;
console.log(total.toFixed(5));
