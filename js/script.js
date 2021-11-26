"use strict";


const numberOfFilms = +prompt('Сколько фильмов посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB);

const a = prompt('Какой последний фильм?', ''),
      b = prompt('Ваша оценка фильму?', ''),
      c = prompt('Какой последний фильм?', ''),
      d = prompt('Ваша оценка фильму?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);