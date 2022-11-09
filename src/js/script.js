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

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const offAdvert = document.querySelectorAll('.promo__adv div, .promo__adv img'),
          changeGenre = document.querySelector('.promo__genre'),
          newBg = document.querySelector('.promo__bg'),
          filmList = document.querySelectorAll('.promo__interactive-item'),
          addForm = document.querySelector('form.add'),
          checkbox = document.querySelector('[type="checkbox"]'),
          newCinema = document.querySelector('.adding__input');
        
    // добавление фильма в список
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const addCinema = newCinema.value;
        movieDB.movies.push(addCinema);
        sortArr(movieDB.movies);
        changeList(movieDB.movies, filmList);
        event.target.reset();
    });

    // изменеие списка фильмов
    function changeList(base, list) {
        for (let i = 0; i < list.length; i++) {
            list[i].textContent = '';
            list[i].textContent = `${i + 1}. ${base[i]}`;
        };
    }

    // удаление рекламы
    const deleteAdv = (adv) => {
        adv.forEach(item => {
            item.remove();
        });
    }
    
    // разные изменения на странице
    const changePage = () => {
        changeGenre.textContent = 'Драма';
    
        newBg.style.backgroundImage = 'url("img/bg.jpg")';
    }
    
    // сортировка массива
    const sortArr = (arr) => {
        arr.sort();
    }

    changePage();
    deleteAdv(offAdvert);
    sortArr(movieDB.movies);
    changeList(movieDB.movies, filmList);

    /* Задания на урок:
    
    1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
    новый фильм добавляется в список. Страница не должна перезагружаться.
    Новый фильм должен добавляться в movieDB.movies.
    Для получения доступа к значению input - обращаемся к нему как input.value;
    P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
    
    2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
    
    3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
    
    4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
    "Добавляем любимый фильм"
    
    5) Фильмы должны быть отсортированы по алфавиту */

});