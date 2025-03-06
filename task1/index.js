var num = 20;
if (num % 2 === 0) {
    console.log(num + "Even");
}
else {
    console.log(num + "Odd");
}
var ProductPrices = [100, 200, 300, 400, 500, 600, 700];
var higherprice = 400;
for (var i = 0; i < ProductPrices.length; i++) {
    if (ProductPrices[i] > higherprice) {
        console.log("the higher price " + ProductPrices[i]);
    }
}
var numbers = [1, 2, 3, 4, 5];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum of all elements:" + sum);
