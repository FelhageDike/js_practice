let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

};
function showMyDB(){
    if(personalMovieDB.privat== false){
        console.log(personalMovieDB);
    }
}
function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1]= prompt(`Favorite Generes ${i}`, "");
    }
}
 function start(){
     numberOfFilms = +prompt("Сколько фильмов ты посмотрел?", "18");
     while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
         let numberOfFilms = prompt("Сколько фильмов ты посмотрел?", "18");
     }
 }
 function personalLevel(){
 switch (true){
    case (numberOfFilms < 10):
        alert("Что то маловато фильмов дружок пирожок");
        break;
    case (numberOfFilms>10 && numberOfFilms<30):
        alert("Ты норм поцанчик");
        break;
    case (numberOfFilms>30):
        alert("Задрот...");
        break;
    default:alert("Даже не знаю кто ты лох....")
}
 }
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Какой был последний фильм?", "");
        let b = prompt("Оцени его?", "");
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
writeYourGenres();
showMyDB();