var myName = "Hertzian Jay Cuervo";
let myAge = "18";
const PI = 3.1416;

let isStudent = parseInt(myAge) < 25;

const person = {
    name: {
        firstName: "Hertzian Jay",
        lastName: "Cuervo"
    },
    age: myAge,
    isStudent: isStudent,
    contact: {
        email: "cuervohertzianjay@gmail.com",
        phone: "N/A"
    },
    address: {
        street: "Km. 8.5 Matina Pangi",
        city: "Davao City",
        country: "Philippines"
    }
};

const colors = ["black", "blue", "red", "green", "blue", "orange"];

let words = ["apple", "banana", "cherry"];
let transformedWords = [];

for (let i = 0; i < words.length; i++) {
    let originalWord = words[i];
    let reversedWord = "";
    for (let j = originalWord.length - 1; j >= 0; j--) {
        reversedWord += originalWord[j];
    }
    transformedWords.push(reversedWord.toUpperCase());
}

let numbers = [12, 45, 67, 23, 90, 32, 11, 9, 28];
let evenNumbersGreaterThan20 = [];
let count = 0;

for (let num of numbers) {
    if (num % 2 === 0 && num > 20) {
        evenNumbersGreaterThan20.push(num);
        count++;
    }
}

console.log(`Found ${count} numbers: [${evenNumbersGreaterThan20.join(", ")}]`);
