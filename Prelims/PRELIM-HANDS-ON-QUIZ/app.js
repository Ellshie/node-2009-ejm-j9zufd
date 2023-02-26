// Erniella Jean S. Manalansan.      |      02/01/23.    |     WD - 202

var calculate = require('./calculation.js');

var hours = 4;
var days = 6;
var hour_rate = 300;

var day_pay = calculate.multiply(hours, hour_rate);

var gp = calculate.multiply(day_pay, days);

var tax = calculate.multiply(0.1, gp);
var sss = 1200;
var pagibig = 300;
var philhealth = 400;

var deduc1 = calculate.add(tax, sss);
var deduc2 = calculate.add(pagibig, philhealth);

var total_deduc = calculate.add(deduc1, deduc2);

var netsalary = calculate.subtract(gp, total_deduc);

console.log('The gross income is ' + gp);
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-Ibig fund: ' + pagibig);
console.log('PhilHealth: ' + philhealth);
console.log('Total Deductions: ' + total_deduc);

console.log('The net salary is ' + netsalary);
