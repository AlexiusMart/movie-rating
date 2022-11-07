'use strict'

/*
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            
            if (a != '' && b != '' && a != null && b != null && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10 ) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка')
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        (personalMovieDB.privat) ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == '' || genre == null) {
                console.log('Вы не ввели данные');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
*/
// rememberMyFilms() detectPersonalLevel() showMyDB(personalMovieDB.privat) writeYourGenres()



'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Реклама

const offAdvert = document.querySelectorAll('.promo__adv div, .promo__adv img'),
      changeGenre = document.querySelector('.promo__genre'),
      newBg = document.querySelector('.promo__bg'),
      filmList = document.querySelectorAll('.promo__interactive-item');
      
offAdvert.forEach(item => {
    item.remove();
});

changeGenre.textContent = 'Драма';

newBg.style.backgroundImage = 'url("img/bg.jpg")';

movieDB.movies.sort();

for (let i = 0; i < filmList.length; i++) {
    filmList[i].textContent = '';
    filmList[i].textContent = `${i + 1}. ${movieDB.movies[i]}`;
};
