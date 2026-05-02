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
        result.textContent = "Имена не должны содержать цыфры";
        return;

    }

    const randomNumber = Math.floor(Math.random() * 100);
    result.textContent = `Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber}`
});
