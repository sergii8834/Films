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