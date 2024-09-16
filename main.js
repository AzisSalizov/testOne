// Задача 1
const regExp = /^\d+$/

const containsOnlyDigits = (str) => {
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));

//Задача 2

const outputMessage = () => {
    setInterval(() => {
        console.log('Прошла секунда')
    }, 1000)
}

outputMessage()

//Задача 3

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++
        if (i > 10) {
            clearInterval(interval)
        }
    }, 1000);
}
count()

//Задача 4

const block = document.querySelector('.block');

block.onclick = () => {
    block.classList.toggle('bg_color');
}

//Задача 5

const getRequest = () => {
    const request = new XMLHttpRequest();
    request.open('GET', 'data/data.json');
    request.send();
    request.onload = () => {
        const data = JSON.parse(request.response);
        console.log(data)
    }
}

getRequest()
