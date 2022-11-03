"use strict"

// форма опроса
// const answers = []
// answers[0] = prompt('Ваше имя?', '')
// answers[1] = prompt('Ваша фамилия?', '')
// answers[2] = prompt('Какой возраст?', '')

// document.write(answers)

// форма опроса по фильмам


/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: () => {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || personalMovieDB.count == 0 ) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < personalMovieDB.count; i++) {
            do {
                let a = prompt('Один из последних просмотренных фильмов?', '')
            } while (a == '' || a.length > 50 || a == null)
            do {
                let b = prompt('Оцените фильм', '')
            } while (b == '' || b.length > 50 || b == null)
            personalMovieDB.movies[a] = b
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count === 1) alert('Просмотрено довольно мало фильмов')
        else if (personalMovieDB.count > 1 && personalMovieDB.count <= 3) alert('Вы классический зритель')
        else if (personalMovieDB.count > 3) alert('Вы киноман')
        else alert('Произошла ошибка');
    },
    writeYourGenres: () => {
        for (let i = 1; i < 4; i++) {
            const answerGenre = prompt(`Ваш любимый жанр под номером ${i}`)

            if (answerGenre === '' || answerGenre === null ) {
                console.log(`Вы оставили поле пустым`)
                i--
            } else {
                personalMovieDB.genres.push(answerGenre)
            }
        }

        personalMovieDB.genres.forEach(function (curr, i, array) {
            console.log(`Любимый жанр #${i+1} - это ${curr}`)
        })
    },
    toggleVisibleMyDB: () => {
        (personalMovieDB.privat) ? personalMovieDB.privat = false : personalMovieDB.privat = true
    },
    showMyDB: (ourPrivat) => {
        if (ourPrivat == false) console.log(personalMovieDB)
    }
}

console.log(personalMovieDB.toggleVisibleMyDB())
console.log(personalMovieDB.showMyDB(personalMovieDB.privat))








// const myArr = [1, 3, 8]

// myArr.push(123)

// myArr.forEach (function(item, i, myArr) {
//     console.log(`${i}: ${item}`)
// })

// console.log(myArr)


// const obj = {
//     a: 10,
//     b: 5,
//     x: 37
// }

// const newObj = {
//     aa: 55,
//     xx: 6
// }

// const newNewObj = Object.assign({}, newObj)

// console.log(newNewObj)