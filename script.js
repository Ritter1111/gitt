//1
'use strict';
//2
const personalMovieDB ={
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres:[],
    privat: false,
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
personalMovieDB.privat = false
        }else{
personalMovieDB.privat=true
        }
    },
    start: function (){
        personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели ', '');
        
        while(personalMovieDB.count=='' || personalMovieDB.count==null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('сколько фильмов вы уже посмотрели ', '');
        }
    },
    rememberFilms: function(){
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
     },
     detectPers: function() {
        if(personalMovieDB.count < 10){
            console.log('просмотрено довольно мало фильмов')
        }else if(personalMovieDB.count>=10 && personalMovieDB.count<=30){
            console.log('ві класический зритель')
        }else{
            console.log('произошла ошибка')
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
    console.log(personalMovieDB)
        }
    },
    writeYourGenres: function(){
        for(let i=1; i<=3; i++){
            const genre = prompt(`ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i-1]=genre;
        }
     }

};
//3
// const a = prompt('один из последних просмотренніх фильмов?', ''),
// b=prompt('на сколько оцените его', ''),
// c=prompt('один из последних просмотренніх фильмов?', ''),
// d=prompt('на сколько оцените его', '');

// personalMovieDB.movies[a]=b;
// personalMovieDB.movies[c]=d;
// console.log(personalMovieDB);
//detectPers();
//console.log(personalMovieDB);
