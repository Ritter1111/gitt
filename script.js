//1
let numberOfFilms = prompt("сколько фильмов вы уже посмотрели ", 0);
console.log(numberOfFilms);
//2
let personalMovieDB ={
    count: numberOfFilms,
    actors: {},
    genres:[],
    privat: false
};
//3
const a = prompt('один из последних просмотренніх фильмов?', ''),
b=prompt('на сколько оцените его', ''),
c=prompt('один из последних просмотренніх фильмов?', ''),
d=prompt('на сколько оцените его', '');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
console.log(personalMovieDB);
