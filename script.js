// script.js

// Функция для скрытия загрузочного экрана и показа чата
function showChat() {
    const loadingScreen = document.getElementById('loading-screen');
    const chatContainer = document.getElementById('chat-container');

    // Плавное скрытие загрузочного экрана
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Полностью убираем экран
        chatContainer.classList.add('show'); // Плавное появление чата
    }, 500); // Подожди, пока загрузка завершится (0.5 секунды)
}

// Через 5 секунд показать чат
setTimeout(showChat, 5000);

// Логика отправки сообщений в чат
document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем отправку формы

    const userInput = document.getElementById('user-input').value;
    const chatBox = document.getElementById('chat-box');

    // Добавляем сообщение пользователя в чат
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
        aiThinking.remove(); // Убираем элемент

        // Сгенерировать ответ
        const aiMessage = document.createElement('div');
        const response = getAIResponse(userInput);
        aiMessage.textContent = response;
        aiMessage.classList.add('message', 'ai');
        chatBox.appendChild(aiMessage);

        // Прокрутка вниз
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 2000); // Через 2 секунды AI "думает"
});

// Функция для генерации ответа на основе базы данных вопросов-ответов
function getAIResponse(userInput) {
    // Простой пример
    return "Это ответ на ваш вопрос!";
}
