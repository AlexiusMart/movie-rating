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
          filmList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          checkbox = document.querySelector('[type="checkbox"]'),
          newCinema = document.querySelector('.adding__input');

    // добавление фильма в список
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        let newFilm = newCinema.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, filmList);
        }
        if (favorite) {
            console.log('Добавляем любимый фильм');
        }
        event.target.reset();
    });    

    // удаление рекламы
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    // разные изменения на странице
    const changePage = () => {
        changeGenre.textContent = 'Драма';
    
        newBg.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    // сортировка массива
    const sortArr = (arr) => {
        arr.sort();
    };

    // изменеие списка фильмов
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });


        // удаление фильма корзиной
        const deleteFilm = document.querySelectorAll('.delete');

        deleteFilm.forEach((film, i) => {
            film.addEventListener('click', () => {
                film.parentElement.remove();
                films.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(offAdvert);
    changePage();
    createMovieList(movieDB.movies, filmList);
    
});