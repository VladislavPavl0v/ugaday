let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let rest= 0;



const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
window.location.reload ();

})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}` 
                    break;

                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`
                    break;

                case 2:
                    answerPhrase = `Ты жульничаешь!\n\u{1F631}`
                    break;

            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 3); 
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Эээммм это число ${answerNumber }?`
                    break;

                case 1:
                    answerPhrase = `Думаю это число ${answerNumber }?`
                    break;

                case 2:
                    answerPhrase = `Скорее всего это число ${answerNumber }?`
                    break;
                case 3:
                    answerPhrase = `Точно это число ${answerNumber }?`
                    break;

            }
            answerField.innerText =  answerPhrase;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue == answerNumber){
            const phraseRandom = Math.round( Math.random()*3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}` 
                    break;

                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`
                    break;

                case 2:
                    answerPhrase = `Ты жульничаешь!\n\u{1F631}`
                    break;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
           maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 3); 
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Возможно это число ${answerNumber }?`
                    break;
            
                case 1:
                    answerPhrase = `Вангую это число ${answerNumber }?`
                    break;
            
                case 2:
                    answerPhrase = `Нострадамус говорит это число ${answerNumber }?`
                    break;
                
                case 3:
                    answerPhrase = `Я угадал, это  ${answerNumber }?`
                    break;
            }
            answerField.innerText =  answerPhrase;
        }
    }
})



document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round(Math.random() * 3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Я провидец!\n\u{1F60E}`
                    break;

                case 1:
                    answerPhrase = `Я такой умный! \n\u{1F60E}`
                    break;

                case 2:
                    answerPhrase = `Я не такой могу!\n\u{1F973}`
                    break;

                case 3:
                    answerPhrase = `Я выиграл!\n\u{1F929}`
                    break;
            }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
}) 