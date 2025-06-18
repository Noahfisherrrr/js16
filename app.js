let numbers = [11, 22, 33, 44, 55];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;
document.getElementById("numbers").textContent = numbers;
document.getElementById("sum").textContent = sum;
document.getElementById("average").textContent = average;
console.log(sum)
console.log(average)