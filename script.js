// script.js

// Функция для скрытия загрузочного экрана и отображения чата
function showChat() {
    const loadingScreen = document.getElementById('loading-screen');
    const chatContainer = document.getElementById('chat-container');

    // Скроем загрузочный экран с плавным эффектом
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        chatContainer.classList.add('show'); // Плавное появление чата
    }, 500);
}

// Через 5 секунд покажем чат
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

    // Симуляция ответа AI
    setTimeout(() => {
        const aiMessage = document.createElement('div');
        aiMessage.textContent = "This is AI's response.";
        aiMessage.classList.add('message', 'ai');
        chatBox.appendChild(aiMessage);

        // Автопрокрутка вниз
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    // Очистка поля ввода
    document.getElementById('user-input').value = '';

    // Прокрутка вниз
    chatBox.scrollTop = chatBox.scrollHeight;
});
