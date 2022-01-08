//1
const numberOfFilms = prompt('сколько фильмов вы уже посмотрели ', '');
console.log(numberOfFilms);
//2
const personalMovieDB ={
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres:[],
    privat: false
};
//3
// const a = prompt('один из последних просмотренніх фильмов?', ''),
// b=prompt('на сколько оцените его', ''),
// c=prompt('один из последних просмотренніх фильмов?', ''),
// d=prompt('на сколько оцените его', '');

// personalMovieDB.movies[a]=b;
// personalMovieDB.movies[c]=d;
// console.log(personalMovieDB);

for(let i=0; i<2; i++){
    const a = prompt('один из последних просмотренніх фильмов?', ''),
          b=prompt('на сколько оцените его', '');
if(a!= null && b!= null && a!='' && b!='' && a.length<50){
    personalMovieDB.movies[a]=b;
    console.log('done');
}else{
    console.log('error');
    i--;
}

}
console.log(personalMovieDB);
if(personalMovieDB.count < 10){
    console.log('просмотрено довольно мало фильмов')
}else if(personalMovieDB.count>=10 && personalMovieDB.count<=30){
    console.log('ві класический зритель')
}else{
    console.log('произошла ошибка')
}



