const h1 = document.querySelector('h1'); 
const button = document.querySelector('button');
const сontainer = document.querySelector('.current-forecast');
const paragraph = document.querySelector('.current-forecast p');
const list = document.querySelector('.forecasts');
const cardTemplate = document.querySelector('#forecast-item');

function makeCardTemplate(title, paragraph) {
    const myCard = cardTemplate.content.cloneNode(true);
    myCard.querySelector('h3').textContent = title;
    myCard.querySelector('p').textContent = paragraph;
    return myCard;
}

function generateRandomValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.addEventListener('click', function () {

    const prediction = h1;
    prediction.textContent = generateRandomValue(0, 6);

    if (prediction.textContent == 0) {
        prediction.textContent = 'Тебя ждёт повышение на работе';
    }

    if (prediction.textContent == 1) {
        prediction.textContent = 'Вечер обещает быть интересным';
    }

    if (prediction.textContent == 2) {
        prediction.textContent = 'Тебе сегодня улыбнётся удача';
    }

    if (prediction.textContent == 3) {
        prediction.textContent = 'Жди подарок от любимого человека';
    }

    if (prediction.textContent == 4) {
        prediction.textContent = 'Яркое приключение уже поджидает тебя';
    }

    if (prediction.textContent == 5) {
        prediction.textContent = 'Твоя мечта исполнится в ближайшие дни';
    }

    if (prediction.textContent == 6) {
        prediction.textContent = 'Иди срочно за покупками, ты найдёшь всё то, что хотела';
    }

    const probality = paragraph;
    probality.textContent = "Вероятность:" + " " + generateRandomValue(0, 100) + "%";

    const item = makeCardTemplate(prediction.textContent, probality.textContent)
    list.prepend(item)

    container.append(prediction)
    container.append(probality)
}
)





/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */





