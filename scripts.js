let numberOfFilms = prompt("Сколько фильмов ты посмотрел?", "18");
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};
console.log(personalMovieDB);
let a = prompt("Какой был последний фильм?", "");
let b = prompt("Оцени его?", "");
let c = prompt("Какой был последний фильм?", "");
let d = prompt("Оцени его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;