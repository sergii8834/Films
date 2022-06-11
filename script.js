"use strict";

const numberOfFilms = +prompt("Яку кількість фільмів ви вже побачили?", "");
const lastWatchedMovies = prompt("Напишіть один з останніх переглянутих фільмів", "");
const scoreOfMovies = prompt("Яку оцінку ви йому поставите?", "");
const lastWatchedMovies2 = prompt("Напишіть один з останніх переглянутих фільмів", "");
const scoreOfMovies2 = prompt("Яку оцінку ви йому поставите?", "");


const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieBD.movies[lastWatchedMovies] = scoreOfMovies;
personalMovieBD.movies[lastWatchedMovies2] = scoreOfMovies2;

console.log(personalMovieBD);

let clientAmount = 5000;
let amount = 0;
const iPhonePrice = 2000;
const iPhoneAmount = 10;
const iPhoneCase = 400;
const taxRate = 0.08;

function calculateTax(amount) {
    return amount * taxRate;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

while (amount < clientAmount) {
    amount = amount + iPhonePrice;

    if (amount < clientAmount) {
        amount = amount + iPhoneCase;
    }
}

amount = amount + calculateTax(amount);

console.log(
    "Ваша покупка:" + formatAmount(amount)
);

if (amount > clientAmount) {
    console.log("Ви не можете дозволити собі цю покупку. :(");
}