let createAnswerArray = function (word) {
    let newArray = [];
    for (let i = 0; i < word.length; i++) {
        newArray[i] = "_";
    }
    return newArray;
};

let checkForWin = function (remainingLetters, attempt) {
    if (remainingLetters === 0) {
        alert(answerArray.join(" "));
        alert("Вы угадали слово! Загаданное слово: " + word + "\n"
            + "Количество неудачных попыток: " + attempt);
    } else {
        alert("Игра остановлена" + "\n" + "Перезагрузите страницу, чтобы начать игру заново");
    }
};

let words = [
    "медоед",
    "кот",
    "собака",
    "черепаха",
    "крокодил",
    "лев",
    "тигр",
    "корова",
    "кабан",
    "медведь"
];

let word = words[Math.floor(Math.random() * words.length)];
let answerArray = createAnswerArray(word);

let remainingLetters = word.length;
let attempt = 0;

alert("Привет!" + "\n"
    + "Тема игры: животные" + "\n"
    + "Попробуй угадать загаданное слово!");

while (remainingLetters > 0) {
    alert(answerArray.join(" ") + "\n\n"
        + "Количество неудачных попыток: " + attempt);
    let guess = prompt("Угадайте букву или нажмите \"Отмена\" для выхода из игры.");
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Введите только одну букву");
    } else {
        guess = guess.toLowerCase();
        let flagAttempt = false;

        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess && answerArray[i] === "_") {
                answerArray[i] = guess;
                remainingLetters--;
                flagAttempt = true;
            }
        }

        if (!flagAttempt) {
            attempt++;
        }
    }
}

checkForWin(remainingLetters, attempt);