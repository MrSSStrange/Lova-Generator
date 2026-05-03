const nameOne = document.querySelector(".name-one");
const nameTwo = document.querySelector(".name-two");
const button = document.querySelector(".button");
const result = document.querySelector(".result");

button.addEventListener("click", function () {
    const firstName = nameOne.value.trim();
    const secondName = nameTwo.value.trim();


    if (firstName === "" || secondName === "") {
        result.textContent = "Введите оба имени";
        return;
    }

    if (firstName.match(/[0-9]/) || secondName.match(/[0-9]/)) {
        result.textContent = "Имена не должны содержать цифры";
        return;

    }

    const randomNumber = Math.floor(Math.random() * 100);

    if (randomNumber <= 33) {
        result.textContent = `Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber}. Вам нужно поискать человека с другим именем 😔`
    } else if (randomNumber > 33 && randomNumber <= 66) {
        result.textContent = `Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber}. Совместимость неплохая, но можно лучше 🙂`
    } else {
        result.textContent = `Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber}. Вы идеально подходите друг к другу 🥹`
    }
    });
