// numbers with sum and average
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

// Product
let device = {
    productName: "iPhone 15 Pro",
    memory: ["128GB","256GB","512GB", "1TB"],
    isAvailableAt:[
        "21 Chavchavadze St, Batumi 6010", 
        "22 Tbel-Abuseridze St, Batumi", 
        "29 Sherif Khimshiashvili St, Batumi 6000"]
};
console.log(`${device.productName} with ${device.memory[1]} memory is available at ${device.isAvailableAt[0]}.`);
document.getElementById("iphone").innerText = `${device.productName} with ${device.memory[1]} memory is available at ${device.isAvailableAt[0]}.`;

// bookshelf
let bookshelf = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        yearPublished: 1925
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        yearPublished: 1960
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        yearPublished: 1866
    }
];
console.log(bookshelf)
