// script.js

// Подключение вопросов и ответов из другого файла
import { qaPairs } from './questions-answers.js';

// Функция для скрытия загрузочного экрана и показа чата
function showChat() {
    const loadingScreen = document.getElementById('loading-screen');
    const chatContainer = document.getElementById('chat-container');

    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        chatContainer.classList.add('show');
    }, 500);
}

// Через 5 секунд показать чат
setTimeout(showChat, 5000);

// Логика отправки сообщений
document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    // Добавление сообщения пользователя
    const userMessage = document.createElement('div');
    userMessage.textContent = userInput;
    userMessage.classList.add('message', 'user');
    chatBox.appendChild(userMessage);

    // Очистка поля ввода
    document.getElementById('user-input').value = '';

    // Прокрутка вниз
    chatBox.scrollTop = chatBox.scrollHeight;

    // Анимация "думания" AI
    const aiThinking = document.createElement('div');
    aiThinking.id = 'ai-thinking';
    aiThinking.textContent = "PicAI is thinking...";
    chatBox.appendChild(aiThinking);

    // Показать анимацию "думания"
    aiThinking.classList.add('show');

    // Через 2 секунды AI ответит
    setTimeout(() => {
        // Убрать анимацию "думания"
        aiThinking.classList.remove('show');

        // Сгенерировать ответ
        const aiMessage = document.createElement('div');
        const response = getAIResponse(userInput);
        aiMessage.textContent = response;
        aiMessage.classList.add('message', 'ai');
        chatBox.appendChild(aiMessage);

        // Прокрутка вниз
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 2000);
});

// Функция для генерации ответа на основе базы данных вопросов-ответов
function getAIResponse(userInput) {
    const lowerInput = userInput.toLowerCase();

    // Поиск ответа на основе введенного текста
    for (let i = 0; i < qaPairs.length; i++) {
        if (lowerInput.includes(qaPairs[i].question.toLowerCase())) {
            return qaPairs[i].answer;
        }
    }
    return "I'm sorry, I don't know the answer to that.";
}
