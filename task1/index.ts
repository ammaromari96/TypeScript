let num: number = 20;
if (num % 2 === 0) {

    console.log(num + "Even");
} else {

    console.log(num + "Odd");

}


let ProductPrices: number[] = [100, 200, 300, 400, 500,600,700];
let higherprice: number = 400;

for (let i = 0; i < ProductPrices.length; i++) {

    if (ProductPrices[i] > higherprice) {

        console.log("the higher price " + ProductPrices[i]);
    }

}


let numbers = [1, 2, 3, 4, 5]; 
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum of all elements:" + sum);
