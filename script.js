// Подключаем массивы QA из каждого файла (предполагая, что они экспортируются как qaPairs)
const allQAPairs = [
    ...greetingsFarewellsQA,
    ...generalKnowledgeQA,
    ...scienceQA,
    ...animalsQA,
    ...artCultureQA,
    ...natureQA,
    ...philosophyPsychologyQA,
    ...healthFitnessQA,
    ...techInternetQA
];

// Функция для поиска ответа на заданный вопрос
function findAnswer(question) {
    const lowerCaseQuestion = question.toLowerCase();
    const foundPair = allQAPairs.find(pair => pair.question.toLowerCase() === lowerCaseQuestion);
    return foundPair ? foundPair.answer : "Sorry, I don't understand your question.";
}

// Анимация "думания" AI перед ответом
function simulateThinking() {
    const aiMessage = document.getElementById('ai-thinking');
    aiMessage.classList.add('show');

    return new Promise(resolve => {
        setTimeout(() => {
            aiMessage.classList.remove('show');
            resolve();
        }, 2000);  // Задержка в 2 секунды для имитации думания
    });
}

// Обработка ввода и отображение сообщений
document.getElementById('send-btn').addEventListener('click', async function () {
    const userQuery = document.getElementById('query-input').value;

    // Если строка пустая, ничего не делаем
    if (!userQuery) return;

    // Отображаем сообщение пользователя
    const userMessage = document.createElement('div');
    userMessage.textContent = `You: ${userQuery}`;
    userMessage.classList.add('message', 'user');
    document.querySelector('.chat-box').appendChild(userMessage);

    // Прокрутка вниз к последнему сообщению
    document.querySelector('.chat-box').scrollTop = document.querySelector('.chat-box').scrollHeight;

    // Симуляция думания AI перед ответом
    await simulateThinking();

    // Находим ответ
    const response = findAnswer(userQuery);

    // Отображаем сообщение от AI
    const aiMessage = document.createElement('div');
    aiMessage.textContent = `PicAI: ${response}`;
    aiMessage.classList.add('message', 'ai');
    document.querySelector('.chat-box').appendChild(aiMessage);

    // Прокрутка вниз к последнему сообщению
    document.querySelector('.chat-box').scrollTop = document.querySelector('.chat-box').scrollHeight;

    // Очищаем поле ввода
    document.getElementById('query-input').value = '';
});

// Плавное исчезновение экрана загрузки и появление чата
window.onload = function () {
    setTimeout(() => {
        document.querySelector('.loading-screen').style.opacity = '0';
        document.querySelector('.loading-screen').style.visibility = 'hidden';

        // Показываем чат
        document.getElementById('chat-container').classList.add('show');
    }, 5000); // Задержка в 5 секунд
};
