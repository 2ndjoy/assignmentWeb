let totalSum = 0;
let totalProduct = 1;

for (let num = 5; num <= 10; num++) {
  console.log(num);
  totalSum += num;
  totalProduct *= num;
}

console.log("Sum:", totalSum);
console.log("Product:", totalProduct);
